import { PlayersService } from "@/services/api/index";
import type { ApiResponse } from "@core/Errors";
import { Player } from "@services/user/entities/Player.entity";

export class PlayerResources {
  static async getAllPlayers(): Promise<ApiResponse<Player[]>> {
    return PlayersService.fetchPlayers()
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
    return PlayersService.fetchPlayerById({ id })
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
    return PlayersService.addPlayer({
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
