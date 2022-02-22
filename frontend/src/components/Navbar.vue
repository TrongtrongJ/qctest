<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="#" class="nav-link">
          <ArrowIcon /><span class="link-text logo-text">QC Ticket Management</span>
        </a>
      </li>
      <li class="nav-item">
        <RouterLink
          :to="{ name: 'tickets' }"
          class="nav-link"
          :class="route.fullPath.startsWith('/tickets') && 'active'"
        >
          <TicketIcon /><span class="link-text">Tickets</span></RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          :to="{ name: 'report' }"
          class="nav-link"
          :class="route.fullPath.startsWith('/report') && 'active'"
          ><ChartIcon /><span class="link-text">Report</span></RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          :to="{ name: 'history' }"
          class="nav-link"
          :class="route.fullPath.startsWith('/history') && 'active'"
          ><HistoryIcon /><span class="link-text">History</span></RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  background-color: var(--bg-primary);
  transition: width 600ms ease;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  box-sizing: border-box;
  // filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  letter-spacing: 0.3ch;
  width: 100%;
}
.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
  word-wrap: break-word;
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

.active {
  background-color: var(--bg-secondary-highlight);
}

@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  .active {
    border-top: 0.4rem solid purple;
  }

  main {
    margin: 0;
  }
}

@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }
  .navbar:hover {
    width: 16rem;
    .link-text {
      display: inline;
    }
    .logo svg {
      margin-left: 11rem;
    }
    .logo-text {
      text-align: left;
      left: 0;
    }
  }

  .active {
    border-right: 0.4rem solid purple;
  }
}
</style>
