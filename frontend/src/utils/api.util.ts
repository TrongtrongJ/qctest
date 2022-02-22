import { isObjectEmpty } from './object.util';
const backend_base_url = `${import.meta.env.VITE_APP_BACKEND_URL}`;

export type TApiModule = 'purchase' | 'daily-tickets';

export type TApiVer = 'V1' | 'V2';

interface IResolveBaseApiProps {
	apiVer?: TApiVer;
	module: TApiModule;
	parameter?: string | number;
	queryMap?: Record<string, string | number | boolean>;
}

function getQueryString(queryMap: BaseObject): string {
	let queryString = '';
	if (!isObjectEmpty(queryMap)) {
		const queryKeys = Object.keys(queryMap);
		const queryValues = Object.values(queryMap);
		queryString += '?';
		for (let i = 0; i < queryKeys.length; i++) {
			queryString += `${queryKeys[i]}=${queryValues[i]}`;
			i !== queryKeys.length - 1 && (queryString += '&');
		}
	}
	return queryString;
}

export const resolveEndpoint = ({ apiVer = 'V1', module, parameter, queryMap }: IResolveBaseApiProps): string => {
	let resolvedEndpoint = backend_base_url;
	resolvedEndpoint += `/${module}`;
	parameter && (resolvedEndpoint += `/${parameter}`);
	queryMap && (resolvedEndpoint += getQueryString(queryMap));
	return resolvedEndpoint;
};
