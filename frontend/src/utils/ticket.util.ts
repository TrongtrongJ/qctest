import { dailyTicketsLimit } from '@constants/tickets.constants';
export function getSoldTicketsAmount(ticketType: TicketType, ticketLeft: number): number {
	return dailyTicketsLimit[ticketType] - ticketLeft;
}

export function isPurchasable(ticketLeft: number, ticketMinPurchase: number): boolean {
	return ticketLeft >= ticketMinPurchase;
}
