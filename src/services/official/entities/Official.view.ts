import type { DataGridRow } from "@core/type";
import type { Official } from "@services/official/entities/Official.entity";

type OfficialViewType = {
  fullName?: string;
  birthDate?: string;
  birthPlace?: string;
  residence?: string;
  phoneNumber?: string;
  email?: string;
  profilePicture?: string;
  grade?: string;
  id?: string;
};

export class OfficialView implements DataGridRow<OfficialViewType> {
  private props: OfficialViewType = {};

  constructor(data: Official) {
    this.props.fullName = data.fullName;
    this.props.birthDate = data.birthDate;
    this.props.birthPlace = data.birthPlace;
    this.props.residence = data.residence;
    this.props.phoneNumber = data.phoneNumber;
    this.props.email = data.email;
    this.props.profilePicture = data.profilePicture;
    this.props.grade = data.grade;
    this.props.id = data.id;
  }

  getId(): string {
    return this.props.id ?? "";
  }

  getTextFor(key: keyof OfficialViewType): string {
    return this.props[key] ?? "";
  }
}
