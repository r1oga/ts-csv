import { CsvFileReader } from './CsvFileReader.ts'
import { dateStringToDate } from './utils.ts'
import { MatchResult } from './MatchResult.ts'

interface Game {
  home: string
  away: string
  winner: MatchResult
  date: Date
  score_away: number
  score_home: number
  referee: string
}

async function parse(name: string, headers: string[]) {
  const reader = new CsvFileReader('data.csv')

  await reader.read(headers)

  return reader.data.map(
    (game): Game => {
      return {
        home: game.home,
        away: game.away,
        winner: game.winner as MatchResult,
        referee: game.referee,
        date: dateStringToDate(game.date),
        score_home: +game.score_home,
        score_away: +game.score_away
      }
    }
  )
}

const headers = [
  'date',
  'home',
  'away',
  'score_home',
  'score_away',
  'winner',
  'referee'
]
const data = await parse('data.csv', headers)
const numWinsBy = (name: string): void => {
  const filtered = data.filter(
    game =>
      (game.away === name && game.winner === MatchResult.HomeWin) ||
      (game.away === name && game.winner === MatchResult.AwayWin)
  )
  console.log(`${name} won ${filtered.length} games`)
}

numWinsBy('Arsenal')
