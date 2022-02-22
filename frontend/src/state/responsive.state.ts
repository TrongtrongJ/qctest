/**
 * This is a store that hold responsive state
 *
 * Using useMediaQuery from @vueuse/core allow to bind
 * css media queries results to ref
 *
 */

import { useMediaQuery } from '@vueuse/core';

export const isVeryLargeScreen = useMediaQuery('(min-width: 1279px)');
export const isLargeScreen = useMediaQuery('(min-width: 1023px)');
export const isMediumScreen = useMediaQuery('(min-width: 767px)');
export const isSmallScreen = useMediaQuery('(max-width: 767px)');
