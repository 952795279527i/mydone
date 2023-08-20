<template>
    <div class="leftup">
        <div class="inp_bos">
        <input
         class="sear_bos"
         placeholder="search"
         maxlength="10"
         v-model="input"
         >
         <i class="el-icon-search"></i>
       </div>
       <div class="all_elevant">
          <div class="allele_con"  v-for="(item,index) in dataList" :key="item.id" @click="st(index)" :class="item.state ? 'allele_con1' : ''">
            <span class="stick" v-if="item.state"></span>
            <i data-v-a22cce3a="" class="d-icon f16 flex mr-1"  v-html="item.svg"></i>
            <span class="tative">{{item.name}}</span>
            <span class="incident">{{ item.filament }}</span>
          </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'leftup',
    data() {
        return {
            input:'',
            dataList:[
                {
                    id:1,
                    name:"所有",
                    svg:`<svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75v6.75zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5v-6.75zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5v6.75zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75V4.5z" fill="currentColor"></path></g></svg>`,
                    filament:0,
                    state:true
                },
                {
                    id:2,
                    name:"今天",
                    svg:`<svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4v-1.5h-4a1.75 1.75 0 0 1-1.75-1.75V8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75h-4V21h4A3.25 3.25 0 0 0 21 17.75V6.25zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75zm7 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0zm.502 6.56a.75.75 0 0 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v3.83a.75.75 0 1 0 1.5 0v-3.83l1.002.89z" fill="currentColor"></path></g></svg>`,
                    filament:0,
                    state:false
                },
                {
                    id:3,
                    name:"最近7天",
                    svg:`<svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7z" fill="currentColor"></path></g></svg>`,
                    filament:0,
                    state:false
                }
            ],
            incData:[],
            timestamp: 0,
        };
    },
    props:["carData"],
    mounted() {  
        this.incData = this.carData.data
        let currentDate = new Date();
        this.timestamp = currentDate.getUTCDate();
        this.dataList.forEach(item => {
            if (item.name === "所有") {
                item.filament = this.carData.data.length;
            }else if(item.name === "今天"){
                let a = this.carData.data.filter((i)=>{
                    const date = new Date(i.create_time);
                    const day = date.getUTCDate();
                    return day == this.timestamp
                })
                item.filament = a.length;
            }else if(item.name === "最近7天"){
                let ab = this.incData.filter((item)=>{
                    const date = new Date(item.create_time);
                    const day = date.getUTCDate();
                    return day>=this.timestamp-6 && day<this.timestamp
                }) 
                item.filament = ab.length;
            }   
         });
    },
    methods: {
        st(sindex){
            this.dataList.forEach((item,index)=>{
                if(index==sindex){
                    item.state = true;
                    if (item.name === "所有" && item.state) {
                        this.$bus.$emit("alldata", this.incData)
                    }else if(item.name === "今天" && item.state){
                        let inc = this.incData.filter((item)=>{
                            const date = new Date(item.create_time);
                            const day = date.getUTCDate();
                            return day == this.timestamp
                        })
                        this.$bus.$emit("alldata", inc)
                    }else if(item.name === "最近7天" && item.state){
                        let incv = this.incData.filter((item)=>{
                            const date = new Date(item.create_time);
                            const day = date.getUTCDate();
                            return day>=this.timestamp-6 && day<this.timestamp
                        }) 
                        this.$bus.$emit("alldata", incv)
                    }
                }else{
                    item.state = false;
                }
            })
        }
    },
};
</script>

<style lang="css" scoped>
      .inp_bos{
        width: 92%;
        height: 75px;
        margin: 0 auto;
        position: relative;
    }
    .sear_bos{
        width: 90%;
        height: 30px;
        border-radius: 8px;
        outline: none;
        border: 1.5px solid #25252c;
        background-color: #25252c;
        margin-top: 40px;
        padding-left: 10px;
        color: white;
    }
    .sear_bos:focus{
        border: 1.5px solid #6c6e72;
        caret-color: white;  
    }
    .sear_bos:hover{
        border: 1.5px solid #6c6e72;
        transition: border 0.3s ease;
    }
    .inp_bos>i{
        color: #67676c;
        position: absolute;
        top: 50px;
        right: 20px;
    }
    .all_elevant{
        width: 92%;
        margin:0 auto;
        height: 125px;
        border-bottom: 1px solid #333335;
    }
    .allele_con{
        width: 100%;
        height: 35px;
        float: left;
        margin-top:3px;
        border-radius: 8px;     
        position: relative;
        line-height: 35px;
        cursor: pointer;
    }
    .allele_con:nth-child(1){
    margin-top: 7px;
    }
    .allele_con i svg,.allele_con i{
        display: block;
        width: 16px;
        height: 16px;
        color: #bbbfc3;
        float: left;
    }
    .allele_con i{
        margin: 3px 8px;
    }
    .stick{
        display: block;
        width: 3px;
        height: 13px;
        position: absolute;
        border-radius: 3px;
        top: 31%;
        background-color:#1890ff;
    }
    .stick1{
        background-color:#fff;
    }
    .tative{
        float: left;
        font-size: 14px;
        color: #54544b;
    }
    .incident{
        float: right;
        margin-right: 10px;
        font-size: 14px;
        color: #bbbfc3;
    }
    .allele_con:hover{
        background-color: #1b2835;
        transition: background-color 0.4s ease;
    }
    .allele_con1{
        background-color: #1b2835;
    }
</style>