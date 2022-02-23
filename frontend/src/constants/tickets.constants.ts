type TicketCatalogItem = Readonly<{
	type: TicketType;
	price: number;
	limit: number;
	minimum: number;
}>;

export const ticketCatalog: TicketCatalogItem[] = [
	{
		type: 'a',
		price: 5000,
		limit: 10,
		minimum: 1
	},
	{
		type: 'b',
		price: 2500,
		limit: 20,
		minimum: 2
	},
	{
		type: 'c',
		price: 1000,
		limit: 30,
		minimum: 2
	},
	{
		type: 'd',
		price: 500,
		limit: 40,
		minimum: 3
	}
];

type BaseTicketTypeMap = Record<TicketType, number>;

export const initialDailyTickets: BaseTicketTypeMap = {
	a: 0,
	b: 0,
	c: 0,
	d: 0
} as const;

export const dailyTicketsLimit: BaseTicketTypeMap = {
	a: 10,
	b: 20,
	c: 30,
	d: 40
} as const;

export const minimumTicketsPurchase: BaseTicketTypeMap = {
	a: 1,
	b: 2,
	c: 2,
	d: 3
} as const;
