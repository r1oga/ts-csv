import { join, BufReader, parse } from '../deps.ts'

interface Game {
  [key: string]: string
}

async function loadData() {
  const path = join('.', 'data.csv')
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

  Deno.close(file.rid)

  return data
}

async function numWinsBy(name: string) {
  const data = await loadData()
  const filtered = (data as Game[]).filter(
    game =>
      (game.home === name && game.winner === 'H') ||
      (game.away === name && game.winner === 'A')
  )
  return filtered.length
}

console.log(`Man United won ${await numWinsBy('Man United')} games`)
