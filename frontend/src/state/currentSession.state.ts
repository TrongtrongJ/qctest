import { computed } from 'vue';
import { useNow } from '@vueuse/core';

const { now } = useNow({ controls: true });
export { now as currentTime };

export const currentDate = computed(() => now.value.getDate());
export const currentMonth = computed(() => now.value.getMonth());
export const currentYear = computed(() => now.value.getFullYear());
