<script setup lang="ts">
import { ticketCatalog, minimumTicketsPurchase } from "@constants/tickets.constants";
import {
  dailyTicketsAvailable,
  ticketTypesPurchasability,
  ticketsQuantity,
  buyTicket,
} from "@state/dailyTickets.state";
</script>

<template>
  <table>
    <caption>
      Available Tickets
    </caption>
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Tickets Left</th>
        <th scope="col">Min</th>
        <th scope="col">Price</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ type, minimum, price } of ticketCatalog">
        <td data-label="Ticket Type" class="upper-text">{{ type }}</td>
        <td data-label="Seats Left">{{ dailyTicketsAvailable[type] }}</td>
        <td data-label="Min">{{ minimum }}</td>
        <td data-label="Price">{{ price }}</td>
        <td data-label="Actions">
          <input
            type="number"
            v-model="ticketsQuantity[type]"
            :min="minimumTicketsPurchase[type]"
            :max="dailyTicketsAvailable[type]"
            :disabled="!ticketTypesPurchasability[type]"
          /><button @click="buyTicket(type)" :disabled="!ticketTypesPurchasability[type]">
            Purchase
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
