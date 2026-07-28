<template>
    <div class="l-header">
        <div class="l-header__wrap">
            <img class="l-header__logo" src="/images/logo/logo-wt.svg" alt="蔚泯 WEIMIN｜廣告・KOL短影音・SEO/GEO・視覺策略・品牌整合">
            <div class="l-header__menu" :class="{ 'is-active': isMenuOpen }">
                <ul class="c-headerMenu" :class="{ 'is-active': isMenuOpen }">
                    <li class="c-headerMenu__item">
                        <a href="#" class="c-headerMenu__link">服務內容</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="#" class="c-headerMenu__link">合作範例</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="#" class="c-headerMenu__link">方案項目</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="#" class="c-headerMenu__link">常見問答</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="#" class="c-headerMenu__link">關於蔚泯</a>
                    </li>
                </ul>
            </div>
            <div class="l-header__action">
                <a href="#" class="o-starBtn">免費諮詢</a>
            </div>
            <button class="l-header__toggle" :class="{ 'is-active': isMenuOpen }" @click="menuToggle()"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function menuToggle() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>