export interface Player {
  name: string,
  score: number
}

export interface Leaderboard {
  id: number,
  title: string,
  players: Player[]
}