<template>
  <div class="custom-input">
    <div class="mb-2">Filter</div>
    <div class="mb-2">
      <label for="user">User</label><br/>
      <input type="text" id="user" :value="user" @input="$emit('input-user', $event.target.value.trim())" autocomplete="off">
    </div>
    <div class="mb-2">
      <label for="content">Content</label><br/>
      <input type="text" id="content" :value="content" @input="$emit('input-content', $event.target.value.trim())" autocomplete="off">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    user: {
      type: String,
      required: true,
      default: ''
    },
    content: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style>
.custom-input {
  background-color: grey;
  padding: 12px;
}
.mb-2 {
  margin-bottom: 12px;
}
</style>