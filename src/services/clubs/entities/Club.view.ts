import type { DataGridRow } from "@core/type";
import type { Club } from "@services/clubs/entities/Club.entity";

type ClubViewType = {
  name?: string;
  logo?: string;
  leaderName?: string;
  creationDate?: string;
  email?: string;
  locality?: string;
  phoneNumber?: string;
  coach?: string;
  folder?: string;
  achievements?: string;
  jerseyColors?: string[];
  id?: string;
};

export class ClubView implements DataGridRow<ClubViewType> {
  private props: ClubViewType = {};

  constructor(data: Club) {
    this.props.name = data.name;
    this.props.logo = data.logo;
    this.props.leaderName = data.leaderName;
    this.props.creationDate = data.creationDate;
    this.props.email = data.email;
    this.props.locality = data.locality;
    this.props.phoneNumber = data.phoneNumber;
    this.props.coach = data.coach;
    this.props.folder = data.folder;
    this.props.achievements = data.achievements;
    this.props.jerseyColors = data.jerseyColors;
    this.props.id = data.id;
  }

  getId(): string {
    return this.props.id ?? "";
  }

  getTextFor(key: keyof ClubViewType): string {
    return this.props[key] ?? "";
  }
}
