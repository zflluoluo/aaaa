import { request } from "./request";

export function getHomeMultiData() {
  return request({
    //url:"api/v1/home/data?type=sell&page=1"
    url: "home/multidata"
  });
}
export function getHomeGoods(type, page) {
  return request({
    url: "home/data",
    params: {
      type,
      page
    }
  });
}
