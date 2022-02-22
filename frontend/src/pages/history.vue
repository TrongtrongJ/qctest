<script setup lang="ts">
import { onMounted } from "vue";
import { useHead } from "@vueuse/head";

import {
  getAsyncHistoryData,
  processedHistoryList,
  isLoading,
} from "@state/history.state";

useHead({
  title: "QC Ticket Management History",
});

onMounted(() => {
  !isLoading.value && getAsyncHistoryData();
});
</script>

<template>
  <LoadingSpinner :loading="isLoading" />
  <div class="columns">
    <div class="column">
      <h1>history</h1>
      <div
        v-for="{ qty, ticketType, purchaseTimeString } of processedHistoryList.reverse()"
      >
        ซื้อ Ticket <span class="upper-text">{{ ticketType }}</span> จำนวน {{ qty }} ใบ
        {{ purchaseTimeString }}
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
