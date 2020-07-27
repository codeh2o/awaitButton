<template>
  <div>
    <button
      v-on="btnListeners"
      class="btn"
      :class="{isLoading}"
      v-bind="$attrs"
      :disabled="isDisabled"
    >
      <slot></slot>
      <i class="el-icon-loading icon" v-show="showLoadingIcon"></i>
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);

export default {
  props: {
    icon: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      isLoading: false,
      timer: null,
      showLoadingIcon: false,
    };
  },
  computed: {
    isDisabled() {
      return this.isLoading || this.disabled;
    },
    btnListeners() {
      const vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return {
        // 我们从父级添加所有的监听器
        ...this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        // 这里确保组件配合 `v-model` 的工作
        async click(event) {
          vm.isLoading = true;
          try {
            vm.timer = setTimeout(() => {
              vm.showLoadingIcon = true;
            }, 500);

            await vm.$listeners.click(event);
          } finally {
            vm.isLoading = false;
            clearTimeout(vm.timer);
            vm.showLoadingIcon = false;
          }
        },
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon {
  margin-left: 5px;
}

.btn {
  background: #2f54eb;
  border-radius: 4px;
  padding: 8px 24px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  margin: 0 8px;
  border: 0 none;
  cursor: pointer;
}

.btn:hover {
  background: #082bb9;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(217, 217, 217, 1);
}

.isLoading {
  background: #2f54eb !important;
}
</style>
