<template>
  <div class="table">
    <div class="table__buttons-container">
      <button class="table__button add-row" @click="addRow">Add row</button>
      <button class="table__button add-column" @click="addColumn">
        Add column
      </button>
    </div>
    <div class="table__content-wrapper">
      <table class="table__content">
        <Row
          class="table__row"
          v-for="row in rows"
          :key="row.id"
          :row="row"
        ></Row>
        <tr>
          <td
            class="table__column-result"
            v-for="columnNr in columnsCount"
            :key="`rowResult-${columnNr}`"
          >
            {{ columnsSum(columnNr) }}
          </td>
          <td class="table__total-result">{{ totalResult }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
/**Import store and Components. */
import { store } from "./store/index";
import Row from "./components/mainComponents/Row.vue";

export default {
  name: "Table",
  components: { Row },
  data() {
    return {
      rows: store.state.rows //Take datas from store
    };
  },
  computed: {
    columnsCount() {
      /**Take columns amount from store. */
      return store.columnsCount();
    },
    /** Function to count total result in table cells. */
    totalResult() {
      let result = 0;
      /** Loop through each row. */
      this.rows.forEach(row => {
        /** Loop through each cell in row. */
        row.cells.forEach(cell => {
          result += parseInt(cell.data);
        });
      });
      return result;
    }
  },
  methods: {
    /**
     * Function to column sum.
     */
    columnsSum(arg) {
      /**
       * Function argument "arg" give a number of column.
       */
      let result = 0;
      /** Loop through each row. */
      this.rows.forEach(row => {
        /** Loop through each cell in row to find cell in first column. */
        row.cells.find(cell => {
          if (cell.id === arg) {
            result += parseInt(cell.data);
          }
        });
      });
      return result;
    },
    /** Function to add row to table. */
    addRow() {
      /** Create id for row. */
      const id = this.rows[this.rows.length - 1].id + 1;
      const row = {
        id: id,
        cells: []
      };
      let i = 0;
      /** Pushing cells to row to create columns for table horizontal lenght. */
      while (i < this.columnsCount) {
        const cell = {
          id: row.cells.length + 1,
          type: "",
          data: 0
        };
        row.cells.push(cell);
        i++;
      }
      this.rows.push(row);
    },
    /** Function to add column to table. */
    addColumn() {
      /**
       * Loop through each row.
       * Pushing cells to each row to make table vertical lenght to be indetical
       * in each column.
       */
      this.rows.forEach(row => {
        const cell = {
          id: row.cells.length + 1,
          type: "",
          data: 0
        };
        row.cells.push(cell);
      });
    }
  }
};
</script>

<style lang="scss">
.table {
  background-color: lightgrey;
  overflow: scroll;
  &__column-result,
  &__total-result {
    border: 1px solid black;
    background-color: burlywood;
  }
  &__content {
    border-collapse: collapse;
    text-align: center;
    line-height: 100%;
    vertical-align: middle;
  }
  &__row {
    .odd {
      background-color: darkslategray;
    }
  }
  &__buttons-container {
    vertical-align: middle;
    text-align: center;
    line-height: 10vh;
  }
  &__button {
    margin: 0 10px;
    padding: 10px 15px;
    text-align: center;
    line-height: 100%;
    vertical-align: middle;
    border: 1px solid blueviolet;
    outline: none;
    background: transparent;
    position: relative;
    z-index: 1;
    color: white;
    cursor: pointer;
    transition: all 0.8s linear;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: black;
      position: absolute;
      top: 10%;
      left: 5%;
      z-index: -1;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  &__content-wrapper {
    display: flex;
    justify-content: center;
    overflow: scroll;
    height: 100%;
  }
}
</style>
