import { PlayerService } from "@/services/api";
import type { ApiResponse } from "@core/Errors";
import { Player } from "@services/user/entities/Player.entity";

export class PlayerResources {
  static async getAllPlayers(): Promise<ApiResponse<Player[]>> {
    return PlayerService.getAllPlayers()
      .then((response) => ({
        data: response.map((player) => new Player(player)) ?? [],
        status: "success",
      }))
      .catch((error) => {
        console.error(error);
        return {
          status: "error",
          message: (error as Error).message,
        };
      });
  }

  static async getPlayerById(id: string): Promise<ApiResponse<Player>> {
    return PlayerService.getPlayerById({ id })
      .then((player) => ({
        data: new Player(player),
        status: "success",
      }))
      .catch((error) => {
        console.error(error);
        return {
          status: "error",
          message: (error as Error).message,
        };
      });
  }

  static async create(form: Player): Promise<ApiResponse<string>> {
    return PlayerService.createPlayer({
      requestBody: form.toApi,
    })
      .then((response) => ({
        data: response.id ?? "",
        status: "success",
      }))
      .catch((error) => {
        console.error(error);
        return {
          status: "error",
          message: (error as Error).message,
        };
      });
  }
}
