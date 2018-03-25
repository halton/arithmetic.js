<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>一年级</md-button>
      <md-menu-content>
        <md-menu-item to="/components/grade1/Addition">100以内加法</md-menu-item>
        <md-menu-item to="/components/grade1/Substraction">100以内减法</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>二年级</md-button>
      <md-menu-content>
        <md-menu-item to="/components/grade2/DivisionWithRemain">一位数除法带余数</md-menu-item>
      </md-menu-content>
    </md-menu>

     <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>三年级</md-button>
    </md-menu>

    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>四年级</md-button>
    </md-menu>

    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>五年级</md-button>
    </md-menu>

    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>五年级</md-button>
    </md-menu>

  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
