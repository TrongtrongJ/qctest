import { ref, reactive, computed, watch } from 'vue';
import { useFetch } from '@hooks/useFetch';
import { useNotyf } from '@hooks/useNotyf';
import { initialDailyTickets } from '@src/constants/tickets.constants';
import { syncMutualKey } from '@src/utils';
import { getDateIndexStringFromDate } from '@src/utils/date.util';

const { isLoading, fetchData, error } = useFetch();
const notyf = useNotyf();

export { isLoading };

export const dailyTicketsOfDate = reactive<DailyTickets>({ ...initialDailyTickets });

export const selectedDate = ref<Date>(new Date());
export function setSelectedDate(v: Date) {
	selectedDate.value = v;
}
const dateString = computed(() => getDateIndexStringFromDate(selectedDate.value));

export const selectedTicketType = ref<TicketType>('a');

export async function getAsyncDailyTicketsByDate(date: Date = new Date()) {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	try {
		const response = await fetchData<DailyTickets>({
			module: 'daily-tickets',
			parameter: 'date',
			queryMap: {
				day,
				month,
				year
			}
		});
		response && syncMutualKey(dailyTicketsOfDate, response);
	} catch (err) {
		console.error(err);
	}
}

watch(dateString, async () => {
	await getAsyncDailyTicketsByDate(selectedDate.value);
});
