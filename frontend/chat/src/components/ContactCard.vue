<template>
  <div class="card" @click="$emit('switch-conversation', user.login.uuid)">
    <img class="image" v-bind:src="user.picture.thumbnail" alt="" />
    <div :class="[user.gender, 'nickname']">
      {{ `${user.name.first} - ${user.name.last}` }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  padding: 5px;
  align-items: center;
  /* justify-content: center; */
}
/* div {
  width: unset;
  hyphens: none;
  word-break: keep-all;
  text-overflow: clip;
  background-color: aqua;
  overflow: hidden;
} */
.image {
  border-radius: 50%;
}
.nickname {
  font-size: 20px;
  font-weight: bold;
}
.male {
  color: green;
}
.female {
  color: brown;
}
</style>
