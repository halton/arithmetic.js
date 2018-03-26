<template>
  <div>
    <template v-for="grade in grades">
     <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header"><v-icon>{{ grade.icon }}</v-icon> {{ grade.text }}</div>
        <v-list dense v-if="grade.exams.length">
          <template v-for="exam in grade.exams">
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>{{ exam.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ exam.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ByGrade',
  data: () => ({
    grades: [
      {
        icon: 'looks_one',
        text: '一年级',
        expander: true,
        exams: [
          { icon: 'folder', text: '100以内加法' },
          { icon: 'folder', text: '100以内减法' },
        ],
      },
      {
        icon: 'looks_two',
        text: '二年级',
        exams: [
          { icon: 'folder', text: '一位数除法带余数' },
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
