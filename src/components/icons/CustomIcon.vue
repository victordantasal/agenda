<template>
  <img :src="require(`@/assets/icons/ic-${name}.svg`)">
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>