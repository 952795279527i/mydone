<template>
    <div class="leftbelow">
        <ul>
            <li class="newly_add" v-for="(item,index) in eventList" :key="item.id" @click="sta(index)" :class="item.state ? 'newly_add1' : ''" @mouseover="stat(index)" @mouseleave="resetState">
                <span class="stick"  v-if="item.state"></span>
                <i data-v-a22cce3a="" class="d-icon f16 flex mr-1"><svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M2.75 18h12.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.494L2.75 18h12.5h-12.5zm0-6.5h18.5a.75.75 0 0 1 .102 1.493L21.25 13H2.75a.75.75 0 0 1-.102-1.493l.102-.007h18.5h-18.5zm0-6.497h15.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493l.102-.007h15.5h-15.5z" fill="currentColor"></path></g></svg></i>
                <span class="tative" @dblclick="turninp(index)">
                    <input type="text" ref="myinput" v-if="item.detitng" v-model="item.name" @blur="saveItem(index)" class="inpname">
                    <span v-else>{{ item.name }}</span>
                </span>
                <span class="incident1" @click="del(index)" v-if="item.streakstate"><svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M6.5 7v4a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0zM9 6.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zM10 4h3a.5.5 0 0 1 0 1h-.553l-.752 6.776A2.5 2.5 0 0 1 9.21 14H6.79a2.5 2.5 0 0 1-2.485-2.224L3.552 5H3a.5.5 0 0 1 0-1h3a2 2 0 1 1 4 0zM8 3a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1zM4.559 5l.74 6.666A1.5 1.5 0 0 0 6.79 13h2.42a1.5 1.5 0 0 0 1.49-1.334L11.442 5H4.56z" fill="currentColor"></path></g></svg></span>
                <span class="incident" v-else="item.streakstate">{{ item.filament }}</span>
            </li>
        </ul>
        <div class="newlist" @click="newlist">
            <i data-v-a22cce3a="" class="d-icon mr-1 f16"><svg data-v-a22cce3a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5V2.75z" fill="currentColor"></path></g></svg></i>
            <span class="newlist_bos">新建列表</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'leftbelow',
    data() {
        return {
            eventList:[
                {
                    name:"办理",
                    state:false,
                    streakstate:false,
                    filament:0,
                    detitng:false
                },
            ],
        };
    },

    mounted() {
        
    },

    methods: {
        sta(indexs){
            this.eventList.forEach((item,index)=>{
                if(index==indexs){
                    item.state = true;
                }else{
                    item.state = false;
                }
            })
        },
        stat(indexs){
            this.eventList.forEach((item,index)=>{
                if(index==indexs){
                    item.streakstate = true;
                }else{
                    item.streakstate = false;
                }
            })
        },
        resetState() {
         this.eventList.forEach((item) => {
         item.streakstate = false;
      })
        },
        newlist(){
            let eventObj ={
                name:"待事办理",
                state:false,
                streakstate:false,
                filament:0,
                detitng:false
            }
            this.eventList.push(eventObj)
        },
        turninp(index){
            this.eventList[index].detitng= true 
            if (this.eventList[index].detitng === true) {
                this.$nextTick(() => {
                  const inputElement = this.$refs.myinput;
                //   console.log(inputElement)
                  if (inputElement) {
                    inputElement[0].focus();
                  }
                });
            }
        },
        saveItem(index){
            this.eventList[index].detitng = false
        },
        del(index){
            this.eventList.splice(index, 1);  
        }        
    },
};
</script>

<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
   .leftbelow{
    width: 90%;
    height: 66.5%;
    margin: 0 auto;
    border-bottom-left-radius:8px;
   }
   .leftbelow ul li{
    list-style: none;
   }
   .leftbelow ul{
    display: flex;
    min-height: 92%;
    flex-direction: column;
   }
   .newly_add{
    width: 100%;
    height: 35px;
    margin-top: 3px;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    line-height: 35px;
   }
   .newly_add:hover{
    background-color:#1b2835;
    transition: background-color 0.4s ease;
   }
   .newly_add1{
    background-color:#1b2835;
   }
   .newly_add:nth-child(1){
    margin-top: 7px;
   }
   .newly_add i svg,.newly_add i{
        display: block;
        width: 16px;
        height: 16px;
        color: #bbbfc3;
        float: left;
    }
    .newly_add i{
        margin: 9px;
    }
    .stick{
        display: block;
        width: 3px;
        height: 13px;
        position: absolute;
        border-radius: 3px;
        top: 31%;
        background-color:#1890ff ;
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
    .incident1 svg{
        float: right;
        margin:9px 6px;
        width: 16px;
        height: 16px;
        color: #bbbfc3;
    }
    .newlist{
        width: 100%;
        height: 30px;
    }
    .newlist i svg,.newlist i{
        display: block;
        width: 16px;
        height: 16px;
        color: #bbbfc3;
        float: left;
    }
    .newlist i{
        margin: 7px;
    }
    .newlist_bos{
        cursor: pointer;
        float: left;
        line-height: 30px;
        font-size: 14px;
        color: #bbbbbc;
    }
    .newlist:hover .newlist_bos,.newlist:hover i svg{
        color: #fff;
    }
    .inpname{
        width: 120px;
        height: 28px;
        background-color: #1b2835;
        border: 0.5px solid #6c6e72;
        border-radius: 8px;
        outline: none;
    }
</style>