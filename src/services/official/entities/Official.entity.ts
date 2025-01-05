import { Entity } from "@core/Entity";
import type { OfficialDTO } from "@services/api";

export type OfficialProps = OfficialDTO;

export class Official extends Entity<OfficialProps> {
  constructor(props: OfficialProps, id?: string) {
    super(props, id);
  }

  get fullName(): string {
    return `${this.props.noms} ${this.props.prenoms}` ?? "";
  }

  get birthDate(): string {
    return this.props.date_naissance ?? "";
  }

  set birthDate(value: string) {
    this.props.date_naissance = value ?? "";
  }

  get birthPlace(): string {
    return this.props.lieu_naissance ?? "";
  }

  set birthPlace(value: string) {
    this.props.lieu_naissance = value ?? "";
  }

  get residence(): string {
    return this.props.lieu_residence ?? "";
  }

  set residence(value: string) {
    this.props.lieu_residence = value ?? "";
  }

  get phoneNumber(): string {
    return this.props.telephone ?? "";
  }

  set phoneNumber(value: string) {
    this.props.telephone = value ?? "";
  }

  get email(): string {
    return this.props.email ?? "";
  }

  set email(value: string) {
    this.props.email = value ?? "";
  }

  get profilePicture(): string {
    return this.props.photo_profil ?? "";
  }

  set profilePicture(value: string) {
    this.props.photo_profil = value ?? "";
  }

  get grade(): string {
    return this.props.grade ?? "";
  }

  set grade(value: string) {
    this.props.grade = value ?? "";
  }

  get toApi(): OfficialProps {
    return {
      id: this._id ?? "",
      noms: this.props.noms,
      prenoms: this.props.prenoms,
      date_naissance: this.birthDate,
      lieu_naissance: this.birthPlace,
      lieu_residence: this.residence,
      telephone: this.phoneNumber,
      email: this.email,
      photo_profil: this.profilePicture,
      grade: this.grade,
    };
  }
}

export const nullOfficialEntity = (): Official => {
  const official = new Official({} as OfficialProps);
  official.isNull = true;
  return official;
};
