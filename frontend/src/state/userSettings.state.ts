import { useLocalStorage } from '@vueuse/core';

type ItemsPerPage = 10 | 25 | 50 | 100;
export const itemsPerPage = useLocalStorage<ItemsPerPage>('itemsPerPage', 25);

type DateFormat = 'dd/mm/yy' | 'ISO';
export const preferredDateFormat = useLocalStorage<DateFormat>('dateFormat', 'dd/mm/yy');
