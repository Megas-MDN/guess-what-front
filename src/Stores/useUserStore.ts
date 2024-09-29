import { create } from "zustand";
import { middlewareLocalStorage } from "./middlewareLocalStorage";
import { IUser } from "../types";

interface IIniteState {
  user: IUser | null;
  userName: string;
  team: 1 | 2 | null;
}

interface IUserStore extends IIniteState {
  setUser: (user: IUser | null) => void;
  setUserName: (userName: string) => void;
  setTeam: (team: 1 | 2) => void;
  reset: () => void;
}

const middle = middlewareLocalStorage<IUserStore>("user");

export const useUserStore = create<IUserStore>()(
  middle((set) => ({
    user: null,
    userName: "",
    team: null,
    setUser: (user) => set({ user }),
    setUserName: (userName: string) => set({ userName: userName.trim() }),
    setTeam: (team: 1 | 2 | null) => set({ team }),
    reset: () => set({ user: null, userName: "", team: null }),
  })),
);
