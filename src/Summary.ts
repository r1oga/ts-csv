import { Analyzer, OutputTarget, Game } from './interfaces.ts'

export class Summary {
  // composition
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(games: Game[]): void {
    this.outputTarget.print(this.analyzer.run(games))
  }
}
