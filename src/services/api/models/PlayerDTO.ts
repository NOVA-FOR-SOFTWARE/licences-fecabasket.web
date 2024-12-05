/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlayerHandDTO } from './PlayerHandDTO';
import type { SocialMediaItem } from './SocialMediaItem';
export type PlayerDTO = {
    /**
     * identifier
     */
    id: string;
    /**
     * player's name
     */
    nom: string;
    /**
     * player's name
     */
    prenom: string;
    /**
     * player's name
     */
    sexe: string;
    /**
     * player's name
     */
    date?: string;
    /**
     * player's name
     */
    lieu_naissance: string;
    /**
     * player's name
     */
    residence?: string;
    /**
     * player's name
     */
    poids?: number;
    /**
     * player's name
     */
    taille?: number;
    /**
     * player's name
     */
    envergure?: number;
    /**
     * player's name
     */
    telephone?: string;
    /**
     * player's name
     */
    dossard?: number;
    /**
     * player's name
     */
    email?: string;
    /**
     * player's name
     */
    annee_inscription?: number;
    /**
     * player's name
     */
    classe_frequentee?: string;
    /**
     * player's name
     */
    date_naissance: string;
    main_forte?: PlayerHandDTO;
    /**
     * player's social medias
     */
    reseaux_sociaux?: Array<SocialMediaItem>;
    /**
     * player's name
     */
    nom_etablissement?: string;
    /**
     * player's name
     */
    nom_parent_1?: string;
    /**
     * player's name
     */
    telephone_parent_1?: string;
    /**
     * player's name
     */
    nom_parent_2?: string;
    /**
     * player's name
     */
    telephone_parent_2?: string;
    /**
     * player's post
     */
    post?: string;
    /**
     * player's league
     */
    ligue?: string;
    /**
     * player's league
     */
    statut?: string;
    /**
     * player's club's name
     */
    club?: string;
};

