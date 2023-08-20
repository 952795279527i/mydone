<template>
  <div class="home">
    <HelloWorld :carData="carData"/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
    // console.log(this.$route.meta.carData);
  },
  methods: {
  },
  computed:{
    carData() {
      return this.$route.meta.carData;
    }
  }
}
</script>