import { Analyzer, OutputTarget } from './interfaces.ts'

export class Summary {
  // composition
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
