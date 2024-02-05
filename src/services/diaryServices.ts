import diaryData from './diaries.json';
import { DiaryEntry,NonSensitiveDiaryEntry, Weather, newDiaryEntry, visibility } from '../types';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () :DiaryEntry[]=> diaries

export const findById = (id:number):DiaryEntry|undefined=>{
    const entry = diaries.find(d=>d.id===id)
    return entry
}
export const getEntriesWithOutSensitiveInfo = () :NonSensitiveDiaryEntry[]=>{
    return diaries.map(({id,date,weather,visibility})=>({id,date,weather,visibility}))
}

export const addEntry =(newDiaryEntry:newDiaryEntry):DiaryEntry=>{
    const newDiary = {
        id:Math.max(...diaries.map(d=>d.id))+1,
        ...newDiaryEntry}
    diaries.push(newDiary)
    return newDiary
}