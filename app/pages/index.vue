<template>
  <div class="l-block">
    <div class="l-block__item -kv">
      <Wave />
      <div class="c-kv">
        <div class="c-kv__text" data-aos="fade-in" data-aos-delay="600">
          <div class="o-waveText">
            <div v-for="(text, index) in waveTexts" :key="index" class="o-waveText__item">
              <span v-for="(item, charIndex) in text" :key="charIndex">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
        <div class="c-kv__title" data-aos="fade-up" data-aos-delay="400">蔚然成風，初心不泯。<br>在繁盛之中，守住最純粹的初衷</div>
        <div class="c-kv__slogon" data-aos="fade-up" data-aos-delay="800">
          <span>── 從視覺的起點到數據的終點，</span>
          <span>用策略重塑品牌真正的影響力</span>
        </div>
      </div>
    </div>

    <div class="l-block__item -a">SECTION 1</div>
    <div class="l-block__item -b">SECTION 2</div>
    <div class="l-block__item -a">SECTION 3</div>
  </div>
</template>

<script setup lang="ts">
const waveTexts = [
  'GOOGLE曝光',
  '短音影行銷',
  'GOOGLE商家關鍵字'
]
</script>