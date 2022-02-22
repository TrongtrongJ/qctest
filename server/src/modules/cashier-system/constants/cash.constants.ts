export type CashType = '1000' | '500' | '100' | '50' | '20' | '10' | '5' | '1' | '0.25';

type BaseCashMap = Record<CashType, number>;

export const initialMaximumCashMap: BaseCashMap = {
	'1000': 10,
	'500': 20,
	'100': 15,
	'50': 20,
	'20': 30,
	'10': 20,
	'5': 20,
	'1': 20,
	'0.25': 50
} as const;

export const upScaledCashValue: BaseCashMap = {
	'1000': 100_000,
	'500': 50_000,
	'100': 10_000,
	'50': 5_000,
	'20': 2_000,
	'10': 1_000,
	'5': 500,
	'1': 100,
	'0.25': 25
} as const;

export const initialCashReturnMap: BaseCashMap = {
	'1000': 0,
	'500': 0,
	'100': 0,
	'50': 0,
	'20': 0,
	'10': 0,
	'5': 0,
	'1': 0,
	'0.25': 0
} as const;
