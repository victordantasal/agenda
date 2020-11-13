<template>
  <div class="a-input">
    <label>{{label}}</label>
    <input :type="type" v-if="!mask"
       :value="value" 
       @input="$emit('input', $event.target.value)"
    > 
    <input :type="type" v-else
       :value="value"
       @input="$emit('input', $event.target.value)"
       v-mask="mask"
    > 
  </div>
</template>

<script>
export default {
  props: {
    label: String,

    type: {
      type: String,
      default: 'text'
    },

    value: String,

    mask: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss">
  .a-input {
    width: 100%;

    label, input {
      width: 100%;
      margin-bottom: 4px;
    }

    label {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #2a2d3b;
    }

    input {
      border-radius: 4px;
      padding: 9px 10px 7px 10px;
      height: 32px;
      border: solid 1px #c0c3d2;
      background-color: white;
    }
  }

</style>