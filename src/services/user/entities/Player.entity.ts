import { Entity } from "@core/Entity";
import type {
  PlayerDTO,
  MainHandDTO,
  PlayerSexDTO,
  SocialMediaItem,
} from "@services/api";

type MainHand = MainHandDTO;
type PlayerSex = PlayerSexDTO;

export enum MainHandValue {
  LEFT = "GAUCHE",
  RIGHT = "DROITE",
}

type ParentProps = {
  name: string;
  phoneNumber: string;
};

class Parent {
  constructor(private readonly props: ParentProps) {}

  get name(): string {
    return this.props.name ?? "";
  }

  get phoneNumber(): string {
    return this.props.phoneNumber ?? "";
  }
}

export type PlayerProps = PlayerDTO;

export class Player extends Entity<PlayerProps> {
  constructor(props: PlayerProps, id?: string) {
    super(props, id);
  }

  get lastname(): string {
    return this.props.nom ?? "";
  }

  set lastname(value: string) {
    this.props.nom = value ?? "";
  }

  get picture(): string {
    return this.props.photo ?? "";
  }

  set picture(value: string) {
    this.props.photo = value ?? "";
  }

  get firstname(): string {
    return this.props.prenom ?? "";
  }

  set firstname(value: string) {
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
    return this.props.residence ?? "";
  }

  set residence(value: string) {
    this.props.residence = value ?? "";
  }

  get sex(): string {
    return this.props.sexe;
  }

  set sex(value: string) {
    this.props.sexe = value ?? "";
  }

  get weight(): number {
    return this.props.poids ?? 0;
  }

  set weight(value: number) {
    this.props.poids = value ?? 0;
  }

  get height(): number {
    return this.props.taille ?? 0;
  }

  set height(value: number) {
    this.props.taille = value ?? 0;
  }

  get width(): number {
    return this.props.envergure ?? 0;
  }

  set width(value: number) {
    this.props.envergure = value ?? "";
  }

  get phoneNumber(): string {
    return this.props.telephone ?? "";
  }

  set phoneNumber(value: string) {
    this.props.telephone = value ?? "";
  }

  get bibNumber(): number {
    return this.props.dossard ?? 0;
  }

  set bidNumber(value: number) {
    this.props.dossard = value ?? 0;
  }

  get email(): string {
    return this.props.email ?? "";
  }

  set email(value: string) {
    this.props.email = value ?? "";
  }

  get mainHand(): MainHandValue {
    return MainHandValue[this.props.main_forte ?? "GAUCHE"];
  }

  set mainHand(value: string) {
    this.props.main_forte = value ?? "";
  }

  get registerYear(): number {
    return this.props.annee_inscription ?? 0;
  }

  set registerYear(value: string) {
    this.props.date_naissance = value ?? "";
  }

  get socialMedias(): SocialMediaItem[] {
    return this.props.reseaux_sociaux ?? [];
  }

  get attendedClass(): string {
    return this.props.classe_frequentee ?? "";
  }

  get school(): string {
    return this.props.nom_etablissement ?? "";
  }

  get mother(): Parent {
    return new Parent({
      name: this.props.nom_parent_2 ?? "",
      phoneNumber: this.props.telephone_parent_2 ?? "",
    });
  }

  get father(): Parent {
    return new Parent({
      name: this.props.nom_parent_2 ?? "",
      phoneNumber: this.props.telephone_parent_2 ?? "",
    });
  }

  get league(): string {
    return this.props.ligue ?? "";
  }

  get post(): string {
    return this.props.post ?? "";
  }

  get club(): string {
    return this.props.club ?? "";
  }

  get status(): string {
    return this.props.statut ?? "";
  }

  get toApi(): PlayerProps {
    return {
      id: this._id ?? "",
      nom: this.lastname,
      prenom: this.firstname,
      sexe: this.sex,
      date: "", // TODO: check the utility of this,
      lieu_naissance: this.birthPlace,
      residence: this.residence,
      poids: this.weight,
      taille: this.height,
      envergure: this.width,
      telephone: this.phoneNumber,
      dossard: this.bibNumber,
      email: this.email,
      annee_inscription: this.registerYear,
      classe_frequentee: this.attendedClass,
      date_naissance: this.birthDate,
      main_forte: this.mainHand,
      reseaux_sociaux: [], // < SocialMediaItem > nom_etablissement ? : string
      nom_parent_1: this.father.name,
      telephone_parent_1: this.father.phoneNumber,
      nom_parent_2: this.mother.name,
      telephone_parent_2: this.mother.phoneNumber,
      club: this.club,
      ligue: this.league,
      post: this.post,
      statut: this.status,
    };
  }
}

//Use as a default value adn also to make there is data or not using `isNull` property
export const nullPlayerEntity = (): Player => {
  const player = new Player({} as PlayerProps);
  player.isNull = true;
  return player;
};
