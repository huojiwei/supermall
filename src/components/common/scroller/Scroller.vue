<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  data() {
    return {
      scroller: {
        type: Object,
        default() {
          return {};
        }
      }
    };
  },
  //接收父组件来的值
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpload:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    this.scroller = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click:true,
      pullUpload: this.pullUpload

    });

    this.scroller.on("scroll", postion => {
      this.$emit("scroll", postion);
    });
    this.scroller.on("pullingUp",() => {
      this.$emit("pullingUp")
    })
  },
  methods: {
    //返回顶部
    scrollTo(x, y, time = 300) {
      this.scroller && this.scroller.scrollTo(x, y, time);
      // console.log('x==='+x+'y==='+y);
      
    },
    //上拉加载
    finishPullUp(){
      this.scroller && this.scroller.finishPullUp()
    },
    //重新计算高度
    refresh(){
      this.scroller && this.scroller.refresh()
    },
    getScrollY(){
      return this.scroller ? this.scroller.y : 0
    }
  }
};
</script>

<style  scoped>
</style>
