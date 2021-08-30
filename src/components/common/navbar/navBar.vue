<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="mid"><slot name="mid"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 -2px 1px 2px black;
}

.left{
  width: 60px;
}

.mid{
  flex: 1;
  text-align: center
}

.right{
    width: 60px;
}
</style>