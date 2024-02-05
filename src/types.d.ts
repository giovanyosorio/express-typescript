export type Weather = "sunny" | "rainy" | "cloudy" | "thunderstorm" | "windy" | "snowy";
export type visibility = "greate" | "good" | "ok" | "poor";

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: visibility;
    comment: string;
}