import { GameResult } from './GameResult.ts'
import { dateStringToDate } from './utils.ts'
import { Game, Data, DataReader } from './interfaces.ts'

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
