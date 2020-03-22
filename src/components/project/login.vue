<template>
<div class="home">
    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <van-field
  center
  clearable
  label="验证码"
  placeholder="请输入验证码"
  v-model="captcha"
  :rules="[{ required: true, message: '请填写验证码' }]"
>
<template #button>
    <img :src="captchaURl" alt="">
  </template>
</van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {test,getCaptcha} from '../../network/test' 
import {Form,Button,Field} from 'vant'
@Component({
    components:{
        [Button.name]:Button,
        [Form.name]:Form,
          [Field.name]:Field,
    }
})
export default class Home extends Vue{
    private username = ''
    private password = ''
    private captcha = ''
    private captchaURl = ''
    private key = ''
    created () {
       this._getCaptcha()
    }
    _getCaptcha(){
      getCaptcha().then(res=>{
        // this.captchaURl = res.data.url
        // console.log(res.data.url)
        this.key = res.data.url.key
        this.captchaURl = res.data.url.img
       
      })
    }
    onSubmit(){
       const  data = {
           name:this.username,
           password:this.password,
           captcha:this.captcha,
           key:this.key
       }
        test(data).then(res=>{
            console.log(res)
        })
    }
}
</script>
<style lang="stylus" scoped>

</style>