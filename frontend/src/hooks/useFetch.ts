import { ref, toRefs, reactive, onMounted } from 'vue';
import { resolveEndpoint, TApiModule, TApiVer } from '@utils/api.util';
import { useNotyf } from './useNotyf';

interface IFetchReqParams {
	module: TApiModule;
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body?: BaseObject;
	contentType?: 'application/json';
	parameter?: string | number;
	token?: string | null;
	apiVer?: TApiVer;
	queryMap?: Record<string, string | number | boolean>;
}

const notyf = useNotyf();

export function useFetch() {
	const activeHttpRequests = ref<AbortController[]>([]);

	const state = reactive({
		error: '',
		isLoading: false
	});

	const fetchData = async <T = any>({
		module,
		method = 'GET',
		body,
		parameter,
		token,
		apiVer,
		contentType = 'application/json',
		queryMap
	}: IFetchReqParams): Promise<T | null> => {
		const url = resolveEndpoint({ module, parameter, apiVer, queryMap });
		const currentAbortCtrl = new AbortController();

		const options: RequestInit = {
			headers: {
				'Content-Type': contentType,
				...token && { Authorization: `bearer ${token}` }
			},
			method,
			signal: currentAbortCtrl.signal,
			...body && { body: JSON.stringify(body) }
		};
		clearError();
		state.isLoading = true;
		activeHttpRequests.value.push(currentAbortCtrl);
		try {
			const res = await fetch(url, options);
			const resData = await res.json();
			activeHttpRequests.value = activeHttpRequests.value.filter((el) => el !== currentAbortCtrl);
			return resData;
		} catch (error) {
			notyf.error(String(error));
			state.error = error as string;
			return null;
		} finally {
			state.isLoading = false;
		}
	};

	onMounted(() => {
		activeHttpRequests.value.forEach((el) => el.abort());
	});

	function clearError() {
		if (state.error) state.error = '';
	}

	return { ...toRefs(state), fetchData, clearError };
}
