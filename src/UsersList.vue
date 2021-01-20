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

<script lang="ts">
import ToggleButton from './ToggleButton';
import RemoveButton from './RemoveButton';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    ToggleButton,
    RemoveButton
  }
})
export default class UsersList extends Vue {
  @Prop(Boolean) readonly queued: boolean
  @Prop(String) readonly user: string
  @Prop(String) readonly name: string
  @Prop(Boolean) readonly admin: boolean
  @Prop(Array) queue: Array<string>

  get is_queued(): boolean {
    return this.queue.includes(this.user);
  }
}
</script>
