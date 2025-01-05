import { ClubService } from "@services/api";
import type { ApiResponse } from "@core/Errors";
import { Club } from "@services/clubs/entities/Club.entity";

export class ClubResources {
  static async getAllClubs(): Promise<ApiResponse<Club[]>> {
    return ClubService.getAllClubs()
      .then((response) => ({
        data: response.map((club) => new Club(club)) ?? [],
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

  static async getClubById(id: string): Promise<ApiResponse<Club>> {
    return ClubService.getClubById({ id })
      .then((club) => ({
        data: new Club(club),
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

  static async create(form: Club): Promise<ApiResponse<string>> {
    return ClubService.createClub({
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
