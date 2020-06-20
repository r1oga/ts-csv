import { CsvFileReader, GameReader } from './Reader.ts'
import { Summary } from './Summary.ts'
import { Wins } from './Analysis.ts'
import { ConsoleReport, HtmlReport } from './Report.ts'

const gameReader = new GameReader(new CsvFileReader('data.csv'))
const headers = [
  'date',
  'home',
  'away',
  'score_home',
  'score_away',
  'winner',
  'referee'
]

await gameReader.load(headers)
// const summary = new Summary(new Wins('Arsenal'), new ConsoleReport())
const summary = new Summary(new Wins('Arsenal'), new HtmlReport())

summary.buildAndPrint(gameReader.games)
