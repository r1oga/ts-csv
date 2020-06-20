import { GameReader } from './Reader.ts'
import { Summary } from './Summary.ts'

const gameReader = GameReader.fromCsv('data.csv')
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
const summaryHtml = Summary.winsAnalysisWithHtmlReport('Man United')
summaryHtml.buildAndPrint(gameReader.games)
