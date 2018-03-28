<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex text-xs-center>
        <v-container fluid>
          <v-layout row wrap>
          <!-- column number = 12 / {number_xs_blow} -->
            <v-flex xs3 v-for="i in exercises" :key="i.title">
              <v-card flat tile>
                <font size="4">{{ i }}</font>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'ExamContent',
  props: {
    exercises: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
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
    padding: 5;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
