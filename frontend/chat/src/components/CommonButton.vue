<template>
  <button class="Button">{{ text }}</button>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    text: {
      type: String,
      default: "Button text",
    },
  },
};
</script>
