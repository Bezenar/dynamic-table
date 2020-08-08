/**
 * @description
 * Create file for get/set data. Like Vuex, but with smaller then at Vuex.
 */
export const store = {
  state: {
    rows: [
      {
        id: 1,
        cells: [
          {
            id: 1,
            data: 3,
            type: "TypeNumber"
          },
          {
            id: 2,
            data: 3,
            type: "TypeString"
          }
        ]
      },
      {
        id: 2,
        cells: [
          {
            id: 1,
            data: 1,
            type: "TypeNumber"
          },
          {
            id: 2,
            data: 2,
            type: "TypeNumber"
          }
        ]
      }
    ]
  },
  /**
   * Function to count how much columns are in the table.
   */
  columnsCount() {
    let columns = "";
    for (let i = 0; i < this.state.rows.length; i++) {
      if (columns < this.state.rows[i].cells.length) {
        columns = this.state.rows[i].cells.length;
      }
    }
    return columns;
  },
  /**
   * Function created in store for it reusing at components
   */
  changeNumber(rowId, cellId) {
    /**
     * rowId - argument to now at what row need to take cell.
     * cellId - argument to now cell ID to change data.
     */
    const row = store.state.rows.find((el) => el.id === rowId);
    const cell = row.cells.find((el) => el.id === cellId);
    return cell;
  }
};
