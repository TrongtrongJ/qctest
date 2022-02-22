export const monthsArray = [
	'มกราคม',
	'กุมภาพันธ์',
	'มีนาคม',
	'เมษายน',
	'พฤษภาคม',
	'มิถุนายน',
	'สิงหาคม',
	'กันยายน',
	'ตุลาคม',
	'พฤษจิกายน',
	'ธันวาคม'
];

export function bootstrapDigitString(digit: number): string {
	return `${'0'.repeat(Number(digit < 10))}${digit}`;
}

export function getDateIndexStringFromDate(date: Date): string {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${bootstrapDigitString(day)}${bootstrapDigitString(month)}${year}`;
}

export function getDateString(date: Date): string {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	return `${day} ${monthsArray[month]} ${year}`;
}
