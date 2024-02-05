import diaryData from './diaries.json';
import { DiaryEntry,NonSensitiveDiaryEntry, Weather, visibility } from '../types';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () :DiaryEntry[]=> diaries

export const findById = (id:number):DiaryEntry|undefined=>{
    const entry = diaries.find(d=>d.id===id)
    return entry
}
export const getEntriesWithOutSensitiveInfo = () :NonSensitiveDiaryEntry[]=>{
    return diaries.map(({id,date,weather,visibility})=>({id,date,weather,visibility}))
}

export const addEntry =(date:string,weather:Weather,visibility:visibility,comment:string):DiaryEntry=>{
    const newDiaryEntry = {
        id:Math.max(...diaries.map(d=>d.id))+1,
        date,
        weather,
        visibility,
        comment
    }
    diaries.push(newDiaryEntry)
    return newDiaryEntry
}