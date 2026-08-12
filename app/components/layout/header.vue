<template>
    <div class="l-header">
        <div class="l-header__wrap">
            <a class="l-header__logo" href="/" target="_self">
                <img src="/images/logo/logo-wt.svg" alt="蔚泯 WEIMIN｜廣告・KOL短影音・SEO/GEO・視覺策略・品牌整合">
            </a>
            <div class="l-header__menu" :class="{ 'is-active': isMenuOpen }">
                <ul class="c-headerMenu" :class="{ 'is-active': isMenuOpen }">
                    <li class="c-headerMenu__item">
                        <a href="/service" class="c-headerMenu__link">服務內容</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="/cooperation" class="c-headerMenu__link">合作範例</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="/price" class="c-headerMenu__link">方案項目</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="/faq" class="c-headerMenu__link">常見問答</a>
                    </li>
                    <li class="c-headerMenu__item">
                        <a href="/about" class="c-headerMenu__link">關於蔚泯</a>
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
import { ref, watch } from 'vue';

const isMenuOpen = ref(false);

function menuToggle() {
    isMenuOpen.value = !isMenuOpen.value;
}

watch(isMenuOpen, (newVal) => {
    if (import.meta.client) {
        if (newVal) {
            document.body.classList.add('is-menuOpen');
        } else {
            document.body.classList.remove('is-menuOpen');
        }
    }
});
</script>