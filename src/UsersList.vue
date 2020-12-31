<template>
  <tr>
    <td><RemoveButton
      :name="name"
      :user="user"
      v-if="admin"
      ></RemoveButton>{{user}}</td>
    <td v-if="admin">
      <ToggleButton
      :queued="is_queued"
      :name="name"
      :user="user"
      :admin="admin"
    ></ToggleButton>
    </td>

    </tr>


</template>

<script>
  import ToggleButton from './ToggleButton'
  import RemoveButton from './RemoveButton'
  export default {
    name: 'UsersList',
    props: ['name', 'user', 'queued', 'admin', 'queue'],
    components: { ToggleButton, RemoveButton },
    computed: {
      is_queued: function() {
        return this.queue.includes(this.user);
      }
    }
  }
</script>
