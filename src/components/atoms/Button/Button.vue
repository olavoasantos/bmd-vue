<template>
  <button
    :type="type"
    :form="form"
    :name="name"
    :value="value"
    class="button"
    :disabled="disabled"
    :autofocus="autofocus"
    :formaction="formaction"
    :formmethod="formmethod"
    :formtarget="formtarget"
    :formenctype="formenctype"
    :formnovalidate="formnovalidate"
    :class="{
      [`bg-${color}`]: !!color,
      [`text-${text}`]: !!text,
      [`button-disabled`]: !!disabled,
      [`bg-${colorHover}-hover`]: !!colorHover,
      [`bg-${colorFocus}-focus`]: !!colorFocus,
      [`text-${textHover}-hover`]: !!textHover,
      [`text-${textFocus}-focus`]: !!textFocus,
    }"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<style lang="scss">
  @import "./Button.scss";
</style>

<script>
export { default } from '@/core/atoms/Button';
</script>
