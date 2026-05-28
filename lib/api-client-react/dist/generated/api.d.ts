import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { HealthStatus, ListMoviesParams, Movie, MovieInput } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListMoviesUrl: (params?: ListMoviesParams) => string;
/**
 * @summary List all movies
 */
export declare const listMovies: (params?: ListMoviesParams, options?: RequestInit) => Promise<Movie[]>;
export declare const getListMoviesQueryKey: (params?: ListMoviesParams) => readonly ["/api/movies", ...ListMoviesParams[]];
export declare const getListMoviesQueryOptions: <TData = Awaited<ReturnType<typeof listMovies>>, TError = ErrorType<unknown>>(params?: ListMoviesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMovies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMovies>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMoviesQueryResult = NonNullable<Awaited<ReturnType<typeof listMovies>>>;
export type ListMoviesQueryError = ErrorType<unknown>;
/**
 * @summary List all movies
 */
export declare function useListMovies<TData = Awaited<ReturnType<typeof listMovies>>, TError = ErrorType<unknown>>(params?: ListMoviesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMovies>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateMovieUrl: () => string;
/**
 * @summary Add a new movie
 */
export declare const createMovie: (movieInput: MovieInput, options?: RequestInit) => Promise<Movie>;
export declare const getCreateMovieMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMovie>>, TError, {
        data: BodyType<MovieInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createMovie>>, TError, {
    data: BodyType<MovieInput>;
}, TContext>;
export type CreateMovieMutationResult = NonNullable<Awaited<ReturnType<typeof createMovie>>>;
export type CreateMovieMutationBody = BodyType<MovieInput>;
export type CreateMovieMutationError = ErrorType<unknown>;
/**
* @summary Add a new movie
*/
export declare const useCreateMovie: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMovie>>, TError, {
        data: BodyType<MovieInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createMovie>>, TError, {
    data: BodyType<MovieInput>;
}, TContext>;
export declare const getGetMovieUrl: (id: number) => string;
/**
 * @summary Get a single movie
 */
export declare const getMovie: (id: number, options?: RequestInit) => Promise<Movie>;
export declare const getGetMovieQueryKey: (id: number) => readonly [`/api/movies/${number}`];
export declare const getGetMovieQueryOptions: <TData = Awaited<ReturnType<typeof getMovie>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMovie>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMovie>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMovieQueryResult = NonNullable<Awaited<ReturnType<typeof getMovie>>>;
export type GetMovieQueryError = ErrorType<void>;
/**
 * @summary Get a single movie
 */
export declare function useGetMovie<TData = Awaited<ReturnType<typeof getMovie>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMovie>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateMovieUrl: (id: number) => string;
/**
 * @summary Update an existing movie
 */
export declare const updateMovie: (id: number, movieInput: MovieInput, options?: RequestInit) => Promise<Movie>;
export declare const getUpdateMovieMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMovie>>, TError, {
        id: number;
        data: BodyType<MovieInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateMovie>>, TError, {
    id: number;
    data: BodyType<MovieInput>;
}, TContext>;
export type UpdateMovieMutationResult = NonNullable<Awaited<ReturnType<typeof updateMovie>>>;
export type UpdateMovieMutationBody = BodyType<MovieInput>;
export type UpdateMovieMutationError = ErrorType<void>;
/**
* @summary Update an existing movie
*/
export declare const useUpdateMovie: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMovie>>, TError, {
        id: number;
        data: BodyType<MovieInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateMovie>>, TError, {
    id: number;
    data: BodyType<MovieInput>;
}, TContext>;
export declare const getDeleteMovieUrl: (id: number) => string;
/**
 * @summary Delete a movie
 */
export declare const deleteMovie: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteMovieMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMovie>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMovie>>, TError, {
    id: number;
}, TContext>;
export type DeleteMovieMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMovie>>>;
export type DeleteMovieMutationError = ErrorType<void>;
/**
* @summary Delete a movie
*/
export declare const useDeleteMovie: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMovie>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMovie>>, TError, {
    id: number;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map