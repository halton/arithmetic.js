<template>
  <div class="Addition">
    <navigation></navigation>
    <h1>{{ title }}</h1>
    <md-content>
    <ul>
      <li v-for="i in exercises" :key="i.id">
        {{ i.addend1 }} + {{ i.addend2}} = &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </li>
    </ul>
    </md-content>
    <md-button class="md-raised md-primary" v-on:click="refresh">更新题库</md-button>
    <md-button class="md-raised md-primary" v-on:click="print">打印</md-button>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import { randomInRange } from '../../utils';

function generateExercise() {
  const addend1 = randomInRange(2, 99);
  const addend2 = randomInRange(2, 99 - addend1);

  return {
    addend1,
    addend2,
  };
}

export default {
  name: 'Addition',
  components: {
    navigation: Navigation,
  },
  mounted: function foo() {
    this.refresh();
  },
  data() {
    return {
      title: '100以内加法',
      exercises: [
      ],
    };
  },
  methods: {
    refresh: function refresh() {
      this.exercises.length = 0;
      let count = 0;
      while (count < 100) {
        this.exercises.push(generateExercise());
        count += 1;
      }
    },
    print: function print() {
      window.print();
    },
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
