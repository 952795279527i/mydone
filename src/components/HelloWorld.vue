<template>
  <div class="hello" :class="state?'l2':'l1'">
    <div class="head_nav">  
      <el-popover
          placement="bottom"
          width="80"
          trigger="click"
          v-model="visible">
          <div style="text-align:center; margin: 0">
          <el-button class="showbtn" @click="visible = false">隐藏已完成</el-button>
          <el-button class="clearbtn" @click="visible = false">清理已完成</el-button>
          </div>
          <el-button class="elbtn" slot="reference"><svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"></path></svg></el-button>
      </el-popover>
      <div class="full_bos">
        <i class="d-icon" style="font-size: 8px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="8" viewBox="0 0 11 11" fill="none" class="d-middle"><path id="形状" fill-rule="evenodd" opacity="1" d="M2.3,4.5v4.2h4.2c0.55,0 1,0.45 1,1v0.3c0,0.55 -0.45,1 -1,1h-5c-0.83,0 -1.5,-0.67 -1.5,-1.5v-5c0,-0.55 0.45,-1 1,-1h0.3c0.55,0 1,0.45 1,1zM9.5,0c0.83,0 1.5,0.67 1.5,1.5v5c0,0.55 -0.45,1 -1,1h-0.3c-0.55,0 -1,-0.45 -1,-1v-4.2h-4.2c-0.55,0 -1,-0.45 -1,-1v-0.3c0,-0.55 0.45,-1 1,-1z" style="fill: rgb(255, 255, 255);"></path></svg></i>
      </div>
      <div class="del_bos ">
        <i class="d-icon" style="font-size: 8px; transform: scale(0.92);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="8" viewBox="0 0 11 11" fill="none" class="d-middle"><path id="形状结合" fill-rule="evenodd" opacity="1" d="M8.55 10.58L5.5 7.53L2.45 10.58C1.89 11.14 0.98 11.14 0.42 10.58C-0.14 10.02 -0.14 9.11 0.42 8.55L3.47 5.5L0.42 2.45C-0.14 1.89 -0.14 0.98 0.42 0.42C0.98 -0.14 1.89 -0.14 2.45 0.42L5.5 3.47L8.55 0.42C9.11 -0.14 10.02 -0.14 10.58 0.42C11.14 0.98 11.14 1.89 10.58 2.45L7.53 5.5L10.58 8.55C11.14 9.11 11.14 10.02 10.58 10.58C10.02 11.14 9.11 11.14 8.55 10.58Z" style="fill: rgb(255, 255, 255);"></path></svg></i>
      </div>
    </div>
    <LeftList :carData="carData"/>
    <RightList/>
    <Footer/>
  </div>
</template>

<script>
import RightList from './RightList.vue';
import LeftList from './LeftList.vue'
import  Footer  from './Footer.vue';
export default {
  name: 'HelloWorld',
  components:{
    LeftList,
    RightList,
    Footer
  },
  data() {
    return {
      visible: false,
    }
  },
  props:["carData"],
  methods:{
    
  },
  mounted() {

  },
}
</script>
<style scoped lang="css">
    .hello{
      width: 1000px;
      height: 600px;
      margin: 0 auto;
      border-radius:10px;
      background-color: #16161a;
      position: relative;
      /* transition: width 0.3s; */
    }
    .elbtn{
      background-color: #16161a;
      border: none;
      width: 30px;
      height: 26px;
      padding: 0px;
      border-radius: 6px;
    }
    .elbtn:hover{
      background-color: #2e2e31;
    }
    .elbtn svg{
      width: 12px;
      height: 12px;
    }
    .showbtn,.clearbtn{
      width: 100px;
      border: none;
      margin-left: 0px;
      min-width: 100px;
    }
    .head_nav span{
      position: absolute;
      top: 8px;
      right: 12%;
    }
    .full_bos,.del_bos{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      float: left;
      transition: background-color 0.3s ease;
      background-color: #454548;
    }.del_bos:hover{
      background-color: #e81123;
    }
    .full_bos:hover{
      background-color: #a2a2a3;
    }
    .full_bos{
      position: absolute;
      top: 8px;
      right: 30px;
    }
    .del_bos{
      position: absolute;
      top: 8px;
      right: 5px;
    }
    .left_bos{
      float: left;
    }
</style>
