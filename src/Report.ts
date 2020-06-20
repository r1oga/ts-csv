import { OutputTarget } from './interfaces.ts'

export class ConsoleReport implements OutputTarget {
  print(report: string) {
    console.log(report)
  }
}

export class HtmlReport implements OutputTarget {
  async print(report: string) {
    const html = `<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'/>
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
  </body>
</html>
`
    await Deno.writeTextFileSync('report.html', html)
  }
}
