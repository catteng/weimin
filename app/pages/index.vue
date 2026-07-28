<template>
  <div class="l-block">
    <div class="l-block__item -kv">
      <Wave />
      <div class="c-kv">
        <div class="c-kv__wrap">
          <div class="c-kv__text">
            <div class="o-textLoader" :class="{ 'is-showText': !isLoading }">
              <div class="o-textLoader__loading"></div>
              <div class="o-textLoader__text">{{ currentText }}</div>
            </div>
          </div>
          <div class="c-kv__title">蔚然成風，初心不泯。<br>在繁盛之中，守住最純粹的初衷</div>
          <div class="c-kv__action">
            <a href="#" class="o-btn" target="_self">了解更多</a>
            <a href="#" class="o-btn -secondary" target="_self">聯絡蔚泯</a>
          </div>
          <div class="c-kv__slogon">
            <span>── 從視覺的起點到數據的終點，</span>
            <span>用策略重塑品牌真正的影響力</span>
          </div>
        </div>
      </div>
    </div>

    <div class="l-block__item -a">SECTION 1</div>
    <div class="l-block__item -b">SECTION 2</div>
    <div class="l-block__item -a">SECTION 3</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const waveTexts = [
  'KOL/KOC短影音',
  '全平台廣告代操(Google・FB・IG)',
  '一頁式品牌形象網站',
  'SEO・GEO流量優化',
  'Google與AI搜尋策略',
  'Google商家關鍵字',
  'EDM視覺行銷與社群經營',
  '品牌識別Logo・名片・平面設計'
]

const currentText = ref('');
const isLoading = ref(true);

/** 暫停指定毫秒數 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 播放文字動畫
 */
const playAnimation = async () => {
  let currentIndex = 0;
  
  while (true) {
    const text = waveTexts[currentIndex];
    if (!text) break;

    isLoading.value = true;
    currentText.value = '';
    await sleep(1600);
    
    isLoading.value = false;
    currentText.value = text;
    await sleep(3000);
    
    isLoading.value = true;
    await sleep(400); 

    currentText.value = '';
    currentIndex = (currentIndex + 1) % waveTexts.length;
  }
}

onMounted(() => {
  playAnimation();
});
</script>