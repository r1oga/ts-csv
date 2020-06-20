// import { CsvFileReader } from './CsvFileReader.ts'
// import { GameReader, Game } from './GameReader.ts'
// import { GameResult } from './GameResult.ts'
//
// const gameReader = new GameReader(new CsvFileReader('data.csv'))
// const headers = [
//   'date',
//   'home',
//   'away',
//   'score_home',
//   'score_away',
//   'winner',
//   'referee'
// ]
//
// await gameReader.load(headers)
// const data = gameReader.games
//
// const numWinsBy = (name: string): void => {
//   const filtered = data.filter(
//     (game: Game) =>
//       (game.away === name && game.winner === GameResult.HomeWin) ||
//       (game.away === name && game.winner === GameResult.AwayWin)
//   )
//   console.log(`${name} won ${filtered.length} games`)
// }
//
// numWinsBy('Arsenal')
