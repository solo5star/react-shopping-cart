export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ExtractHttpParams<
  THttpPath extends string,
  TParams extends unknown[] = [],
> = THttpPath extends `/${infer Remain}`
  ? ExtractHttpParams<Remain, TParams>
  : THttpPath extends `:${infer Param}/${infer Remain}`
  ? ExtractHttpParams<Remain, [...TParams, unknown]>
  : THttpPath extends `${string}/${infer Remain}`
  ? ExtractHttpParams<Remain, TParams>
  : THttpPath extends `:${infer Param}`
  ? [...TParams, unknown]
  : TParams;
