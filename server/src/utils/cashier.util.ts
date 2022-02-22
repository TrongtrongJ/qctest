export function scaleUpToSafeInt(v: number): number {
	return Math.floor(v * 100);
}

export function scaleDownToBaht(v: number): number {
	return Number(v / 100);
}
