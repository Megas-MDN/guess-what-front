import { useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useGameStateRoom } from "../Stores/useGameRoomState";
import { IUser, TGameStatus } from "../types";

export const useGameRoom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setRound, setStatus, setUsersList, usersList } = useGameStateRoom();

  const fetchGameRoom = async (roomId: string | null) => {
    if (!roomId) return null;
    const res = await api.get<{
      round: number;
      status: TGameStatus;
      team01: IUser[];
      team02: IUser[];
    }>({
      url: `/game/${roomId}`,
    });
    console.log(res.data, "<<< fetchGameRoom");
    setIsLoading(false);
    if (res.error) {
      toast.error(res.message);
      return null;
    }
    setRound(res.data?.round);
    setStatus(res.data?.status);
    setUsersList({
      ...usersList,
      team01: res.data?.team01.map((user) => user.username) || [],
      team02: res.data?.team02.map((user) => user.username) || [],
      team01Score: 0,
      team02Score: 0,
    });
  };

  const joinRoom = async ({
    userName,
    team,
    roomId,
  }: {
    userName: string;
    team: 1 | 2;
    roomId: string | null;
  }) => {
    if (!roomId) return null;
    setIsLoading(true);
    const res = await api.put<{ team01: IUser[]; team02: IUser[] }>({
      url: `/game/${roomId}`,
      data: { userName, team },
    });
    setIsLoading(false);
    if (res.error) {
      toast.error(res.message);
      return null;
    }
    return res.data;
  };

  return {
    isLoading,
    joinRoom,
    fetchGameRoom,
  };
};
