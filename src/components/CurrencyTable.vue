<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">ردیف</th>
        <th scope="col">نام ارز</th>
        <th scope="col">قیمت</th>
        <th scope="col">به روزسانی در</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(content, index) in getAllData" :key="(content, index)">
        <td>{{ index + 1 }} -</td>
        <td>{{ content.title }}</td>
        <td>{{ content.p }} ریال</td>
        <td>{{ content.t }} -- {{ content.updated_at }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "CurrencyTable",
  computed: {
    ...mapState(["allData"]),
    ...mapGetters(["getAllData"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },
  mounted() {
    this.getData();
  },
};
</script>
