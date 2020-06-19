import { CsvFileReader } from './CsvFileReader.ts'
import { dateStringToDate } from './utils.ts'
import { MatchResult } from './MatchResult.ts'

async function numWinsBy(name: string) {
  const reader = new CsvFileReader('data.csv')
  const headers = [
    'date',
    'home',
    'away',
    'score_home',
    'score_away',
    'winner',
    'referee'
  ]

  await reader.read(headers)

  const filtered = reader.data
    .map(game => {
      return {
        home: game.home,
        away: game.away,
        winner: game.winner as MatchResult,
        referee: game.referee,
        date: dateStringToDate(game.date),
        score_home: +game.score_home,
        score_away: +game.score_away
      }
    })
    .filter(
      game =>
        (game.away === name && game.winner === MatchResult.HomeWin) ||
        (game.away === name && game.winner === MatchResult.AwayWin)
    )

  // console.log(filtered)
  console.log(`${name} won ${filtered.length} games`)
}

await numWinsBy('Arsenal')
