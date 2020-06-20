import { GameResult } from './GameResult.ts'

export interface Data {
  [key: string]: string
}

export interface DataReader {
  read(readers: string[]): void
  data: Data[]
}

export interface Game {
  home: string
  away: string
  winner: GameResult
  date: Date
  score_away: number
  score_home: number
  referee: string
}

export interface Analyzer {
  run(games: Game[]): string
}

export interface OutputTarget {
  print(report: string): void
}
