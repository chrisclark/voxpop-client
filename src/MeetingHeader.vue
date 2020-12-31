<template>
  <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{name}}
      </h1>
      <h2 class="subtitle">
        Have a great meeting
      </h2>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'MeetingHeader',
  props: ['name']
}
</script>
