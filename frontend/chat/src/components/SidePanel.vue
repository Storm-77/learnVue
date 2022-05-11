<template>
  <div class="sidepanel">
    <div v-for="user in contacts" :key="user.id.value">
      <ContactCard
        :user="user"
        @switch-conversation="$emit('switch-conversation', user.login.uuid)"
      />
    </div>
  </div>
</template>

<script>
import ContactCard from "./ContactCard";
export default {
  name: "SidePanel",
  components: {
    ContactCard,
  },
  props: {
    contacts: {
      type: Array,
    },
  },
  emits: ["switch-conversation"],
};
</script>

<style scoped>
.sidepanel {
  width: 25%;
}
* {
  background-color: gray;
}
</style>
