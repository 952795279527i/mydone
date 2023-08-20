<template>
    <div class="left_bos">
    <LeftUp :carData="carData"/>
    <LeftBelow/>
    </div>
    
</template>

<script>
import LeftUp from './LeftUp.vue'
import LeftBelow from './LeftBelow.vue'
export default {
    name: 'LeftList',
    data() {
        return {  
            input: ''
        };
    },
    props:["carData"],
    components:{
        LeftUp,
        LeftBelow
    },
    mounted() { 
        console.log(this.carData);
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
    .left_bos{
        width:220px;
        height: 600px;
        border-radius: 8px 0 0 8px ;
        background-color: #1c1c1e;
        overflow: auto;
        overflow: overlay;
    }
    .left_bos::-webkit-scrollbar {
      width: 5px;
    }

    .left_bos::-webkit-scrollbar-thumb {
      background-color: #25252c;
    }
</style>