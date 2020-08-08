<template>
  <td class="cell">
    <div class="cell__button__container" v-if="type === null">
      <button class="cell__button" @click="toStringCell()">string</button>
      <button class="cell__button" @click="toNumberCell()">number</button>
      <button class="cell__button" @click="toCheckBoxCell()">checkbox</button>
    </div>
    <component v-else :is="type" :row="row" :cell="cell"></component>
  </td>
</template>

<script>
/** Import components */
import TypeString from "./../additionalComponents/TypeString.vue";
import TypeNumber from "./../additionalComponents/TypeNumber.vue";
import TypeCheckbox from "./../additionalComponents/TypeCheckbox.vue";

export default {
  name: "Cell",
  props: ["row", "cell"],
  components: { TypeString, TypeNumber, TypeCheckbox },
  data() {
    return {
      type: null
    };
  },
  methods: {
    /** function to change type data, to create dynamic components */
    toStringCell() {
      this.type = "TypeString";
    },
    toNumberCell() {
      this.type = "TypeNumber";
    },
    toCheckBoxCell() {
      this.type = "TypeCheckbox";
    }
  },
  created() {
    /** Check if user have starting data. And cells already have types of data */
    if (this.$props.cell.type !== "") {
      this.type = this.$props.cell.type;
    }
  }
};
</script>

<style lang="scss">
.cell {
  border: 1px solid black;
  text-align: center;
  line-height: 100%;
  vertical-align: middle;
  &__button-container {
    padding: 1px 2px;
  }
  &__button {
    padding: 2px 3px;
    margin: 0 2px;
    outline: none;
    border: 1px solid blueviolet;
    background-color: black;
    color: white;
    cursor: pointer;
  }
}
</style>
