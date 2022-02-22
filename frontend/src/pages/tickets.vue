<script setup lang="ts">
import { watch } from "vue";
import { useHead } from "@vueuse/head";

import { onMounted, watchEffect } from "vue";

import { useRouter, useRoute } from "vue-router";

import { isLoading, getAsyncDailyTickets } from "@state/dailyTickets.state";

onMounted(() => {
  !isLoading.value && getAsyncDailyTickets();
});

useHead({
  title: "QC Ticket Management Tickets",
});
</script>

<template>
  <LoadingSpinner :loading="isLoading" />
  <div class="columns">
    <TicketsTable />
  </div>
</template>

<style lang="scss"></style>
