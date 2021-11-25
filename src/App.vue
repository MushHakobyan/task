<template>
  <div id="app">
    <div class="posts" ref="posts">
      <Post v-for="post in filteredPosts" :key="post.id" 
        :user="getUser(post.userId)"
        :userId="post.userId"
        :title="post.title" 
        :content="post.body"
      />      
    </div>
    <CustomInput 
      :user="user" @input-user="user = $event" 
      :content="content" @input-content="content = $event"
    />
  </div>
</template>

<script>
import Post from './components/Post'
import CustomInput from './components/CustomInput'
export default {
  name: 'App',
  components: {Post, CustomInput},
  data() {
    return {
      user: '',
      content: '',
      posts: [],
      users: null
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(el => el.body?.includes(this.content) && this.getUser(el.userId)?.includes(this.user))
    }
  },
  created() {
    this.getUsers()
    this.getPosts()    
  },
  methods: {
    getPosts() {
      this.$http.get('posts')
        .then(res => this.posts = res.data)
        .catch(e => console.log(e))
    },
    getUsers() {
      this.$http.get('users')
        .then(res => this.users = res.data)
        .catch(e => console.log(e))
    },
    getUser(id) {
      if(this.users) return this.users.find(e => e.id === id).name
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  column-gap: 20px;
}
@media (min-width: 768px) {
  #app {
    flex-direction: row;
  }
}
.posts {
  flex-grow: 1;
}




</style>
