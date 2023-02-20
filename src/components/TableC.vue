<template>
  <div>
    <div class="table">
      <b-table :items="posts" :fields="fields" striped responsive="sm" v-if="$route.params.username === 'admin'">
        <template #cell(edit)="row" >
          <b-button variant="primary" size="md" @click="show=true, userId=row.item.userId, title=row.item.title, body=row.item.body, id=row.item.id" class="mr-2">
            Edit
          </b-button>       
        </template>
        <template #cell(delete)="row" >
          <b-button variant="danger" size="md" @click="delPost(row.item.id)" class="mr-2">
            Delete
          </b-button>       
        </template>
      </b-table>
    </div>

    <div  v-if="$route.params.username !== 'admin'">
      <b-table :items="posts" striped responsive="sm">
      </b-table>
    </div>

    <b-modal
            v-model="show"
            title="Edit object"
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
        <b-button @click="editPost" variant="info">Submit</b-button>
        </div>
    </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        posts: [],
        fields: ['userId', 'id','title','body', 'edit','delete'],
        userId: null,
        title: null,
        body: null,
        id:null,
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'primary',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'primary',
        footerTextVariant: 'dark',
        noCache: Date.now().toString(16)
      }
    },
    mounted() {
      axios.get('http://localhost:4000/posts')
        .then(res => this.posts = res.data)
    },
    methods: {
      delPost(id) {
        axios.delete(`http://localhost:4000/posts/${id}`)
          .then(response => {
              console.log(response);
              location.reload()
          });
      },
      editPost() {
        axios.put(`http://localhost:4000/posts/${this.id}`, {
          id:this.id,
          userId:this.userId,
          title:this.title,
          body:this.body
        })
          .then(response => {
              console.log(response);
              location.reload()
          });
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
