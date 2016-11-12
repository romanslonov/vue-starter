<template>
    <div id="app">
        <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {}
}
</script>

<style>
* { box-sizing: border-box }
body {
    margin: 0;
    font-size: 16px;
    color: #323232;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
