<template>
  <div class="good-list" >
    <good-list-item v-for="item in cgoods" :key="item.iid" :product="item" />
    
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "GoodsList",
  props: {
    cgoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodListItem
  },
  methods: {
    
  }
};
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>
