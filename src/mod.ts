import { CsvFileReader } from './CsvFileReader.ts'

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

async function numWinsBy(name: string) {
  const reader = new CsvFileReader('data.csv')
  await reader.read()
  const filtered = reader.data.filter(
    game =>
      (game.home === name && game.winner === MatchResult.HomeWin) ||
      (game.away === name && game.winner === MatchResult.AwayWin)
  )

  console.log(`${name} won ${filtered.length} games`)
}

await numWinsBy('Arsenal')
