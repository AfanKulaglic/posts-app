<template>
  <div>
    <nav>
      <router-link class="router-link" to="/home/admin">Home</router-link>
      <a variant="outlined" class="router-link" v-if="$store.state.username" @click="logout">Logout</a>
    </nav>
    <b-container>
      <div class="home">
          <FormC class="form" />
          <TableC class="table" />
      </div>
    </b-container>
</div>
</template>

<script>
// @ is an alias to /src
import TableC from '@/components/TableC.vue'
import FormC from '@/components/FormC.vue'

export default {
  name: 'HomeView',
  components: {
    TableC,
    FormC
  },
  methods: {
    logout() {
      this.$store.commit('logout')
    }
    },
    mounted() {
      this.$store.commit('initializeStore')
    }
}
</script>

<style scoped>
  .home {
    display: flex;
    margin-top: 6vh;
  }  
  .form {
    position: fixed;
  }

  .table {
    margin-left: 5vh;
  } 

  nav {
    padding: 18px;
    background-color: rgba(36, 162, 184, 0.685);
    position: fixed;
    margin-top: -6vh;
    width: 100%;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
  
  .router-link {
    margin-left: 14px;
    text-decoration: none;
  }
</style>