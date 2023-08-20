<template>
    <div class="rightlist">
        <div class="event_header">所有</div>
        <div class="event_con">
            <ul>
                <li class="memor" v-for="(item, index) in arr" :key="index">
                  <p>
                  <el-checkbox
                    v-model="item.flag"
                    @change="playSound(index)"
                  ></el-checkbox>
                  <textarea
                    v-model="item.substance"
                    :class="item.flag ? 'active' : ''"
                    @blur="updateData(item.id,item.substance)"
                  ></textarea>
                  <svg @click="del(item.id)"
                  t="1692348677759"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5980"
                  width="16"
                  height="16"
                >
                  <path
                    d="M847.743 223.953H640.639c-3.132-68.921-60.177-124.029-129.858-124.029s-126.726 55.108-129.858 124.029H173.256c-17.673 0-32 14.327-32 32s14.327 32 32 32h674.487c17.673 0 32-14.327 32-32s-14.327-32-32-32z m-336.962-60.03c34.379 0 62.689 26.426 65.718 60.029H445.064c3.029-33.603 31.338-60.029 65.717-60.029zM767.743 351.79c-17.673 0-32 14.327-32 32v478.173H288.256V383.79c0-17.673-14.327-32-32-32s-32 14.327-32 32v510.173c0 17.673 14.327 32 32 32h511.487c17.673 0 32-14.327 32-32V383.79c0-17.673-14.327-32-32-32z"
                    fill="#7a7a7b"
                    p-id="5981"
                    ></path>
                    <path
                      d="M449.306 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999zM640.84 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999z"
                      fill="#7a7a7b"
                      p-id="5982"
                    ></path>
                  </svg>
                  </p >
                   <p>
                     <el-date-picker
                       id="dateinp"
                       v-model="item.create_time"
                       @blur="updateData(item.id,item.create_time)"
                       type="date"
                       placeholder="-"
                     >
                    </el-date-picker>
                   </p >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import comletes from '@/assets/complete.mp3'
export default {
    name: 'rightlist',

    data() {
        return {
            arr:[],
        };
    },
    mounted() {
    },
    methods: { 
        playSound(index){
            if (this.arr[index].flag) {
            const audio = new Audio(comletes);
            audio.play();
          }
        },
        del(id){
          console.log(id);
          axios
          .delete(`http://localhost:3000/cars/del/${id}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        },
        // update_substance(id,value, create_time){
        //   const data = {
        //       substance: value,
        //       create_time:create_time,
        //   };
        //   axios.put(`http://127.0.0.1:3000/cars/upd/${id}`, data)
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        //         console.log(data);
        // }
        updateData(id,field, value) {
          // if (typeof value === "undefined") {
          //     console.log(`改了 ${field}`);
          // } else {
          //     console.log(`木改 ${field}: ${value}`);
          // }
        const data = {
          [field]: value,
        };
        axios
        .put(`http://127.0.0.1:3000/cars/upd/${id}`, data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(value);
        console.log(field);
        },
          },
    created(){
      this.$bus.$on("alldata",(data)=>{
        this.arr = data.map((item) => {
        return {
          ...item,
          flag: item.state === 1 ? false : true,
        };
      })
      })
    }
};
</script>

<style lang="scss" scoped>
    .rightlist{
        width: 78%;
        height: 100%;
        border-radius: 0 8px 8px 0;
        float: right;
    }
    .event_header{
        max-width: 80px;
        height: 55px;
        font-size: 22px;
        line-height: 60px;
        font-weight: bold;
        color: #dfdddd;
    }
    .event_con{
        width: 100%;
        height: 82%;
        overflow: auto;
        overflow: overlay;
        border-bottom-right-radius: 8px;
    }
    .event_con>span{
        float: left;
        color: #dfdddd;
        margin-left: 40px;
        font-size: 12px;
    }
    .event_con ul{
        padding-left: 0px;
        width: 96%;
        margin: 0 auto;
    }
    // .memor{
    //     height: 55px;
    //     border-radius: 8px;
    //     background-color: #1c1c1e;
    // }
    li {
      list-style: none;
      padding: 0 12px;
      background: #1c1c1e;
    //   display: flex;
      flex-direction: column;
      border-radius: 6px;
      margin-bottom: 8px;
      p {
        display: block;
        padding: 3px 0;
        height: 30px;
        display: flex;
        align-items: center;
        textarea {
          width: 92%;
          height: 30px;
          color: #999999;
          background-color: transparent;
          font-size: 14px;
          resize: inherit;
          margin-left: 10px;
          border: none;
          outline-style: none;
          line-height: 30px;
        }
        svg {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
      p:last-child {
        height: 20px;
        padding-left: 20px;
      }
    }
    .active{
        text-decoration:line-through !important;
        color: #fff;
    }
    .event_con::-webkit-scrollbar {
      width: 5px;
    }
    .event_con::-webkit-scrollbar-thumb {
      background-color: #25252c;
    }
</style>