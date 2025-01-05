import type { DataGridRow } from "@core/type";
import type { Trainer } from "@services/trainer/entities/Trainer.entity";

type TrainerViewType = {
  fullName?: string;
  club?: string;
  phoneNumber?: string;
  email?: string;
  league?: string;
  id?: string;
};

export class TrainerView implements DataGridRow<TrainerViewType> {
  private props: TrainerViewType = {};

  constructor(data: Trainer) {
    this.props.fullName = `${data.lastName} ${data.firstName}`;
    this.props.club = data.club;
    this.props.id = data.id;
    this.props.email = data.email;
    this.props.phoneNumber = data.phoneNumber;
  }

  getId(): string {
    return this.props.id ?? "";
  }

  getTextFor(key: keyof TrainerViewType): string {
    return this.props[key] ?? "";
  }
}
