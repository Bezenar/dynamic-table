<template>
  <div class="type-string">
    <input type="text" v-model="number" @change="changeNumber()" />
  </div>
</template>

<script>
/** import store to change datas in Main array */
import { store } from "./../../store/index";

export default {
  name: "TypeString",
  props: ["row", "cell"],
  data() {
    return {
      number: ""
    };
  },
  methods: {
    changeNumber() {
      const rowId = this.$props.row.id;
      const cellId = this.$props.cell.id;
      return (store.changeNumber(rowId, cellId).data = this.number);
    }
  },
  created() {
    /** Check if user have starting data with number in cells */
    if (this.$props.cell.data !== "") {
      this.number = this.$props.cell.data;
    }
  }
};
</script>

<style lang="scss" scoped>
/** import external styles 
*   it's not nesessecary to use scoped styles in this APP
*/
@import "./../../assets/styles.scss";
</style>
