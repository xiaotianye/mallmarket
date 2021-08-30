<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div v-bind:style= "{color: activeColor}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    userColor:String
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive(){
      return this.$route.path == this.path
    },
    activeColor(){
      return this.isActive? this.userColor: ''
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
/* .active{
  color: red;
} */
</style>