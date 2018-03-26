<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
        fixed
        clipped
        app
        v-model="drawer"
      >
      <v-list dense>
        <by-grade v-on:update-content="onUpdateContent"></by-grade>
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
      <v-text-field
        solo-inverted
        flat
        label="Search"
        prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <exam-content :title="contentTitle" :exercises="contentExercises"></exam-content>
    <div>
      <v-btn color="info" @click="onRefresh">更新题库</v-btn>
      <v-btn color="info" @click="onPrint">打印</v-btn>
    </div>
  </v-app>
</template>

<script>
import ByGrade from '@/components/ByGrade';
import ExamContent from '@/components/ExamContent';
import * as utils from '../utils';

export default {
  data: () => ({
    drawer: null,
    contentTitle: '',
    contentType: '',
    contentExercises: [],
  }),
  components: {
    'by-grade': ByGrade,
    'exam-content': ExamContent,
  },
  methods: {
    onUpdateContent: function onUpdateContent(title, type) {
      this.contentTitle = title;
      this.contentType = type;
      this.contentExercises.length = 0;
      let count = 0;
      while (count < 100) {
        switch (type) {
          case 'genAddUnder100':
            this.contentExercises.push(utils.genAddUnder100());
            break;
          case 'genSubUnder100':
            this.contentExercises.push(utils.genSubUnder100());
            break;
          case 'genDivisionWithRemain':
            this.contentExercises.push(utils.genDivisionWithRemain());
            break;
          default:
            break;
        }
        count += 1;
      }
    },
    onRefresh: function onRefresh() {
      this.onUpdateContent(this.contentTitle, this.contentType);
    },
    onPrint: function onPrint() {
      window.print();
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
