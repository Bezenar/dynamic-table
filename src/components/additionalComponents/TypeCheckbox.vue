<template>
  <div class="type-checkbox">
    <input type="checkbox" v-model="boolean" />
  </div>
</template>

<script>
/** import store to change datas in Main array */
import { store } from "./../../store/index";

export default {
  name: "TypeCheckbox",
  props: ["row", "cell"],
  data() {
    return {
      boolean: ""
    };
  },
  computed: {
    value() {
      /** give data back to parent with store help */
      let row = store.state.rows.find(el => el.id === this.$props.row.id);
      let cell = row.cells.find(el => el.id === this.$props.cell.id);
      return (cell.data = this.boolean ? 1 : 0);
    }
  },
  created() {
    /** Check if user have starting data with number in cells */
    if (this.$props.cell.data !== 0) {
      this.value = this.$props.cell.data;
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
