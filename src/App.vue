<template>
  <div>
    <!-- Spinner -->
    <div id="spinner" v-if="spinner">
      <div class="spinner-border text-white" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <!-- Content -->
    <div v-if="!spinner">
      <currency-table></currency-table>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import CurrencyTable from "./components/CurrencyTable.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      spinner: true,
    };
  },
  components: {
    "currency-table": CurrencyTable,
    "app-footer": Footer,
  },
  mounted() {
    setTimeout(() => {
      this.spinner = false;
    }, 3000);
  },
};
</script>
