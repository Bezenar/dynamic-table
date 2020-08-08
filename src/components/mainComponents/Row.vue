<template>
  <tr class="row" :class="{ odd: row.id % 2 !== 0 }">
    <Cell
      v-for="cell in row.cells"
      :key="cell.id"
      :row="row"
      :cell="cell"
    ></Cell>
    <td class="row__result">{{ rowResult }}</td>
  </tr>
</template>

<script>
/** Import component.*/
import Cell from "./Cell.vue";

export default {
  name: "Row",
  components: { Cell },
  /** props for data receivig from children to parent components */
  props: ["row", "cell"],
  computed: {
    /** Make Sum in each row in table */
    rowResult() {
      /** cells - All cells in one row */
      const cells = this.$props.row.cells;
      let result = 0;
      /** Loop through each cell in row. */
      cells.forEach(el => {
        result += parseInt(el.data);
      });
      return result;
    }
  }
};
</script>

<style lang="scss">
/** 
  Import some small styles from external file. 
  Also, is ability to create vue config file and
  register there our external styles 
*/
@import "./../../assets/styles.scss";
.odd {
  background-color: darkslategray;
}
</style>
