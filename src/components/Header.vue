<template>
    <div class="header_title">
      <div><van-icon name="arrow-left" class="header_title_left" @click="goback"/></div>
      <slot></slot>
      <div></div>
    </div>
</template>
<script>
import { Icon } from 'vant';
export default {
    components:{
        'van-icon':Icon
    },
    methods:{
        goback(){
             this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/header.scss";
</style>
