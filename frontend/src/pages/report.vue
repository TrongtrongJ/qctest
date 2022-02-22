<script setup lang="ts">
import { useHead } from "@vueuse/head";

import { onMounted, computed } from "vue";

import { useRouter } from "vue-router";

import {
  selectedDate,
  selectedTicketType,
  dailyTicketsOfDate,
  isLoading,
  getAsyncDailyTicketsByDate,
  setSelectedDate,
} from "@state/report.state";

import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { getSoldTicketsAmount } from "@utils/ticket.util";
import { getDateString } from "@utils/date.util";

const router = useRouter();

onMounted(() => {
  !isLoading.value && getAsyncDailyTicketsByDate();
});

function doNothing(e: Event) {
  e.preventDefault();
  e.stopPropagation();
}

useHead({
  title: "QC Ticket Management Report",
});

const soldTicketsAmount = computed(() =>
  getSoldTicketsAmount(
    selectedTicketType.value,
    dailyTicketsOfDate[selectedTicketType.value]
  )
);

const dateString = computed(() => getDateString(selectedDate.value));
</script>

<template>
  <LoadingSpinner :loading="isLoading" />
  <div class="columns">
    <div class="column">
      <vue-cal
        hide-view-selector
        :time="false"
        @cell-click="setSelectedDate"
        @cell-dblclick="doNothing"
        v-model:selected-date="selectedDate"
        active-view="month"
        xsmall
        class="calendar"
      ></vue-cal>
      <div>รายงานวันที่ {{ dateString }}</div>
      <div>
        <select v-model="selectedTicketType">
          <option value="a">Ticket Type A</option>
          <option value="b">Ticket Type B</option>
          <option value="c">Ticket Type C</option>
          <option value="d">Ticket Type D</option>
        </select>
      </div>
      <div>ถูกขายแล้ว {{ soldTicketsAmount }} ใบ</div>
    </div>
  </div>
</template>

<style lang="scss">
.calendar {
  font-size: 80%;
  aspect-ratio: 1 / 1;
  width: 300px;
}
</style>
