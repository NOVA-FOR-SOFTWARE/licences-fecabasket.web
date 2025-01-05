import { Entity } from "@core/Entity";
import type { ClubDTO } from "@services/api";

export type ClubProps = ClubDTO;

export class Club extends Entity<ClubProps> {
  constructor(props: ClubProps, id?: string) {
    super(props, id);
  }

  get id(): string {
    return this.props.id ?? "";
  }

  get name(): string {
    return this.props.nom ?? "";
  }

  set name(value: string) {
    this.props.nom = value ?? "";
  }

  get logo(): string {
    return this.props.logo ?? "";
  }

  set logo(value: string) {
    this.props.logo = value ?? "";
  }

  get leaderName(): string {
    return this.props.nom_dirigeant ?? "";
  }

  set leaderName(value: string) {
    this.props.nom_dirigeant = value ?? "";
  }

  get creationDate(): string {
    return this.props.date_creation ?? "";
  }

  set creationDate(value: string) {
    this.props.date_creation = value ?? "";
  }

  get email(): string {
    return this.props.email ?? "";
  }

  set email(value: string) {
    this.props.email = value ?? "";
  }

  get locality(): string {
    return this.props.localite ?? "";
  }

  set locality(value: string) {
    this.props.localite = value ?? "";
  }

  get phoneNumber(): string {
    return this.props.numero_telephone ?? "";
  }

  set phoneNumber(value: string) {
    this.props.numero_telephone = value ?? "";
  }

  get coach(): string {
    return this.props.entraineur ?? "";
  }

  set coach(value: string) {
    this.props.entraineur = value ?? "";
  }

  get folder(): string {
    return this.props.dossier ?? "";
  }

  set folder(value: string) {
    this.props.dossier = value ?? "";
  }

  get achievements(): string {
    return this.props.palmares ?? "";
  }

  set achievements(value: string) {
    this.props.palmares = value ?? "";
  }

  get jerseyColors(): string[] {
    return this.props.couleurs_maillot ?? [];
  }

  set jerseyColors(value: string[]) {
    this.props.couleurs_maillot = value ?? [];
  }

  get toApi(): ClubProps {
    return {
      id: this._id ?? "",
      nom: this.name,
      logo: this.logo,
      nom_dirigeant: this.leaderName,
      date_creation: this.creationDate,
      email: this.email,
      localite: this.locality,
      numero_telephone: this.phoneNumber,
      entraineur: this.coach,
      dossier: this.folder,
      palmares: this.achievements,
      couleurs_maillot: this.jerseyColors,
    };
  }
}

export const nullClubEntity = (): Club => {
  const club = new Club({} as ClubProps);
  club.isNull = true;
  return club;
};
