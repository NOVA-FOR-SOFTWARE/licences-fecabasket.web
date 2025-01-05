/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrainerDTO } from '../models/TrainerDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrainerService {
    /**
     * Get all coaches
     * @returns TrainerDTO List of coaches
     * @throws ApiError
     */
    public static getAllTrainers(): CancelablePromise<Array<TrainerDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/entraineurs',
        });
    }
}
