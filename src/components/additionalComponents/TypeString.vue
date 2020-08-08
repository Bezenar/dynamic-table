<template>
  <div class="type-string">
    <input type="text" v-model="number" @change="changeNumber()" />
  </div>
</template>

<script>
/** Import store to change datas. */
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
      /** rowId - row ID, when need to found cell. */
      const rowId = this.$props.row.id;
      /** cellId - cell ID, where need to change data. */
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
/** 
  import external styles.
  It's not nesessecary to use scoped styles in this APP
*/
@import "./../../assets/styles.scss";
</style>
