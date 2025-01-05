/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOfficialDTO } from '../models/CreateOfficialDTO';
import type { CreationResponseDTO } from '../models/CreationResponseDTO';
import type { OfficialDTO } from '../models/OfficialDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OfficialService {
    /**
     * Get all officials
     * @returns OfficialDTO List of officials
     * @throws ApiError
     */
    public static getAllOfficials(): CancelablePromise<Array<OfficialDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/officiels',
        });
    }
    /**
     * Create a new official
     * @returns CreationResponseDTO Official created successfully
     * @throws ApiError
     */
    public static createOfficial({
        requestBody,
    }: {
        requestBody: CreateOfficialDTO,
    }): CancelablePromise<CreationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/officiels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get official by ID
     * @returns OfficialDTO Official details
     * @throws ApiError
     */
    public static getOfficialById({
        id,
    }: {
        id: number,
    }): CancelablePromise<OfficialDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/officiels/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Official not found`,
            },
        });
    }
}
