<template>
  <v-app id="inspire" align-top light>
    <v-navigation-drawer
      fixed
      clipped
      v-model="drawer"
      app>
      <v-list dense>
        <ExamCollectByGrade v-on:update-content="onUpdateContent"></ExamCollectByGrade>
        <v-list-tile @click="onUpload">
          <v-list-tile-action>
            <v-icon>backup</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>上传题目</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onFeedback">
          <v-list-tile-action>
            <v-icon>feedback</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>反馈</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onContributors">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>贡献者</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>小数数学题集 - {{ contentTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <Accounts></Accounts>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 v-if="contentTitle">
            <ExamContentToolbar
              :count="contentExercisesCount"
              v-on:update-content="onUpdateContent">
            </ExamContentToolbar>
          </v-flex>
          <v-flex xs12>
            <ExamContent :exercises="contentExercises"></ExamContent>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Accounts from '@/components/Accounts';
import ExamCollectByGrade from '@/components/ExamCollectByGrade';
import ExamContent from '@/components/ExamContent';
import ExamContentToolbar from '@/components/ExamContentToolbar';

export default {
  data: () => ({
    drawer: true,
    contentTitle: null,
    contentUpdateClosure: {},
    contentExercisesCount: 0,
    contentExercises: [],
  }),
  components: {
    Accounts,
    ExamCollectByGrade,
    ExamContent,
    ExamContentToolbar,
  },
  methods: {
    onUpdateContent: function onUpdateContent(count, title, newClosure) {
      if (count) {
        this.contentExercisesCount = count;
      }
      if (title) {
        this.contentTitle = title;
      }
      if (newClosure) {
        this.contentUpdateClosure = newClosure;
      }

      this.onRefresh();
      this.drawer = false;
    },
    onRefresh: function onRefresh() {
      this.contentExercises = this.contentUpdateClosure(this.contentExercisesCount);
    },
    // TODO(halton): Add below support.
    onUpload: () => '',
    onFeedback: () => '',
    onContributors: () => '',
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
