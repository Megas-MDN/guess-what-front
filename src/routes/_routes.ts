import { AnyRouter } from "./AnyRouter";
import { CreateGameRouter } from "./CreateGameRouter";
import { GameRouter } from "./GameRouter";
import { HomeRouter } from "./HomeRouter";

export const mainRoutes = [HomeRouter, AnyRouter, CreateGameRouter, GameRouter];
