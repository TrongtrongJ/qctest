/**
 * Checking value's existence; 
 * help differentiate False from null/undefined
 * @param { any } value any Primitive or Reference value
 * @returns { boolean } 
 */
export function isNotNullish(value: any): boolean {
	return value != null;
}
