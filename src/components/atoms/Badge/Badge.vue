<template>
  <div
    class="badge"
    :class="{
      [`bg-${color}`]: !!color,
      [`text-${text}`]: !!text,
    }"
  >
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<style lang="scss">
  @import "./Badge.scss";
</style>

<script>
export { default } from '@/core/atoms/Badge';
</script>
