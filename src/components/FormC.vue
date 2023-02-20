<template>
    <div>
        <div>
            <b-icon variant="info" v-if="$route.params.username === 'admin'"  @click="show=true" icon="plus-circle-fill" font-scale="3.5" class="btn"></b-icon>
            
            <b-modal
            v-model="show"
            title="Add new object"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant"
            :footer-text-variant="footerTextVariant"
            >
            <b-container fluid>
                <b-form inline class="form">
                    <label class="sr-only" for="inline-form-input-name">ENTER USER ID</label>
                    <b-form-input
                        class="mb-2 mr-sm-2 mb-sm-5 input"
                        placeholder="user id"
                        v-model="userId"
                    ></b-form-input>

                    <label class="sr-only" for="inline-form-input-name">ENTER TITLE</label>
                    <b-form-input
                        class="mb-2 mr-sm-2 mb-sm-5 input"
                        placeholder="title"
                        v-model="title"
                    ></b-form-input>

                    <label class="sr-only" for="inline-form-input-name">ENTER BODY</label>
                    <b-form-textarea
                        class="mb-2 mr-sm-2 mb-sm-5 input"
                        placeholder="body"
                        v-model="body"
                        rows="6"
                    ></b-form-textarea>
                </b-form>
            </b-container>

            <template #modal-footer>
                <div class="w-100">
                <b-button @click="getPosts" variant="primary">Submit</b-button>
                </div>
            </template>
            </b-modal>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
      data() {
        return {
            posts: [],
            userId: null,
            title: null,
            body: null,
            show: false,
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerBgVariant: 'info',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'info',
            footerTextVariant: 'dark',
            noCache: Date.now().toString(16)
        }
      },
      methods: {
        getPosts() {
          axios.post('http://localhost:4000/posts ', {
            userId:this.userId,
            title:this.title,
            body:this.body
          })
            .then(res => {
                console.log(res)
                location.reload()
            })
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
  </style>
