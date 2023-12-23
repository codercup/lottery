<template>
  <view class="lottery flex items-center">
    <view class="outer-container">
      <view class="inner-container">
        <view
          class="prize-box"
          v-for="(item, idx) in prizeList"
          :key="idx"
          :style="{
            transform: `rotate(${(360 / prizeList.length) * idx}deg)
            skewY(${360 / prizeList.length - 90}deg)`,
          }"
        >
          <view class="prize">
            <view class="prize-name">{{ item.name }}</view>
            <view class="prize-img-wrap">
              <image class="prize-img" :src="item.img" mode="heightFix" />
            </view>
          </view>
        </view>
      </view>
      <view class="draw-btn">
        <image
          class="draw-btn-img"
          src="https://cip-shopping-page-0eysug01066a9e-1302818703.tcloudbaseapp.com/lottery-img/%E8%BD%AC%E7%9B%98-btn.png"
          mode="scaleToFill"
        />
      </view>
    </view>
  </view>
</template>

<route lang="json">
{
  "layout": "home",
  "style": {
    "navigationBarTitleText": "抽奖转盘"
  }
}
</route>
<script setup lang="ts" name="Lottery">
// 经过我的检测，分成6分的页面效果是最好的
const prizeList = [
  {
    name: '奖品12345',
    img: 'https://comp-prd-cos-1254375538.cos.ap-beijing.myqcloud.com/baby-h5-images/comp-nodeserver-midway/activity/lucky-turntable/award0.png',
  },
  {
    name: '奖品1好不好',
    img: 'https://comp-prd-cos-1254375538.cos.ap-beijing.myqcloud.com/baby-h5-images/comp-nodeserver-midway/activity/lucky-turntable/award1.png',
  },
  {
    name: '奖品1好',
    img: 'https://comp-prd-cos-1254375538.cos.ap-beijing.myqcloud.com/baby-h5-images/comp-nodeserver-midway/activity/lucky-turntable/award2.png',
  },
  {
    name: '奖品12345',
    img: 'https://comp-prd-cos-1254375538.cos.ap-beijing.myqcloud.com/baby-h5-images/comp-nodeserver-midway/activity/lucky-turntable/award0.png',
  },
  {
    name: '奖品1好不好',
    img: 'https://comp-prd-cos-1254375538.cos.ap-beijing.myqcloud.com/baby-h5-images/comp-nodeserver-midway/activity/lucky-turntable/award1.png',
  },
  {
    name: '奖品1好',
    img: 'https://comp-prd-cos-1254375538.cos.ap-beijing.myqcloud.com/baby-h5-images/comp-nodeserver-midway/activity/lucky-turntable/award2.png',
  },
]
</script>

<style scoped lang="scss">
$outer-size: 750rpx;
$inner-size: 560rpx;
$half-size: 280rpx;

.outer-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $outer-size;
  height: $outer-size;
  background-image: url('https://cip-shopping-page-0eysug01066a9e-1302818703.tcloudbaseapp.com/lottery-img/%E8%BD%AC%E7%9B%98-%E5%A4%96%E7%9B%98.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

.inner-container {
  position: absolute;
  width: $inner-size;
  height: $inner-size;
  overflow: hidden;
  border-radius: 50%;
}

.prize-box {
  position: absolute;
  top: 0;
  left: 50%;
  width: $half-size;
  height: $half-size;
  font-size: 12px;
  background-color: bisque;
  border: 1px solid #ff7447;

  /* 以正方形左下角为中心旋转，0% 100%即左下角的坐标 */
  transform-origin: 0% 100%;

  &:nth-child(2n) {
    background-color: #e9fffc;
  }

  &:nth-child(2n + 1) {
    background-color: #fff9ed;
  }
}

.prize {
  position: absolute;
  bottom: 0;
  left: 0;
  display: inline-block;
  font-size: 12px;
  transform: rotate(50deg);
  transform: translate(-50%, 50%) skewY(30deg);
  transform-origin: center;

  .prize-name {
    transform: translateX(calc(120 * 0.5px - 0em)) translateY(calc(-120 * 0.886px + 2em))
      rotate(30deg);
  }

  .prize-img-wrap {
    display: block;
    width: 40px;
    height: 40px;
    overflow: hidden;
    transform: translateX(calc(100 * 0.5px - 1em)) translateY(calc(-100 * 0.886px + 1em))
      rotate(30deg);
  }

  .prize-img {
    width: 100%;
    height: 100%;
  }
}

.draw-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 120px;
  font-size: 30px;
  color: white;
  text-align: center;
  cursor: pointer;
  transform: translate(-50%, -50%);

  .draw-btn-img {
    width: 100%;
    height: 100%;
  }
}
</style>
