import { useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { IUser, TGameStatus } from "../types";
import { useUserStore } from "../Stores/useUserStore";
import { useGameStateRoom } from "../Stores/useGameRoomState";

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();
  const { setRoomId, setUsersList, setRound, setStatus } = useGameStateRoom();

  const createUserAndGame = async ({
    userName,
    team,
  }: {
    userName: string;
    team: 1 | 2;
  }) => {
    setIsLoading(true);
    const res = await api.post<{
      user: IUser;
      game: {
        roomId: string;
        round: number;
        status: TGameStatus;
        team01: IUser[];
        team02: IUser[];
      };
    }>({
      url: `/game`,
      data: {
        userName,
        team,
      },
    });
    setIsLoading(false);
    if (res.error) {
      toast.error(res.message);
      return null;
    }
    setUser(res.data?.user);
    setRoomId(res.data?.game?.roomId);
    setRound(res.data?.game?.round);
    setStatus(res.data?.game?.status);
    setUsersList({
      team01: res.data?.game?.team01.map((user) => user.username) || [],
      team02: res.data?.game?.team02.map((user) => user.username) || [],
      userTeam: team || 1,
      team01Score: 0,
      team02Score: 0,
    });
    return res.data?.user;
  };

  return { createUserAndGame, isLoading };
};
