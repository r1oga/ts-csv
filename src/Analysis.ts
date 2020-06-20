import { Analyzer, Game } from './interfaces.ts'
import { GameResult } from './GameResult.ts'
import * as _ from 'https://deno.land/x/lodash@4.17.15-es/lodash.js'

export class Wins implements Analyzer {
  constructor(public name: string) {}

  run(games: Game[]): string {
    const filtered = games.filter(
      (game: Game) =>
        (game.away === this.name && game.winner === GameResult.HomeWin) ||
        (game.away === this.name && game.winner === GameResult.AwayWin)
    )
    return `${this.name} won ${filtered.length} games`
  }
}

// export class AverageGoals implements Analyzer {
//   constructor(public name: string) {}
//
//   run(games: Game[]): string {
//     // score as Home team
//     const agvGoalsHome: number = _.chain(games)
//       .filter((game: Game) => game.home === this.name)
//       .meanBy('score_home')
//
//     // score as Home team
//     const agvGoalsAway: number = _.chain(games)
//       .filter((game: Game) => game.away === this.name)
//       .meanBy('score_away')
//
//     return `{this.name} scored in average ${
//       (agvGoalsHome + agvGoalsAway) / 2
//     } goals`
//   }
// }
