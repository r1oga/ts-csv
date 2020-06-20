import { join, BufReader, parse } from './deps.ts'
import { Data } from './interfaces.ts'

export class CsvFileReader {
  data: Data[] = []

  constructor(public filename: string) {}

  async read(headers: string[]) {
    const path = join('src', this.filename)
    const file = await Deno.open(path)
    this.data = (await parse(new BufReader(file), {
      header: headers
    })) as Data[]

    Deno.close(file.rid)
  }
}
