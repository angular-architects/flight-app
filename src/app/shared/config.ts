export interface Config {
  baseUrl: string;
  ICAO: boolean;
}

export const initConfig: Config = {
  baseUrl: '',
  ICAO: false,
};
