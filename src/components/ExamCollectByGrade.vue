<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header"><v-icon>folder</v-icon>&nbsp;&nbsp;已有习题集（按年级）</div>
      <template v-for="grade in grades">
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header"><v-icon>{{ grade.icon }}</v-icon> {{ grade.text }}</div>
            <v-list dense v-if="grade.exams.length">
              <template v-for="exam in grade.exams">
                <v-list-tile @click="$emit('update-content', exam.title, exam.type)">
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
export default {
  name: 'ExamCollectByGrade',
  data: () => ({
    grades: [
      {
        icon: 'looks_one',
        text: '一年级',
        exams: [
          { icon: 'folder', title: '100以内加法', type: 'genAddUnder100' },
          { icon: 'folder', title: '100以内减法', type: 'genSubUnder100' },
        ],
      },
      {
        icon: 'looks_two',
        text: '二年级',
        exams: [
          { icon: 'folder', title: '一位数除法带余数', type: 'genDivisionWithRemain' },
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
