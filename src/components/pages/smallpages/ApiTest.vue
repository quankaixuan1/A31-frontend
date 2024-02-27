<template>
<h1>test</h1>
<div>
    <button @click="fetchUsers">Get Users</button>
    <!-- <ul>
      <li v-for="user in users" :key="user.name">{{ user.name }} - {{ user.age }}</li>
    </ul> -->
  </div>
</template>

<script lang="ts" >
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    fetchUsers() {
      axios.get('/api/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

