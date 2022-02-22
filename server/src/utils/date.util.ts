function bootstrapDigitString(digit: number): string {
	return `${'0'.repeat(Number(digit < 10))}${digit}`;
}

export function getDateIndexStringFromDate(date: Date): string {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${bootstrapDigitString(day)}${bootstrapDigitString(month)}${year}`;
}

export function ensuresDate(value: string | number | Date): Date {
	!(value instanceof Date) && (value = new Date(value));
	return value;
}

export function DMYToDateString(day: number, month: number, year: number): string {
	return `${month + 1}/${day}/${year}`;
}

export function isValidDateString(dateString: string): boolean {
	return !isNaN(Date.parse(dateString));
}

export function isValidDMY(day: number, month: number, year: number): boolean {
	return isValidDateString(DMYToDateString(day, month, year));
}

export function dateFromDMY(day: number, month: number, year: number): Date {
	return new Date(DMYToDateString(day, month, year));
}
