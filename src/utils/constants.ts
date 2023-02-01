export type ApiConfig = {
  baseURL: string;
  headers: Record<string, string>;
}

export const API_CONFIG: ApiConfig = {
  baseURL: ' https://api.github.com',
  headers: { 'Content-type': 'Application/JSON' },
};

export const perPage = 4;
