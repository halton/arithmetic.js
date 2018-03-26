<template>
  <div>
    <h1>{{ title }}</h1>
    <v-content>
      <v-container fluid fill-height >
        <v-layout justify-center align-center>
           <ul>
            <li v-for="i in exercises" :key="i.id">
              {{ i }}
            </li>
          </ul>
        </v-layout>
      </v-container>
    </v-content>
    <v-button color="info" @click="refresh">更新题库</v-button>
    <v-button color="info" @click="print">打印</v-button>
  </div>
</template>

<script>

export default {
  name: 'ExamContent',
  data() {
    return {
      title: '一位数除法带余数',
      exercises: [
        'ssss', '2222', '3333'
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
    font-color: white;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .md-content {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
