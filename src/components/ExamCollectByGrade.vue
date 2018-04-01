<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header"><v-icon>folder</v-icon>&nbsp;已有习题集（按年级）</div>
      <template v-for="grade in grades">
        <!-- eslint-disable-next-line -->
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">
              &nbsp;<v-icon>{{ grade.icon }}</v-icon>&nbsp;{{ grade.text }}
            </div>
            <v-list dense v-if="grade.exams.length">
              <template v-for="exam in grade.exams">
                <!-- eslint-disable-next-line -->
                <v-list-tile @click="$emit('update-content',
                                           exam.count,
                                           exam.title,
                                           exam.refreshCallback())">
                  <v-list-tile-action>
                    <v-icon>{{ exam.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ exam.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </template>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import * as utils from '../utils';

export default {
  name: 'ExamCollectByGrade',
  data: () => ({
    grades: [
      {
        icon: 'looks_one',
        text: '一年级',
        exams: [
          {
            icon: 'launch',
            title: '100以内加法',
            count: 100,
            // eslint-disable-next-line
            refreshCallback: () => {
              return utils.makeExamGenerator(
                utils.genAddWithTwoOperands,
                {min: 1, max: 99},
                {min: 2, max: 99}
              );
            },
          },
          { icon: 'launch',
            title: '100以内减法',
            count: 100,
            // eslint-disable-next-line
            refreshCallback: () => {
              return utils.makeExamGenerator(
                utils.genSubWithTwoOperands,
                {min: 1, max:99},
                {min: 2, max:99}
              );
            },
          },
        ],
      },
      {
        icon: 'looks_two',
        text: '二年级',
        exams: [
          { icon: 'launch',
            title: '9以内乘法',
            count: 100,
            // eslint-disable-next-line
            refreshCallback: () => {
              return utils.makeExamGenerator(
                utils.genMultiWithTwoOperands,
                {min:2, max: 9});
            },
          },
          { icon: 'launch',
            title: '一位数除法（整除）',
            count: 100,
            // eslint-disable-next-line
            refreshCallback: () => {
              return utils.makeExamGenerator(utils.genDivision, false);
            },
          },
          { icon: 'launch',
            title: '一位数除法带余数',
            count: 100,
            // eslint-disable-next-line
            refreshCallback: () => {
              return utils.makeExamGenerator(utils.genDivision, true);
            },
          },
        ],
      },
      {
        icon: 'looks_3',
        text: '三年级',
        exams: [],
      },
      {
        icon: 'looks_4',
        text: '四年级',
        exams: [],
      },
      {
        icon: 'looks_5',
        text: '五年级',
        exams: [],
      },
      {
        icon: 'looks_6',
        text: '六年级',
        exams: [],
      },
    ],
  }),
};
</script>
