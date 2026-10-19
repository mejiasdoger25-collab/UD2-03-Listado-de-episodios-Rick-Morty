import { Episode } from "./episode"

export interface EpisodeResponse {
  info: Info
  results: Episode[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}