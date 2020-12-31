<template>
<a class="delete is-small mr-2"
   v-on:click="remove">Remove</a>
</template>

<script>
import { api } from './api';
export default {
  name: 'RemoveButton',
  props: ['name', 'user'],
  methods: {
    remove: function() {
      api.remove(this.name, this.user);
    }
  }
}
</script>
