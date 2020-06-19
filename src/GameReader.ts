import { GameResult } from './GameResult.ts'
import { dateStringToDate } from './utils.ts'

interface Data {
  [key: string]: string
}

interface DataReader {
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

export class GameReader {
  games: Game[] = []

  constructor(public reader: DataReader) {}

  async load(headers: string[]) {
    await this.reader.read(headers)
    this.games = this.reader.data.map(
      (game: Data): Game => {
        return {
          home: game.home,
          away: game.away,
          winner: game.winner as GameResult,
          referee: game.referee,
          date: dateStringToDate(game.date),
          score_home: +game.score_home,
          score_away: +game.score_away
        }
      }
    )
  }
}

// return {
//   home: game.home,
//   away: game.away,
//   winner: game.winner as GameResult,
//   referee: game.referee,
//   date: dateStringToDate(game.date),
//   score_home: +game.score_home,
//   score_away: +game.score_away
// }
