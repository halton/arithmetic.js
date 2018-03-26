<template>
  <div>
    <h1>{{ title }}</h1>
    <v-content>
      <v-container fluid fill-height >
        <v-layout justify-left align-left>
           <ul>
            <li v-for="i in exercises" :key="i.id">
              <font size="5">{{ i }}</font>
            </li>
          </ul>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'ExamContent',
  props: {
    title: {
      type: String,
      required: true,
      default: () => '',
    },
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
  .md-content {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: left;
    align-items: left;
  }
</style>
