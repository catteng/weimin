<template>
    <div class="l-block -line">
        <!-- banner -->
        <div class="l-block__item">
            <div class="c-banner -sm">
                <div class="c-banner__title">About Us</div>
                <div class="c-banner__subtitle">關於蔚泯</div>
                <div class="c-banner__content">
                    <span class="c-banner__item">「品牌如草木般蔚然繁盛」</span>
                    <span class="c-banner__item">── 在消費者心中留下永不磨滅的價值。</span>
                    <span class="c-banner__sign"></span>
                </div>
                <div class="c-banner__star">
                    <div class="o-star"></div>
                </div>
            </div>
        </div>

        <div class="l-block__item -blur">
            <div class="l-block__wrap">
                <div class="c-why">
                    <div class="c-why__head" data-aos="fade-up">
                        <div class="c-why__title">
                            <div class="c-title">為什麼選擇蔚泯？</div>
                        </div>
                        <div class="c-why__subtitle">市場上不缺「高動態、快節奏」的廣告代理商。 <br>但許多品牌與中小企業在成長路上，往往卡在某個特定的關卡：</div>
                    </div>
                    <ul class="c-why__content">
                        <li v-for="(item, index) in whyList" :key="index" class="c-why__item" data-aos="fade-up" :data-aos-delay="index * 10 + 200">
                            <div class="c-why__left">
                                <div class="c-why__num">0{{ index + 1 }}</div>{{ item.title }}
                            </div>
                            <div class="c-why__right">{{ item.content }}</div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- quote -->
            <div class="o-quote" data-aos="zoom-in">
                <div class="o-quote__title">每一分預算，都精準轉化為看得到的品牌價值與實質成效。 </div>
                <div class="o-quote__content">打破傳統行銷公司生硬的框架，把主導權還給客戶。 既有的團隊缺什麼，就精準補上什麼。
                    <br>蔚泯<span>拒絕流水線</span>，採用最靈活的專案制度、最細膩的專業態度，<span>專注長期的品牌佈局</span>。
                </div>
            </div>
        </div>

        <div class="l-block__item -p0">
            <!-- about -->
            <div class="l-about -pc">
                <div class="l-about__wrap">
                    <div class="l-about__head" data-aos="fade-right">
                        <div class="c-title">{{ aboutTitles[activeAboutIndex] }}</div>
                    </div>
                    <div class="l-about__content">
                        <div class="c-carousel -about swiper" data-swiper="about">
                            <div class="c-carousel__wrap swiper-wrapper">
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="o-brandCard">
                                        <div class="o-brandCard__num">01</div>
                                        <div class="o-brandCard__content">
                                            <div>一間兼具「美學靈魂」與「數據實戰」的品牌行銷團隊。在這個數位雜訊過載的時代：</div>
                                            <div class="o-brandCard__highlight">沒有策略的視覺，只是美麗的泡沫； 沒有質感的流量，只是短暫的煙火。</div>
                                            <div>因此，蔚泯將數位行銷、品牌整合與視覺策略融為一體。不論是高辨識度的品牌識別設計，還是精準的 Ads 廣告投放、SEO/GEO 佈局與文案策略，我們陪你從視覺前端走到數位後端。</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="o-brandCard">
                                        <div class="o-brandCard__num">02</div>
                                        <div class="o-brandCard__content">
                                            <span>— <b>「蔚」藍無界</b></span>
                                            澄澈、無雲、望不到盡頭，如大海般的深度如天空般的格局包容種產業品牌「蔚」 代表創意的繁茂與無限可能。
                                            <br><br>
                                            <span>— <b>初衷不「泯」</b></span>
                                            即便視野再廣闊、事業再壯大，那份澄澈的藍（初心）始終清晰可見，不會消失「泯」 代表消融市場雜訊，只留下最純粹的增長。 Ads 廣告投放、SEO/GEO 佈局與文案策略，我們陪你從視覺前端走到數位後端。
                                        </div>
                                    </div>
                                </div>
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="o-brandCard">
                                        <div class="o-brandCard__num">03</div>
                                        <div class="o-brandCard__content">
                                            品牌如草木般蔚然繁盛，在消費者心中留下永不磨滅的價值
                                            <br>「在繁盛之中，守住最純粹的初衷。」
                                        </div>
                                    </div>
                                </div>
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="o-brandCard">
                                        <div class="o-brandCard__num">01</div>
                                        <div class="o-brandCard__content">
                                            <div>一間兼具「美學靈魂」與「數據實戰」的品牌行銷團隊。在這個數位雜訊過載的時代：</div>
                                            <div class="o-brandCard__highlight">沒有策略的視覺，只是美麗的泡沫； 沒有質感的流量，只是短暫的煙火。</div>
                                            <div>因此，蔚泯將數位行銷、品牌整合與視覺策略融為一體。不論是高辨識度的品牌識別設計，還是精準的 Ads 廣告投放、SEO/GEO 佈局與文案策略，我們陪你從視覺前端走到數位後端。</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="o-brandCard">
                                        <div class="o-brandCard__num">02</div>
                                        <div class="o-brandCard__content">
                                            <span>— <b>「蔚」藍無界</b></span>
                                            澄澈、無雲、望不到盡頭，如大海般的深度如天空般的格局包容種產業品牌「蔚」 代表創意的繁茂與無限可能。
                                            <br><br>
                                            <span>— <b>初衷不「泯」</b></span>
                                            即便視野再廣闊、事業再壯大，那份澄澈的藍（初心）始終清晰可見，不會消失「泯」 代表消融市場雜訊，只留下最純粹的增長。 Ads 廣告投放、SEO/GEO 佈局與文案策略，我們陪你從視覺前端走到數位後端。
                                        </div>
                                    </div>
                                </div>
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="o-brandCard">
                                        <div class="o-brandCard__num">03</div>
                                        <div class="o-brandCard__content">
                                            品牌如草木般蔚然繁盛，在消費者心中留下永不磨滅的價值
                                            <br>「在繁盛之中，守住最純粹的初衷。」
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="l-about -mb">
                <div class="c-title">品牌背景</div>
                <div class="c-feature">
                    <div class="c-feature__item" data-aos="fade-up" data-aos-delay="300">
                        <div class="c-feature__title">蔚泯 WEIMIN</div>
                        <div class="c-feature__content">
                            <div class="o-brandCard__content">
                                <div>一間兼具「美學靈魂」與「數據實戰」的品牌行銷團隊。在這個數位雜訊過載的時代：</div>
                                <div class="o-brandCard__highlight">沒有策略的視覺，只是美麗的泡沫； 沒有質感的流量，只是短暫的煙火。</div>
                                <div>因此，蔚泯將數位行銷、品牌整合與視覺策略融為一體。不論是高辨識度的品牌識別設計，還是精準的 Ads 廣告投放、SEO/GEO 佈局與文案策略，我們陪你從視覺前端走到數位後端。</div>
                            </div>
                        </div>
                    </div>
                    <div class="c-feature__item" data-aos="fade-up" data-aos-delay="300">
                        <div class="c-feature__title">初始之名</div>
                        <div class="c-feature__content">
                            <div class="o-brandCard__content">
                                <span>— <b>「蔚」藍無界</b></span>
                                澄澈、無雲、望不到盡頭，如大海般的深度如天空般的格局包容種產業品牌「蔚」 代表創意的繁茂與無限可能。
                                <br><br>
                                <span>— <b>初衷不「泯」</b></span>
                                即便視野再廣闊、事業再壯大，那份澄澈的藍（初心）始終清晰可見，不會消失「泯」 代表消融市場雜訊，只留下最純粹的增長。 Ads 廣告投放、SEO/GEO 佈局與文案策略，我們陪你從視覺前端走到數位後端。
                            </div>
                        </div>
                    </div>
                    <div class="c-feature__item" data-aos="fade-up" data-aos-delay="300">
                        <div class="c-feature__title">品牌理念與精神</div>
                        <div class="c-feature__content">
                            <div class="o-brandCard__content">
                                品牌如草木般蔚然繁盛，在消費者心中留下永不磨滅的價值
                                <br>「在繁盛之中，守住最純粹的初衷。」
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="l-block__item -blur">
            <!-- quote -->
            <div class="o-quote" data-aos="zoom-in">
                <div class="o-quote__title">我們不只是執行的代工者，更是與企業並肩佈局的策略夥伴。
                    <br><span>讓你的品牌不僅被看見，更被渴望。 </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const whyList = [
    {
        title: '指標卡關',
        content: '一頁轉換率不高、無法帶來實質變現的形象網站。',
    },
    {
        title: '溝通斷點',
        content: '一段缺乏靈魂、難以打動人的社群文案。',
    },
    {
        title: '流量瓶頸',
        content: '搜尋排名遲遲無法突破、找不到方向，缺乏有效的轉換。',
    },
    {
        title: '視覺斷層',
        content: '隨著品牌發展，既有的視覺識別逐漸無法承載企業的野心。',
    },
    {
        title: '策略孤立',
        content: '設計、廣告與文案分屬不同窗口，導致品牌力在溝通中不斷內耗。',
    },
    {
        title: '推廣沉寂',
        content: '缺乏 KOL/KOC 的體驗分享 ，導致品牌始終圈在同溫層內無法破圈。'
    }
];

const aboutTitles = ['蔚泯 WEIMIN', '初始之名', '品牌理念與精神'];
const activeAboutIndex = ref(0);

onMounted(() => {
    customSwiper();
});

const swiper = ref<Swiper | null>(null);
const customSwiper = () => {
    swiper.value = new Swiper('[data-swiper=about]', {
        modules: [Autoplay],
        direction: 'vertical',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChange(instance) {
                activeAboutIndex.value = instance.realIndex % aboutTitles.length;
            },
        },
    });
};
</script>