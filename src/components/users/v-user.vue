<template>
  <div class="v-user">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <p class="info__name">{{ user_data.name }}</p>
      <p class="info__last-message">
        {{ user_data.chat[user_data.chat.length - 1].text }}
      </p>
    </div>
    <div class="v-user__time">
      {{ user_data.chat[user_data.chat.length - 1].time }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-user',
  props: {
    user_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
