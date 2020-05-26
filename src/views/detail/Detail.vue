
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detaiNav" />
    <scroll class="content" ref="scroll" :probe-type="3" @contentOffset="contentOffset">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
      <goods-list :cgoods="cgoods" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-show="isBackTopShow"></back-top>
    <toast message="hahhahah" />
  </div>
</template>

<script>
import DetailNavBar from "./childComs/DetailNavBar";
import DetailSwiper from "./childComs/DetailSwiper";
import DetailBaseInfo from "./childComs/DetailBaseInfo";
import DetailShopInfo from "./childComs/DetailShopInfo";
import DetailGoodsInfo from "./childComs/DetailGoodsInfo";
import DetailParamInfo from "./childComs/DetailParamInfo";
import DetailCommentInfo from "./childComs/DetailCommentInfo";
import DetailBottomBar from "./childComs/DetailBottomBar";
import Scroll from "components/content/scroll/Scroll";
import GoodsList from "components/content/good/GoodsList";
import Toast from "components/common/toast/Toast";
import {
  getDetailMultidata,
  getRecommends,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
import { debouce } from "@/common/utils";
import { backTopMixin, itemListernerMixin } from "@/common/mixin";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      getDetailOffsetTop: [],
      detailOffsetTop: [],
      currentIndex: 0,
      cgoods: []
    };
  },
  mixins: [itemListernerMixin, backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    getDetailMultidata(this.iid).then(res => {
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.shopInfo.services,
        data.columns
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommends().then(res => {
      this.cgoods = res.data.list;
    });
    this.getDetailOffsetTop = debouce(() => {
      this.detailOffsetTop = [];
      this.detailOffsetTop.push(0);
      this.detailOffsetTop.push(this.$refs.paramInfo.$el.offsetTop);
      this.detailOffsetTop.push(this.$refs.commentInfo.$el.offsetTop);
      this.detailOffsetTop.push(this.$refs.recommends.$el.offsetTop);
      this.detailOffsetTop.push(Number.MAX_VALUE);
    });
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast
  },

  methods: {
    detailImageLoad() {
      this.newRefresh();
      this.getDetailOffsetTop();
    },
    contentOffset(position) {
      let positionY = -position.y;
      this.isBackTopShow = positionY > 100;
      let length = this.detailOffsetTop.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.detailOffsetTop[i] &&
          positionY < this.detailOffsetTop[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detaiNav.currentIndex = this.currentIndex;
        }
      }
    },
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.detailOffsetTop[index], 40);
    },
    addToCart() {
      const shop = {};
      shop.iid = this.iid;
      shop.images = this.topImages[0];
      shop.title = this.goods.title;
      shop.desc = this.goods.desc;
      shop.realPrice = this.goods.realPrice;
      shop.discountDesc = this.goods.discountDesc;
      this.$store.dispatch("addToCart", shop).then(res => {
        // this.$refs.detailShoppingCart.isShowShoppingCart = false;
        console.log(res);
        
        this.$toast.shows(res);
      });
    
    }
  }
};
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  background-color: #fff;
  z-index: 666;
}
.detail .content {
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 62px;
  overflow: hidden;
}
</style>