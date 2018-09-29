<template>
  <div style="padding: 2rem">
    <Card border="blue-light">
      <div style="padding: 1rem; width: 100%">
        <A href="/test" @click="log">MY<br>LINK</A>
      </div>
    </Card>
    <br>
    <Card border="purple-light">
      <div style="padding: 1rem">
        <Avatar name="Olavo Amorim Santos" icon="trash" />
      </div>
    </Card>
    <br>
    <Card border="yellow">
      <div style="padding: 1rem">
        <Button>Test</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      console.log('CLICKED');
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
