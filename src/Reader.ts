import { join, BufReader, parse } from './deps.ts'
import { Data, Game, DataReader } from './interfaces.ts'
import { GameResult } from './GameResult.ts'
import { dateStringToDate } from './utils.ts'

export class CsvFileReader {
  data: Data[] = []

  constructor(public filename: string) {}

  async read(headers: string[]) {
    const path = join('src', this.filename)
    const file = await Deno.open(path)
    this.data = (await parse(new BufReader(file), {
      header: headers
    })) as Data[]

    Deno.close(file.rid)
  }
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
