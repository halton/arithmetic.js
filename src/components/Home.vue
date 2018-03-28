<template>
  <v-app id="inspire" align-top app light>
    <v-navigation-drawer fixed clipped app v-model="drawer">
      <v-list dense fluid>
        <exam-collect-by-grade v-on:update-content="onUpdateContent"></exam-collect-by-grade>
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
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">小数数学题集</span>
      <v-text-field solo-inverted flat label="Search" prepend-icon="search"></v-text-field>
      <v-spacer></v-spacer>
      <accounts></accounts>
    </v-toolbar>
    <v-container>
      <v-layout column wrap>
        <v-flex>
          <v-card>
            <exam-content-toolbar
              :title="contentTitle"
              :count="contentExercisesCount"
              v-on:update-content="onUpdateContent">
            </exam-content-toolbar>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card>
            <exam-content :title="contentTitle" :exercises="contentExercises"></exam-content>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>霍海涛 &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Accounts from '@/components/Accounts';
import ExamCollectByGrade from '@/components/ExamCollectByGrade';
import ExamContent from '@/components/ExamContent';
import ExamContentToolbar from '@/components/ExamContentToolbar';

export default {
  data: () => ({
    drawer: null,
    contentTitle: '',
    contentUpdateClosure: {},
    contentExercisesCount: 0,
    contentExercises: [],
  }),
  components: {
    accounts: Accounts,
    'exam-collect-by-grade': ExamCollectByGrade,
    'exam-content': ExamContent,
    'exam-content-toolbar': ExamContentToolbar,
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
