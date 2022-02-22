import { computed, ref } from 'vue';
import { useFetch } from '@hooks/useFetch';
import { useNotyf } from '@hooks/useNotyf';
import { processHistoryItem } from '@src/utils/history.util';

const { isLoading, fetchData, error } = useFetch();
const notyf = useNotyf();

export { isLoading };

const historyList = ref<ApiHistoryItem[]>([]);

export const processedHistoryList = computed(() => historyList.value.map((hist) => processHistoryItem(hist)));

export async function getAsyncHistoryData() {
	try {
		const response = await fetchData<ApiHistoryItem[]>({ module: 'purchase' });
		response && (historyList.value = response);
	} catch (err) {
		console.error(err);
	}
}
