/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginResponseDTO } from '../models/LoginResponseDTO';
import type { LoginUserDTO } from '../models/LoginUserDTO';
import type { RegisterUserDTO } from '../models/RegisterUserDTO';
import type { RegistrationResponseDTO } from '../models/RegistrationResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Register a new user
     * @returns RegistrationResponseDTO Successful registration
     * @throws ApiError
     */
    public static registerUser({
        requestBody,
    }: {
        requestBody: RegisterUserDTO,
    }): CancelablePromise<RegistrationResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Login a user
     * @returns LoginResponseDTO Successful login
     * @throws ApiError
     */
    public static loginUser({
        requestBody,
    }: {
        requestBody: LoginUserDTO,
    }): CancelablePromise<LoginResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
