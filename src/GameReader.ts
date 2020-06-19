import { CsvFileReader } from './CsvFileReader.ts'
import { dateStringToDate } from './utils.ts'
import { GameResult } from './GameResult.ts'

interface Data {
  [key: string]: string
}

interface Game {
  home: string
  away: string
  winner: GameResult
  date: Date
  score_away: number
  score_home: number
  referee: string
}

export class GameReader extends CsvFileReader<Game> {
  parse(game: Data): Game {
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
}
