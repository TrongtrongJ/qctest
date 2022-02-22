import { computed, reactive } from 'vue';
import { useFetch } from '@hooks/useFetch';
import { useNotyf } from '@hooks/useNotyf';
import { initialDailyTickets, minimumTicketsPurchase } from '@src/constants/tickets.constants';
import { isPurchasable, syncMutualKey } from '@src/utils';

const { isLoading, fetchData } = useFetch();
const notyf = useNotyf();

export { isLoading };

export const dailyTicketsAvailable = reactive<DailyTickets>({ ...initialDailyTickets });

export const ticketsQuantity = reactive({
	...minimumTicketsPurchase
});

export const ticketTypesPurchasability = reactive({
	a: computed(() => isPurchasable(dailyTicketsAvailable['a'], minimumTicketsPurchase['a'])),
	b: computed(() => isPurchasable(dailyTicketsAvailable['b'], minimumTicketsPurchase['b'])),
	c: computed(() => isPurchasable(dailyTicketsAvailable['c'], minimumTicketsPurchase['c'])),
	d: computed(() => isPurchasable(dailyTicketsAvailable['d'], minimumTicketsPurchase['d']))
});

export async function getAsyncDailyTickets() {
	try {
		const response = await fetchData<DailyTickets>({ module: 'daily-tickets', parameter: 'today' });
		response && syncMutualKey(dailyTicketsAvailable, response);
	} catch (err) {
		console.error(err);
	}
}

export async function buyTicket(ticketType: TicketType) {
	try {
		const qty = ticketsQuantity[ticketType];
		const response = await fetchData<DailyTickets>({
			module: 'purchase',
			method: 'POST',
			body: {
				ticketType,
				qty
			}
		});
		response && syncMutualKey(dailyTicketsAvailable, response);
		syncMutualKey(ticketsQuantity, minimumTicketsPurchase);
		notyf.success(`ซื้อตั๋ว ${ticketType.toUpperCase()} ${qty} ใบ สำเร็จ <3`);
	} catch (err) {
		console.error(err);
	}
}
