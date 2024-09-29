import { useState } from "react";
import { api } from "../services/api";
import { useGameStore } from "../Stores/useGameStore";
import { toast } from "react-toastify";
import { IGameCardProps } from "../types";

export const useGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setGameRoomList, setTotalCount, page, limit } = useGameStore();

  const fetchGameRooms = async () => {
    setIsLoading(true);
    const res = await api.get<{ result: IGameCardProps[]; totalCount: number }>(
      {
        url: `/game?offset=${page * limit}&limit=${limit}`,
      },
    );
    setIsLoading(false);
    if (res.error) {
      toast.error(res.message);
      return [];
    }
    setGameRoomList(res.data?.result);
    setTotalCount(res.data?.totalCount);
    toast.success("Pegou");
    return res.data;
  };
  return { fetchGameRooms, isLoading };
};
