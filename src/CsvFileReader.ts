import { join, BufReader, parse } from '../deps.ts'

interface Data {
  [key: string]: string
}

export class CsvFileReader {
  data: Data[] = []

  constructor(public filename: string) {}

  async read() {
    const path = join('.', this.filename)
    const file = await Deno.open(path)
    const data = await parse(new BufReader(file), {
      header: [
        'date',
        'home',
        'away',
        'score_home',
        'score_away',
        'winner',
        'referee'
      ]
    })

    this.data = data as Data[]

    Deno.close(file.rid)
  }
}
