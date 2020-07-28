<template>
  <div>
    <AwaitButton @click="handleBtnClick">按我</AwaitButton>
  </div>
</template>

<script>
import AwaitButton from "../components/AwaitButton";

export default {
  components: {
    AwaitButton,
  },
  methods: {
    handleBtnClick() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
  },
};
</script>

<style>
</style>
