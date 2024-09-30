import { create } from "zustand";
import { TGameStatus } from "../types";
import { middlewareLocalStorage } from "./middlewareLocalStorage";

interface IINIT_STATE {
  roomId: string | null;
  word: string | null;
  isWordDiller: boolean | null;
  usersList: {
    team01: string[];
    team02: string[];
    userTeam: 1 | 2;
    team01Score: number;
    team02Score: number;
  };
  round: number;
  status: TGameStatus;
}

const INIT_STATE: IINIT_STATE = {
  roomId: null,
  word: null,
  isWordDiller: null,
  usersList: {
    team01: [],
    team02: [],
    userTeam: 1,
    team01Score: 0,
    team02Score: 0,
  },
  round: 0,
  status: "WAITING",
};

interface IGameRoomStore extends IINIT_STATE {
  setRoomId: (roomId: string) => void;
  setWord: (word: string) => void;
  setIsWordDiller: (isWordDiller: boolean) => void;
  setUsersList: (usersList: {
    team01: string[];
    team02: string[];
    userTeam: 1 | 2;
    team01Score: number;
    team02Score: number;
  }) => void;
  setTeam01Score: (team01Score: number) => void;
  setTeam02Score: (team02Score: number) => void;
  setRound: (round: number) => void;
  setStatus: (status: TGameStatus) => void;
  reset: () => void;
}

const middle = middlewareLocalStorage<IGameRoomStore>("gameRoom");

export const useGameStateRoom = create<IGameRoomStore>()(
  middle((set) => ({
    ...INIT_STATE,
    setRoomId: (roomId) => set({ roomId }),
    setWord: (word) => set({ word }),
    setIsWordDiller: (isWordDiller) => set({ isWordDiller }),
    setUsersList: (usersList) => set({ usersList }),
    setTeam01Score: (team01Score) =>
      set((state) => ({ usersList: { ...state.usersList, team01Score } })),
    setTeam02Score: (team02Score) =>
      set((state) => ({ usersList: { ...state.usersList, team02Score } })),
    setRound: (round) => set({ round }),
    setStatus: (status) => set({ status }),
    reset: () => set(INIT_STATE),
  })),
);
