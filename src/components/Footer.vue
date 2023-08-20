<template>
    <div class="footer">
        <i data-v-a22cce3a="" class="el-icon todo-add-icon d-sub" style="font-size: 16px;"><svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"></path></svg></i>
        <input class="add_incident" type="text"  @focus="addprogress_class" @blur="removeprogress_class" placeholder="添加任务" @keyup.enter="add_submit" v-model="val">
        <span class="progress" :class="{progress1:hasFocus}"></span>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Footer',
    data() {
        return {
            hasFocus: false,
            val:""
        };
    },
    mounted() {
    },
    methods: {
        addprogress_class(){
            this.hasFocus = true
        },
        removeprogress_class(){
            this.hasFocus = false
        },
        add_submit(){
            const url = 'http://localhost:3000/cars/add';
            const data = {
              substance: this.val
            };
            axios.post(url, data)
            .then(response => {
              console.log(response.data);
              this.refreshCarData();
            })
            .catch(error => {
              console.error(error);
            });
        },
        refreshCarData() {
            const url = 'http://localhost:3000/cars';
            axios.get(url)
            .then(response => {
              this.$root.$emit('updateCarData', response.data);
            })
            .catch(error => {
              console.error(error);
            });
        },
    },
    mounted() {
    this.refreshCarData();
  },
};
</script>

<style lang="css" scoped>
    .footer{
        width: 72%;
        height: 45px;
        position: absolute;
        bottom: 2%;
        right: 3%;
        border-radius: 8px;
        background-color: #1c1c1e;
    }
    .footer i svg{
        width: 16px;
        height: 16px;
        margin: 15px;
        color: #aeadae;
    }
    .footer i{
        height: 100%;
        float: left;
    }
    .add_incident{
        float: left;
        width: 93%;
        height: 95%;
        border-radius: 0 8px 8px 0;
        outline: none;
        border: none;
        background-color: #1c1c1e;
        color: #fff;
    }
    .add_incident:focus{
        caret-color: white;  
    }
    .progress{
        display: block;
        float: left;
        width: 0%;
        height: 1px;
        background-color: #1890ff;
        transition:all 0.3s ease;
    }
    .progress1{
        width: 100%;
    }
</style>