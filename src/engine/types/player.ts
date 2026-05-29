export type PlayerColorType = 'red' | 'green' | 'yellow' | 'blue'
export type PlayerCountType = 0 | 1 | 2 | 3

export function toPlayerCountType(value: number): PlayerCountType {
  if (value < 0 || value > 3) {
    throw new Error('Invalid player count')
  }

  return value as PlayerCountType
}