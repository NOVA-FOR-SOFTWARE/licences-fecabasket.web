import { OfficialService } from "@services/api";
import type { ApiResponse } from "@core/Errors";
import { Official } from "@services/official/entities/Official.entity";

export class OfficialResources {
  static async getAllOfficials(): Promise<ApiResponse<Official[]>> {
    return OfficialService.getAllOfficials()
      .then((response) => ({
        data: response.map((official) => new Official(official)) ?? [],
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

  static async getOfficialById(id: string): Promise<ApiResponse<Official>> {
    return OfficialService.getOfficialById({ id })
      .then((official) => ({
        data: new Official(official),
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

  static async create(form: Official): Promise<ApiResponse<string>> {
    return OfficialService.createOfficial({
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
