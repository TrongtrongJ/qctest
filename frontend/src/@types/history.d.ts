declare type ApiHistoryItem = {
	ticketType: TicketType;
	qty: number;
	purchaseDate: string;
};

declare type ProcessedHistoryItem = ApiHistoryItem & {
	purchaseTimeString: string;
};
