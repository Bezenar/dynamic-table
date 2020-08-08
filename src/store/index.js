/**
 * @description
 * Create file for data saving. Like Vuex, but smaller abillity then at Vuex.
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
   * @description
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
  }
};
