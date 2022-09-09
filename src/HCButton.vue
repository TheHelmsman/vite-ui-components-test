<template>
  <div
    class="button"
    :class="{ 'button--error': isError, 'button--disabled': isDisabled }"
    :style="cssVars"
  >
    <div class="title" :class="{ 'title--disabled': isDisabled }">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface stringMap {
  [key: string]: string;
}

export default defineComponent({
  name: "HCButton",
  props: {
    title: String,
    outlined: Boolean,
    color: String,
    bgcolor: String,
    width: String,
    height: String,
    padding: String,
    fontColor: String,
    fontWeight: String,
    isDisabled: Boolean,
    isError: Boolean,
  },
  computed: {
    getFontColor(): string | undefined {
      let result = this.color;
      if (this.outlined) {
        if (this.fontColor) {
          result = this.fontColor;
        } else {
          result = this.bgcolor;
        }
      }
      return result;
    },
    cssVars(): stringMap {
      const color = this.outlined ? this.bgcolor : this.color;
      const bgcolor = this.outlined ? this.color : this.bgcolor;
      return {
        "--color": color ?? "",
        "--bgcolor": bgcolor ?? "",
        "--width": this.width ?? "auto",
        "--height": this.height ?? "48px",
        "--padding": this.padding ?? "0px 10px",
        "--fontcolor": this.getFontColor ?? "",
        "--fontWeight": this.fontWeight ?? "bold",
      };
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/styles/index";
.button {
  width: var(--width);
  height: var(--height);
  margin: 0 0 0 0px;
  border-radius: 4px;
  border: 1px solid var(--color);
  text-align: center;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgcolor);
  &--disabled {
    color: $light-grey;
    background-color: $background-beige;
    cursor: default;
    border: 1px solid $light-grey;
  }
  &--error {
    border: 1px solid $red;
  }
}
.title {
  color: var(--fontcolor);
  font-weight: var(--fontWeight);
  padding: var(--padding);
  display: inline-block;
  &--disabled {
    color: $light-grey;
  }
}
</style>
