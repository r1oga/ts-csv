import { Analyzer, Game } from './interfaces.ts'
import { GameResult } from './GameResult.ts'

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

export class AverageGoals implements Analyzer {
  constructor(public name: string) {}

  run(games: Game[]): string {
    // TODO
    return 'todo'
  }
}
