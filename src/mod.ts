import { CsvFileReader, GameReader } from './Reader.ts'
import { Summary } from './Summary.ts'
import { Wins } from './Analysis.ts'
import { ConsoleReport } from './Report.ts'

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
const summaryWins = new Summary(new Wins('Arsenal'), new ConsoleReport())

summaryWins.buildAndPrint(gameReader.games)
