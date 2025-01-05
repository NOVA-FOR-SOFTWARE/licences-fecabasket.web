/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerDTO } from '../models/CreatePlayerDTO';
import type { CreationResponseDTO } from '../models/CreationResponseDTO';
import type { PlayerDTO } from '../models/PlayerDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlayerService {
    /**
     * Get all clubs
     * @returns PlayerDTO List of clubs
     * @throws ApiError
     */
    public static getAllPlayers(): CancelablePromise<Array<PlayerDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/joueurs',
        });
    }
    /**
     * Create a new official
     * @returns CreationResponseDTO Player created successfully
     * @throws ApiError
     */
    public static createPlayer({
        requestBody,
    }: {
        requestBody: CreatePlayerDTO,
    }): CancelablePromise<CreationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/joueurs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get official by ID
     * @returns PlayerDTO Player details
     * @throws ApiError
     */
    public static getPlayerById({
        id,
    }: {
        id: number,
    }): CancelablePromise<PlayerDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/joueurs/{id}',
            path: {
                'id': id,
            },
        });
    }
}
