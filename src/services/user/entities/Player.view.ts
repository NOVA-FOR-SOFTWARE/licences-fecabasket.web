import type { DataGridRow } from "@core/type";
import type { Player } from "@services/user/entities/Player.entity";

type PlayerViewType = {
  fullName?: string;
  club?: string;
  post?: string;
  status?: string;
  league?: string;
  id?: string;
};

export class PlayerView implements DataGridRow<PlayerViewType> {
  private props: PlayerViewType = {};

  constructor(data: Player) {
    this.props.fullName = `${data.lastName} ${data.firstname}`;
    this.props.club = data.club;
    this.props.league = data.league;
    this.props.id = data.id;
    this.props.status = data.status;
    this.props.post = data.post;
  }

  getId(): string {
    return this.props.id ?? "";
  }

  getTextFor(key: keyof PlayerViewType): string {
    return this.props[key] ?? "";
  }
}

export enum PlayerStatusTheme {
  BROUILLON = "blue",
  ATTENTE = "orange",
  ACCEPTE = "green",
  REFUSE = "red",
}

export enum PlayerStatusLabel {
  BROUILLON = "Brouillon",
  ATTENTE = "En attente",
  ACCEPTE = "Accepte",
  REFUSE = "Refuse",
}
