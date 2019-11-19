<template>
  <div class="back-to">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "backTo"
};
</script>
<style scoped>
.back-to {
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 10;
}
.back-to img {
  width: 42px;
  height: 42px;
}
</style>
