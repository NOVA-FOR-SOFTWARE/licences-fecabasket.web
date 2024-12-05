/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreationResponseDTO } from '../models/CreationResponseDTO';
import type { PlayerDTO } from '../models/PlayerDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlayersService {
    /**
     * Fetch all the players
     * Fetch all the players
     * @returns PlayerDTO successful operation
     * @throws ApiError
     */
    public static fetchPlayers(): CancelablePromise<Array<PlayerDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/joueurs',
        });
    }
    /**
     * create new player
     * create new player
     * @returns CreationResponseDTO successful operation
     * @throws ApiError
     */
    public static addPlayer({
        requestBody,
    }: {
        /**
         * successful operation
         */
        requestBody?: PlayerDTO,
    }): CancelablePromise<CreationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/joueurs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Fetch player by his id
     * Fetch player by his id
     * @returns PlayerDTO successful operation
     * @throws ApiError
     */
    public static fetchPlayerById(): CancelablePromise<PlayerDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/joueurs/{id}',
        });
    }
    /**
     * update player's informations
     * update player's informations
     * @returns CreationResponseDTO successful operation
     * @throws ApiError
     */
    public static updatePlayer({
        requestBody,
    }: {
        /**
         * successful operation
         */
        requestBody?: PlayerDTO,
    }): CancelablePromise<CreationResponseDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/joueurs/{id}',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * delete a player in the system
     * delete a player in the system
     * @returns CreationResponseDTO successful operation
     * @throws ApiError
     */
    public static deletePlayer(): CancelablePromise<CreationResponseDTO> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/joueurs/{id}',
        });
    }
}
