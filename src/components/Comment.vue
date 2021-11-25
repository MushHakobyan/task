<template>
  <div class="comment-card">
    <div class="comment-card__img">
      <img src="http://placekitten.com/g/200/300" alt="img">
    </div>
    <div class="comment-card__body">
      <p class="title">{{name}}
        <span class="email">{{email}}</span>
      </p>
      <p class="content">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    email: String,
    name: String,
    content: String
  }
}
</script>

<style>
.comment-card {
  border: 1px solid grey;
  background-color: rgb(158, 235, 238);
  padding: 16px 20px;
  display: flex;
  column-gap: 16px;
}

.comment-card__img {
  width: 80px;
  height: 80px;
}
.comment-card__img img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}
.comment-card__body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.comment-card__body .email {
  color: saddlebrown;
  font-size: 14px;
}
.comment-card__body .title {
  font-size: 18px;
  margin: 8px 0 12px;
}
.comment-card__body .content {
  margin: 8px 0 12px;
  flex-grow: 1;
}
</style>