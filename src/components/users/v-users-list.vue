<template>
  <div class="v-users-list">
    <vUser v-for="chat in chats" :key="chat.id" :user_data="chat" />
  </div>
</template>

<script>
import vUser from './v-user'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'v-users-list',
  components: {
    vUser
  },
  methods: {
    ...mapActions(['FETCH_CHATS', 'SET_USER_TO_HEADER'])
  },
  computed: {
    ...mapState(['chats'])
  },
  mounted() {
    this.FETCH_CHATS()
    this.SET_USER_TO_HEADER()
  }
}
</script>

<style lang="scss" scoped></style>
