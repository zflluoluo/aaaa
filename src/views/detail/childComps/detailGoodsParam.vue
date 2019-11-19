<template>
    <div v-if="Object.keys(goodsParam).length !== 0" class="padding10 goods-params">
        <p>尺码对照表</p>
        <table  v-for="(list,index) in goodsParam.sizes" :key="index" class="table1">
            <tr v-for="(tr,indey) in list" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <p>商品参数</p>
        <table  class="table2">
            <tr v-for="item in goodsParam.infos" :key="item.key">
                <td>{{item.key}}</td>
                <td>{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'detailGoodsParam',
    props:{
        goodsParam:{
            type:Object,
            default(){
                return {}
            }
        }
       
    }
}
</script>
<style scoped>
.goods-params p{
    font-size: 16px; 
    line-height: 40px;
    font-weight: bold;
}
.table1{
    width: 100%;
    border-collapse:collapse;
    margin-bottom:20px;   
    font-size: 14px;
}
.table1 td{
    padding: 8px;
    text-align: center;
    border: 1px solid #e5e5e5;
}
.table2{
    width: 100%;
    border-collapse:collapse;
    font-size: 14px;
    border-top:1px solid #e5e5e5;
}
.table2 tr{
    border-bottom: 1px solid #e5e5e5;
}
.table2 tr td{
    padding: 8px 10px;
}
.table2 tr td:first-child{
    width: 80px;
}
.table2 tr td:last-child{
    color: var(--color-tint);
}
</style>