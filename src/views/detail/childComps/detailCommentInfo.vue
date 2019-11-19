<template>
    <div>
        <p class="padding10">{{detailInfo.desc}}</p>
        <div v-for="item in detailInfo.detailImage">
            <h4 class="padding20">{{item.key}}</h4>
            <div v-for="list in item.list" class="img-box">
                <img :src="list" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'detailCommentInfo',
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>
.img-box{
    width: 100%;
}
.img-box img{
    display: block;
    border: none;
    width: 100%;
}
</style>