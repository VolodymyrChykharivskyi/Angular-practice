import { Environment } from './environment.interface';
import { environmentValue } from './environment-value';

export const environment: Environment = {
	production: true,
	apiKey: environmentValue.apiKey,
	fbDBUrl: environmentValue.fbDBUrl,
};
