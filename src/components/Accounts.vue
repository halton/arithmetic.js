<template>
  <v-menu offset-y>
    <v-btn flat slot="activator"><v-icon>account_circle</v-icon></v-btn>
    <v-list>
      <v-list-tile v-for="item in menus" :key="item.title">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'Name',
  data: () => ({
    menus: [
      { title: '注册' },
      { title: '登录' },
    ],
  }),
};
</script>
