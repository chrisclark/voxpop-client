<template>
<div class="container">
  <MeetingHeader
    v-bind:name="name"
    v-bind:user="user">
  </MeetingHeader>

  <section class="section">
    <ToggleButton
    :queued="queued"
    :name="name"
    :user="user"
      ></ToggleButton>
  </section>

  <section class="section">
    <h1 class="subtitle">Speaking next</h1>
    <table class="table">
      <tr v-if="queue === undefined || queue.length == 0">
        <td>No one yet!</td>
        <td></td>
      </tr>
      <UsersList
        v-for="u in queue"
        :key="u.id"
        :user="u"
        ></UsersList>
    </table>
  </section>

    <section class="section">
    <h1 class="subtitle">Who's here?</h1>
    <table class="table">
      <UsersList
        v-for="u in users"
        :key="u.id"
        :user="u"
        :name="name"
        :admin="admin"
        :queue="queue"
        ></UsersList>
    </table>
  </section>


</div>
</template>

<script lang="ts">
import {socket, api} from "./api";
import { Component, Vue } from 'vue-property-decorator';
import MeetingHeader from "./MeetingHeader";
import ToggleButton from "./ToggleButton";
import UsersList from "./UsersList";

interface ServerMsg {
  users_list: Array<string>;
  queue: Array<string>;
}

@Component({
  components: {
    MeetingHeader,
    ToggleButton,
    UsersList
  }
})
export default class App extends Vue {
  private name: string = this.$route.params.meeting
  private user: string = this.$route.params.user
  private queued: boolean = false
  private queue: Array<string> = []
  private users: Array<string> = []
  private admin: boolean = this.$route.params.user == 'admin'

  created() {
    var vm = this;

    socket.on('connect', function() {
      api.connect(vm.name, vm.user);
    });

    socket.on('queue_update', function(msg: ServerMsg) {
      vm.queued = msg.queue.includes(vm.user);
      vm.users = msg.users_list;
      vm.queue = msg.queue;
    });
  }
};
</script>
