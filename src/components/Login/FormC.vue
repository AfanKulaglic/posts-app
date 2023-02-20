<template>
    <div class="login-form">
        <b-form @submit.prevent="Submit" inline class="form">
            <h2>Login</h2>
            <label class="sr-only" for="inline-form-input-username">Enter username</label>
            <b-input-group class="mb-4 mr-sm-2 mb-sm-3">
            <b-form-input 
                id="inline-form-input-username" 
                placeholder="admin/user"
                v-model="form.username"
                type="text"
                class="form-input"
                requred>
            </b-form-input>
            </b-input-group>

            <label class="sr-only" for="inline-form-input-password">Enter the password</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-3">
            <b-form-input 
                id="inline-form-input-username" 
                placeholder="admin/user"
                v-model="form.password"
                type="password"
                class="form-input"
                requred>
            </b-form-input>
            </b-input-group>

            <b-button type="submit" variant="success" class="mt-4">Login</b-button>
        </b-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
      data() {
        return {
            form: {
                username:"",
                password:"",
            }
        }
      },
      methods: {
        Submit() {
            this.$store.commit('login',this.form.username)
        }
      }
  }
  </script>
  
  <style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .login-form {
        padding-top: 10vh;
        border-radius: 30px;
        padding:18vh;
        padding-left: 10vh;
        padding-right:10vh;
        display:flex;
        justify-content: center;
        height: 100vh;
    }
    h2 {
        margin-bottom: 5vh;
        font-weight: 700;
    }
    .form {
        padding-top: 10vh;
    }
  </style>


  