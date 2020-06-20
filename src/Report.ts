import { OutputTarget } from './interfaces.ts'

export class ConsoleReport implements OutputTarget {
  print(report: string) {
    console.log(report)
  }
}

export class HtmlReport implements OutputTarget {
  print(report: string) {
    console.log(`<div>${report}</divc`)
  }
}
