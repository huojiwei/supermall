import {request} from './request'
export function getDetailData(iid) {
       return  request({
           url: "/detail",
           params: {
             iid
           }
         });
       }

// import { request } from "./request";
export function getDetailMultidata(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
export function getRecommends() {
  return request({
    url: "/recommend"
  });
}
export class Goods {
  constructor(itemInfo, services, columns) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.realPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.shopInfo = services;
    this.columns = columns;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

