<template>
  <div class="divisionWithRemain">
    <h1>{{ title }}</h1>
    <ul id="example-1">
      <li v-for="i in exercises" :key="i.id">
        {{ i.division }} &divide; {{ i.divider}} = &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </li>
    </ul>
    <button v-on:click="refresh">更新题库</button>
    <button v-on:click="print">打印</button>
  </div>
</template>

<script>

function randomInRange(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

function generateExercise() {
  // Get a dividend in range [20, 90]
  const mult1 = randomInRange(2, 9);
  const mult2 = randomInRange(2, 9);
  const remain = randomInRange(2, mult2);
  const total = (mult1 * mult2) + remain;

  return {
    division: total,
    divider: mult1,
  };
}

export default {
  name: 'DivisionWithRemain',
  mounted: function foo() {
    this.refresh();
  },
  data() {
    return {
      title: '一位数除法带余数',
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
