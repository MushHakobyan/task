<template>
  <div class="post">
    <div class="post-card">
      <div class="post-card__img">
        <img src="http://placekitten.com/200/300" alt="img">
      </div>
      <div class="post-card__body">
        <span class="user">{{user}}</span>
        <p class="title">{{title}}</p>
        <p class="content">{{content}}</p>
        <button v-if="!open" class="open-button" @click="openComment(userId)">Open Comment</button>
      </div>
    </div>
    <div v-if="open && comments.length" class="comments">
      <Comment v-for="com in comments" :key="com.id"
        :email="com.email"
        :name="com.name"
        :content="com.body"
      />
      <button class="open-button" @click="closeComment">Close Comment</button>
    </div>
    </div>
</template>

<script>
import Comment from './Comment'
export default {
  name: 'Post',
  props: {
    user: String,
    userId: Number,
    title: String,
    content: String
  },
  components: {Comment},
  data() {
    return {
      open: false,
      comments: []
    }
  },
  methods: {
    openComment(id) {
      if(!this.comments.length) this.getCommentById(id)
      this.open = true            
    },
    closeComment() { this.open = false },
    getCommentById(id) {
      this.$http.get(`comments?postId=${id}`)
        .then(res => this.comments = res.data)
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>
.post {
  margin-bottom: 20px;
}
.post-card {
  border: 1px solid grey;
  background-color: rgb(158, 235, 238);
  padding: 16px 20px;
  display: flex;
  column-gap: 16px;  
}

.post-card__img {
  width: 150px;
  height: 150px;
}
.post-card__img img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}
.post-card__body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.post-card__body .user {
  color: saddlebrown;
  font-size: 14px;
}
.post-card__body .title {
  font-size: 18px;
  margin: 8px 0 12px;
}
.post-card__body .content {
  margin: 8px 0 12px;
  flex-grow: 1;
}
.open-button {
  color: dodgerblue;
  border: none;
  background: rgb(158, 235, 238);
  font-size: 16px;
  align-self: flex-end;
  cursor: pointer;
}
.comments {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px;
}
</style>