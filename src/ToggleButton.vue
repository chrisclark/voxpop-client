<template>
<button class="button"
        :class="style"
        v-on:click="toggle">
  {{labeltxt}}</button>
</template>

<script>
import { api } from './api';
export default {
  name: 'ToggleButton',
  props: ['queued', 'user', 'name', 'admin'],
  methods: {
    toggle: function() {
      api.toggle(this.name, this.user);
    }
  },
  computed: {
    labeltxt: function() {
      return this.queued ? "Nah, all good." : "Ooh! Me!";
    },
    style: function () {
      let ret = this.admin ? "is-small " : "is-large ";
      ret += this.queued ? "is-warning" : "is-primary";
      return ret;
    }
  }
}
</script>
