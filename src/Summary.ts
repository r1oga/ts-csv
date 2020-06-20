import { Analyzer, OutputTarget, Game } from './interfaces.ts'
import { Wins } from './Analysis.ts'
import { HtmlReport } from './Report.ts'

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new Wins(team), new HtmlReport())
  }
  // composition
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(games: Game[]): void {
    this.outputTarget.print(this.analyzer.run(games))
  }
}
