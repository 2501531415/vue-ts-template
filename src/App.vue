<template>
<div id="app">
  <van-button type="primary">测试</van-button>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Button} from 'vant'
@Component({
  components:{
    [Button.name]:Button
  }
})
export default class ClassName extends Vue{
}
</script>
<style lang="stylus" scoped>
 
</style>