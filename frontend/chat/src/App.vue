<style>
html body {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>

<template>
  <main>
    <SidePanel :contacts="contacts" @switch-conversation="switchConversation" />
    <div>
      <ConversationHeader />
      <CommonButton />
    </div>
  </main>
</template>

<script>
import ConversationHeader from "./components/ConversationHeader";
import CommonButton from "./components/CommonButton";
import SidePanel from "./components/SidePanel";

export default {
  name: "App",
  components: {
    ConversationHeader,
    CommonButton,
    SidePanel,
  },

  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    switchConversation(uuid) {
      console.log(uuid);
    },
    async fetchUsers() {
      const res = await fetch(
        "https://randomuser.me/api/?results=15&noinfo&inc=name,login,id,picture,gender"
      );
      res.json().then((data) => {
        this.contacts = data.results;
      });
    },
  },
  async created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
main {
  display: flex;
}
</style>
