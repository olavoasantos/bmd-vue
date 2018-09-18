<template>
  <div
    class="avatar"
    :style="bgSource"
    :class="{
      [`text-${text}`]: !!text,
      [`bg-${color}`]: !!color,
      [`avatar-round`]: !squared,
      [`avatar-${size}`]: !!size,
      [`avatar-rounded`]: squared,
    }"
  >
    <span
      v-if="icon"
      :class="`avatar-icon-${size}`"
      v-html="$options.filters.icon(icon)"
    />
    <span v-if="initials">{{ name | initials }}</span>
    <span
      class="avatar-silhouette"
      v-if="!icon && !initials && !source"
      v-html="$options.filters.icon(`profile-${gender}`)"
    ></span>
  </div>
</template>

<style lang="scss">
  @import "@/components/nucleus/index.scss";

  .avatar {
    & {
      display: flex;
      user-select: none;
      align-items: center;
      background-size: cover;
      justify-content: center;
      background-position: center
    }

    &-icon-sm {
      width: 50%;
      height: 50%;
      margin-top: -4px;
    }

    &-icon-md {
      width: 40%;
      height: 40%;
      margin-top: -8px;
    }

    &-icon-lg {
      width: 50%;
      height: 50%;
      margin-top: -8px;
    }

    &-silhouette {
      width: 100%;
      height: 100%
    }

    &-round {
      border-radius: border-radius(round)
    }

    &-rounded {
      border-radius: border-radius(lg)
    }

    &-sm {
      width: spacing(xl);
      height: spacing(xl);
      font-size: spacing(sm);
    }

    &-md {
      width: spacing(3xl);
      height: spacing(3xl);
      font-size: spacing(lg);
    }

    &-lg {
      width: spacing(5xl);
      height: spacing(5xl);
      font-size: spacing(2xl);
    }
  }
</style>

<script>
export { default } from '@/core/atoms/Avatar';
</script>
