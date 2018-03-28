<template>
 <v-layout >
    <v-spacer></v-spacer>
    <!-- <v-flex sm3> -->
    <h1>{{ title }}</h1>
    <!-- </v-flex> -->
    <v-spacer></v-spacer>
    <NumberInputSpinner
      :min=0
      :max=1000
      :step=10
      :integerOnly=true
      :value=100
      v-on:input="onCountChanged"
    />
    <v-btn color="info" @click="$emit('update-content')">更新题库</v-btn>
    <v-btn color="info" @click="onPrint">打印</v-btn>
  </v-layout>
</template>

<script>
import NumberInputSpinner from 'vue-number-input-spinner';

export default {
  name: 'ExamContentToolbar',
  components: {
    NumberInputSpinner,
  },
  data: () => ({
    dropdown_num_of_exercises: [20, 50, 100],
  }),
  props: {
    title: '',
    count: 0,
  },
  methods: {
    onCountChanged: function onCountChanged(newVal, oldVal) {
      this.$emit('update-content', newVal);
    },
    onPrint: function onPrint() {
      window.print();
    },
  },
};

</script>
