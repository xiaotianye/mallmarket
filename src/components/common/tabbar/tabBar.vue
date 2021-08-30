<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: "TabBar",
  components: {
   
  },
};
</script>
<style>
#tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:grey;
  box-shadow: 0 -3px 1px powderblue;
}

</style>