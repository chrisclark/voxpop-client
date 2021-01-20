<template>
<button class="button"
        :class="style"
        v-on:click="toggle">
  {{labeltxt}}</button>
</template>

<script lang="ts">
import { api } from './api';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ToggleButton extends Vue {
  @Prop(Boolean) readonly queued: boolean
  @Prop(String) readonly user: string
  @Prop(String) readonly name: string
  @Prop(Boolean) readonly admin: boolean

  public toggle(): void {
    api.toggle(this.name, this.user);
  }

  get labeltxt(): string {
    return this.queued ? "All good." : "Speak up!";
  }

  get style(): string {
    let ret: string = this.admin ? "is-small " : "is-large ";
    ret += this.queued ? "is-warning" : "is-primary";
    return ret;
  }
}
</script>
