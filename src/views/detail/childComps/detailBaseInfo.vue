<template>
    <div class="goods-data-box">
        <div class="info-title">{{goodsData.title}}</div>
        <div class="info-price">
            <span>{{goodsData.newPrice}}</span>
            <span>{{goodsData.OldPrice}}</span>
            <span v-if="goodsData.discount">{{goodsData.discount}}</span>
        </div>
        测试
        <div class="info-colunms">
            <div  v-for='item in goodsData.colunms' :key="item">
                {{item}}
            </div>
        </div>
        <dl class="services">
            <dd v-for='list in goodsData.services' :key="list">
                <img v-if="list.icon" :src="list.icon" alt="">
                <span>{{list.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"detailBaseInfo",
    props:{
        goodsData:{
            type:Object,
            default:{},
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.goods-data-box{
    padding: 10px;
    border-bottom:6px solid #f5f5f5;
}
.info-title{
    font-size: 15px;
    font-weight: bold;
    color: #333;
}
.info-price{
    display: flex;
    margin: 10px 0;
}
.info-price span:nth-child(1){
    color: var(--color-high-text);
    font-size: 20px;
}
.info-price span:nth-child(2){
    color:#999;
    font-size: 12px;
    text-decoration: line-through;
    margin: 10px 0 0 10px;
}
.info-price span:nth-child(3){
    color:#fff;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 10px;
    display: flex;
    height: 16px;
    align-items: center;
    background-color: var(--color-high-text);
    margin-left: 10px;
}
.info-colunms{
    display: flex;
    color: #666;
    padding: 10px 0;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px;
    font-size: 14px
}
.services{
    display: flex;
    flex-wrap: wrap;
    color: #666;
    align-items: center;
    font-size: 12px;
    margin-right: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
}
.services dd{display: flex; align-items: center; margin-bottom: 10px;}
.services img{width: 14px;}
</style>