<template>
    <b-container>
      <FormC />
    </b-container>
  </template>
  
  <script>
  // @ is an alias to /src
  import FormC from '@/components/Login/FormC.vue'
  
  export default {
    name: 'HomeView',
    components: {
      FormC
    }
  } 
  </script>
  
  <style scoped>

  </style>