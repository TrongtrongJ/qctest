import { monthsArray, bootstrapDigitString } from './date.util';

export function processHistoryItem(historyItem: ApiHistoryItem): ProcessedHistoryItem {
	const purchaseDateObj = new Date(historyItem.purchaseDate);
	const day = purchaseDateObj.getDate();
	const month = purchaseDateObj.getMonth();
	const hours = purchaseDateObj.getHours();
	const minutes = purchaseDateObj.getMinutes();
	return {
		...historyItem,
		purchaseTimeString: `${day} ${monthsArray[month]} ${hours}:${bootstrapDigitString(minutes)}`
	};
}
