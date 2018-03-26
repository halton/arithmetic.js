<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
        fixed
        clipped
        app
        v-model="drawer"
      >
      <v-list dense>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>looks_one</v-icon>一年级</div>
            <v-list dense>
              <v-list-tile @click="">
                <v-list-tile-action>
                  <v-icon>folder</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>100以内加法</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-action>
                  <v-icon>folder</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>100以内减法</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>looks_two</v-icon>二年级</div>
            <v-list dense>
              <v-list-tile @click="">
                <v-list-tile-action>
                  <v-icon>folder</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>一位数除法带余数</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>looks_3</v-icon>三年级</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>looks_4</v-icon>四年级</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>looks_5</v-icon>五年级</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>looks_6</v-icon>六年级</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>backup</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>上传题目</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>feedback</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>反馈</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>贡献者</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">小数数学题集</span>
      <v-text-field
        solo-inverted
        flat
        label="Search"
        prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height >
        <v-layout justify-center align-center>aasdfadsf
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
  #keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>
