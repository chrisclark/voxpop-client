<template>
<a class="delete is-small mr-2"
   v-on:click="remove">Remove</a>
</template>

<script lang="ts">
import { api } from './api';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RemoveButton extends Vue {
  @Prop(String) readonly name: string
  @Prop(String) readonly user: string

  public remove(): void {
    api.remove(this.name, this.user);
  }
}
</script>
