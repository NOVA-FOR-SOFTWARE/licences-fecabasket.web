/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClubDTO } from '../models/ClubDTO';
import type { CreateClubDTO } from '../models/CreateClubDTO';
import type { CreationResponseDTO } from '../models/CreationResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClubService {
    /**
     * Get all players
     * @returns ClubDTO List of players
     * @throws ApiError
     */
    public static getAllClubs(): CancelablePromise<Array<ClubDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/clubs',
        });
    }
    /**
     * Create a new clubs
     * @returns CreationResponseDTO Club created successfully
     * @throws ApiError
     */
    public static createClub({
        requestBody,
    }: {
        requestBody: CreateClubDTO,
    }): CancelablePromise<CreationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/clubs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get clubs by ID
     * @returns ClubDTO Club details
     * @throws ApiError
     */
    public static getClubById({
        id,
    }: {
        id: number,
    }): CancelablePromise<ClubDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/clubs/{id}',
            path: {
                'id': id,
            },
        });
    }
}
