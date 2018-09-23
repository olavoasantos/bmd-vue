<template>
  <div
    class="card"
    :class="{
      [`bg-${color}`]: !!color,
      [`text-${text}`]: !!text,
      [`card-border`]: !!border,
      [`card-rounded`]: !!rounded,
      [`border-${border}`]: !!border,
    }"
  >
    <slot>
      <div
        class="card-title"
        v-if="Object.keys($props).includes('title') || Object.keys($slots).includes('title')"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
    </slot>
  </div>
</template>

<style lang="scss">
  @import "./Card.scss";
</style>

<script>
export { default } from '@/core/atoms/Card';
</script>
