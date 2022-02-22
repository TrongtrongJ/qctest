import { isNotNullish } from './primitive.util';

export function isObjectEmpty(obj: BaseObject): boolean {
	return !Object.keys(obj).length;
}

export function getExactCopy<ObjType extends object>(obj: ObjType): ObjType {
	return JSON.parse(JSON.stringify(obj));
}

/**
 * Sync values with mutual keys
 * @param { BaseObject } objectTo object we'd like to assign values to
 * @param { BaseObject } objectFrom object we'd like to get key values from
 */
export function syncMutualKey(objectTo: BaseObject, objectFrom: BaseObject, keyList?: string[]) {
	const resolvedKeyList = keyList || Object.keys(objectTo);
	for (const key of resolvedKeyList) {
		isNotNullish(objectFrom[key]) && (objectTo[key] = objectFrom[key]);
	}
}

export function areObjectsDifferent(
	objectToCheck: BaseObject,
	objectToDiff: BaseObject,
	keysToCheck?: string[]
): boolean {
	if (!objectToCheck || !objectToDiff) return true;
	const resolvedKeyList = keysToCheck || Object.keys(objectToCheck);
	return resolvedKeyList.every((k) => objectToCheck[k] === objectToDiff[k]);
}
