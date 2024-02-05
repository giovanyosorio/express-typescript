import diaryData from './diaries.json';
import { DiaryEntry,NonSensitiveDiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () :DiaryEntry[]=> diaries

export const getEntriesWithOutSensitiveInfo = () :NonSensitiveDiaryEntry[]=>{
    return diaries.map(({id,date,weather,visibility})=>({id,date,weather,visibility}))
}

export const addEntry = () :undefined=> undefined
