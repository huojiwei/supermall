<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        class="home-tab-control"
        :ctitles="['流行', '新款', '精选']"
        @tabClick="pTabClick"
        ref="tabControl1"
        v-show="isTapFixed"
      />
    <scroller
      class="home-scroller"
      ref="scroller"
      :probe-type="3"
      @scroll="getPostion"
      @pullingUp="loadMore"
      :pullUpload="true"
    >
      <home-swiper 
       :cbanners="banners"
       @swiperImageLoad="swiperImageLoad" />
      <home-recommend :cproducts="recommends" />
      <home-feature-view />
      <tab-control
        :ctitles="['流行', '新款', '精选']"
        @tabClick="pTabClick"
        ref="tabControl2"
      />
      <goods-list :cgoods="showGoods" />
    </scroller>
    <back-top
     @click.native="backTopClick"
      v-show="isShowBackTop" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData, getGoodsData } from "network/home.js";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/good/GoodsList";
import Scroller from "components/common/scroller/Scroller";
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroller,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      taboffsetTop: 0,
      isTapFixed: false,
      saveY: 0
    };
  },
  created() {
    this.getHomeData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroller.refresh, 200);
    this.$bus.$on("imageload", () => {
      //  this.$refs.scroller.refresh();
      refresh();
    });
    console.log(this.showGoods);
    
  },
  methods: {
    getHomeData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res);
      });
    },
    getHomeGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = res.data.page;

        this.$refs.scroller.finishPullUp();
      });
    },
    backTopClick() {
      // 通过$refs拿到组件中的对象
      this.$refs.scroller.scrollTo(0, 0, 500);
      // console.log(this.$refs.scroller.scrollTo(0, 0, 500));
      
    },
    pTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    getPostion(postion) {
      //判断是否显示backtop
      this.isShowBackTop = -postion.y > 1000;
      //决定是否吸顶
      this.isTapFixed = (-postion.y) > this.taboffsetTop
    },
    loadMore() {
      this.getHomeGoodsData(this.currentType);
    },
    //事件监听相关方法(防抖)
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    swiperImageLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.$refs.tabControl2.$el.offsetTop);
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  destroyed() {
    console.log('home');
    
  },
  activated() {
    this.$refs.scroller.scrollTo(0,this.saveY,0)
    this.$refs.scroller.refresh()
    
    // console.log('activated'+"-----|"+ this.saveY);
    
  },
  deactivated() {
    this.saveY = this.$refs.scroller.getScrollY()
    // console.log('deactivated'+"-----|"+ this.saveY);

  },
};
</script>
<style  scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-scroller {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.home-tab-control {
  /*两个要混合使用*/
  position: sticky;
  top: 43px; /*顶部navbar的高度*/
  z-index: 9;
}
.fixed{
  position: fixed;
  left: 0;
  right: 0;
  top:44px,
}
</style>