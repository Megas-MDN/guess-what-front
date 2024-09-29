export type TGameStatus = "WAITING" | "IN PROGRESS" | "FINISHED";

export interface IUser {
  username: string;
  socketId: string;
  _id: string;
}
export interface IGameCardProps {
  status: TGameStatus;
  round: number;
  team01: IUser[];
  team02: IUser[];
  roomId: string;
  whoWins?: 1 | 2 | null;
  roundWinner?: number | null;
  roundLoser?: number | null;
}
