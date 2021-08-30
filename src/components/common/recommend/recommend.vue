<template>
  <div id="recommend">
    <div v-for="(item, id) in recommends" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
    }
};
</script>

<style>
#recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 10px;
  border-bottom: 10px solid #eee;
}
#recommend img {
  width: 80%;
  flex: 1;
}
</style>