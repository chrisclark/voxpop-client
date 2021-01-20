<template>
  <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{name}}
      </h1>
      <h2 class="subtitle">
        Excited to hear from you, {{user}}!
      </h2>
    </div>
  </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MeetingHeader extends Vue {
  @Prop(String) readonly name: string
  @Prop(String) readonly user: string
}
</script>
