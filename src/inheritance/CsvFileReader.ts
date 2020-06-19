import { join, BufReader, parse } from '../deps.ts'

interface Data {
  [key: string]: string
}

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  async read(headers: string[]) {
    const path = join('.', this.filename)
    const file = await Deno.open(path)
    const data = await parse(new BufReader(file), {
      header: headers
    })

    this.data = data.map((data: any) => this.parse(data))

    Deno.close(file.rid)
  }

  abstract parse(data: Data): T
}
