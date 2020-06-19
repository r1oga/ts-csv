import { GameReader } from './GameReader.ts'
import { GameResult } from './GameResult.ts'

const reader = new GameReader('data.csv')
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

const data = reader.data
const numWinsBy = (name: string): void => {
  const filtered = data.filter(
    game =>
      (game.away === name && game.winner === GameResult.HomeWin) ||
      (game.away === name && game.winner === GameResult.AwayWin)
  )
  console.log(`${name} won ${filtered.length} games`)
}

numWinsBy('Man United')
