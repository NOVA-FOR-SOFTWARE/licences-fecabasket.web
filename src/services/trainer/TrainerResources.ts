import { TrainerService } from "@/services/api";
import type { ApiResponse } from "@core/Errors";
import { Trainer } from "@services/trainer/entities/Trainer.entity";

export class TrainerResources {
  static async getAllTrainers(): Promise<ApiResponse<Trainer[]>> {
    return TrainerService.getAllTrainers()
      .then((response) => ({
        data: response.map((trainer) => new Trainer(trainer)) ?? [],
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

  static async getTrainerById(id: string): Promise<ApiResponse<Trainer>> {
    return TrainerService.fetchTrainerById({ id })
      .then((trainer) => ({
        data: new Trainer(trainer),
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

  static async create(form: Trainer): Promise<ApiResponse<string>> {
    return TrainerService.addTrainer({
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
