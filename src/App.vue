<template>
<div class="container">
  <MeetingHeader
    v-bind:name="name">
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

<script>
import {socket, api} from "./api";
import MeetingHeader from "./MeetingHeader";
import ToggleButton from "./ToggleButton";
import UsersList from "./UsersList";

export default {
  name: 'App',
  components: {MeetingHeader, ToggleButton, UsersList},
  data() {
    return {
      name: this.$route.params.meeting,
      user: this.$route.params.user,
      queued: false,
      queue: [],
      users: [],
      admin: this.$route.params.user == 'admin'
    };
  },
  created: function() {
    var vm = this;

    socket.on('connect', function() {
      api.connect(vm.name, vm.user);
    });

    socket.on('queue_update', function(msg) {
      vm.queued = msg.queue.includes(vm.user);
      vm.users = msg.users_list;
      vm.queue = msg.queue;
    });
  }
}
</script>
