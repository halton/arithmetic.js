<template>
  <div class="svg-container" :style="{width: settings.width + '%'}">
    <svg id="svgId" viewBox="0 0 960 600" preserveAspectRatio="xMinYMin meet">
      <transition-group tag="g" name="line">
        <path v-for="link in links" class="link" v-bind:key="link.id" v-bind:d="link.d" v-bind:style="link.style"></path>
      </transition-group>
      <transition-group tag="g" name="list">
        <g class="node" v-on:click="select(index, node)"  v-for="(node, index) in nodes" v-bind:key="node.id" v-bind:style="node.style">
            <circle v-bind:r="node.r" v-bind:style="{'fill': index == selected ? '#ff0000' : '#bfbfbf'}"></circle>
            <text v-bind:dx="node.textpos.x" v-bind:dy="node.textpos.y" v-bind:style="node.textStyle">{{ node.text }}</text>
        </g>
      </transition-group>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'ProblemEditor',
  data() {
    return {
      csv: null,
      settings: {
        strokeColor: "#29B5FF",
        width: 100,
      },
    };
  },
  mounted: function () {
    var that = this;
    d3.csv("tree-data.csv",
      function (error, data) {
        if (error) throw error;
        console.log(error);
        console.log(data);
        that.csv = data;
      }
    );
  },
  computed: {
    root: function () {
      if (this.csv) {
        var root = d3.stratify()
            .id(function (d) { return d.node; })
            .parentId(function (d) { return d.parent; })
            (this.csv);
        return this.tree(root);
      }
    },
    tree: function () {
      return d3
          .tree()
          .size([600, this.settings.width - 300]);
    },
    nodes: function () {
      var that = this;
      if (this.root) {
        return this.root.descendants().map(function (d) {
          let x = (200 + d.x) + "px";
          let y = parseInt(-1 * d.y + 30) + "px";
          return {
            id: d.id,
            r: 2.5,
            text: d.id,
            style: {
              transform: "translate(" + x + "," + y + ")"
            },
            textpos: {
              x: d.children ? -8 : 8,
              y: 3
            },
            textStyle: {
              textAnchor: d.children ? "end" : "start"
            }
          };
        });
      }
    },
    links: function () {
      let that = this;
      if (this.root) {
        return this.root.descendants().slice(1).map(function (d) {
          let x = d.x + 200, parent_x = d.parent.x + 200;
          let y = parseInt(-1 * d.y + 30);
          let parent_y = parseInt(-1 * d.parent.y + 30);
          return {
              id: d.id,
              d: "M" + x + "," + y + "L" + parent_x + "," + parent_y,
              style: {
                  stroke: that.settings.strokeColor
              }
          };
        });
      }
    },
  }
}
</script>
