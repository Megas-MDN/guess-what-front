import { create } from "zustand";
import { IGameCardProps } from "../types";

interface IINIT_STATE {
  gameRoomList: IGameCardProps[];
  page: number;
  limit: number;
  totalCount: number;
}

const INIT_STATE: IINIT_STATE = {
  gameRoomList: [],
  page: 0,
  limit: 10,
  totalCount: 0,
};

interface IGameStore extends IINIT_STATE {
  setGameRoomList: (gameRoomList: IGameCardProps[]) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setTotalCount: (totalCount: number) => void;
  reset(): void;
}

export const useGameStore = create<IGameStore>((set) => ({
  ...INIT_STATE,
  setGameRoomList: (gameRoomList: IGameCardProps[]) =>
    set(() => ({ gameRoomList })),
  setPage: (page: number) => set(() => ({ page })),
  setLimit: (limit: number) => set(() => ({ limit })),
  setTotalCount: (totalCount: number) => set(() => ({ totalCount })),
  reset: () => set(INIT_STATE),
}));
