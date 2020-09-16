<template>
  <div>
    <AwaitButton class="btn btn-primary" @click="handleBtnClick">按我</AwaitButton>
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

<style  lang="stylus" scoped>
.btn {
  cursor: pointer;
  background: none;
  outline: none;
  font-size: 14px;
  display: inline-block;
  line-height: 36px;
  padding: 0 20px;
  text-align: center;
  margin: 0 3px;
  text-decoration: none;
}

.btn.sm {
  font-size: 14px;
  line-height: 2;
  padding: 0 10px;
}

.btn-link {
  color: #1890FF;
  background: none;
  border: 0 none;
  cursor: pointer;
  outline-style: none;
  box-shadow: none;
  margin: 0 5px;
  text-decoration: none;
}

.btn-link:hover {
  text-decoration: underline;
}

.btn-primary {
  white-space: nowrap;
  background: #1890FF;
  border-radius: 6px;
  border: 0 none;
  color: #fff;
  outline: none;
}

.btn-primary.loading {
  background: #1890FF;
}

.btn-primary:hover {
  background: #1890FF;
}

.btn-primary.router-link-active {
  color: #fff;
  background: #1890FF;
}
</style>
