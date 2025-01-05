import { Entity } from "@core/Entity";
import type { TrainerDTO } from "@services/api";

export type TrainerProps = TrainerDTO;

export class Trainer extends Entity<TrainerProps> {
  constructor(props: TrainerProps, id?: string) {
    super(props, id);
  }

  get firstName(): string {
    return this.props.nom ?? "";
  }

  set firstName(value: string) {
    this.props.nom = value ?? "";
  }

  get photo(): string {
    return this.props.photo ?? "";
  }

  set photo(value: string) {
    this.props.photo = value ?? "";
  }

  get lastName(): string {
    return this.props.prenom ?? "";
  }

  set lastName(value: string) {
    this.props.prenom = value ?? "";
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

  get club(): string {
    return this.props.club ?? "";
  }

  set club(value: string) {
    this.props.club = value ?? "";
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

  get notification(): boolean {
    return this.props.notification ?? false;
  }

  set notification(value: boolean) {
    this.props.notification = value ?? false;
  }

  get toApi(): TrainerProps {
    return {
      id: this._id ?? "",
      nom: this.firstName,
      photo: this.photo,
      prenom: this.lastName,
      date_naissance: this.birthDate,
      lieu_naissance: this.birthPlace,
      lieu_residence: this.residence,
      telephone: this.phoneNumber,
      email: this.email,
      club: this.club,
      dossier: this.folder,
      palmares: this.achievements,
      notification: this.notification,
    };
  }
}

export const nullTrainerEntity = (): Trainer => {
  const trainer = new Trainer({} as TrainerProps);
  trainer.isNull = true;
  return trainer;
};
