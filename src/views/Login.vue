<template>
  <div class="login">
    {{$t('Login')}}
  </div>
</template>

<script>
export default {
  created () {
    console.log(process.env.VUE_APP_BASE_API)
  }
}
</script>

<style></style>
