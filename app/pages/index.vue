<template>
    <div class="l-block">
        <!-- kv -->
        <div class="l-block__item -kv">
            <Wave />
            <!-- kv -->
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
                        <a href="#more" class="o-btn" target="_self">了解更多</a>
                        <a href="#" class="o-btn -secondary" target="_self">聯絡蔚泯</a>
                    </div>
                    <div class="c-kv__slogon">
                        <span>── 從視覺的起點到數據的終點，</span>
                        <span>用策略重塑品牌真正的影響力</span>
                    </div>
                </div>
                <div class="c-kv__star">
                    <div class="o-star -sm"></div>
                    <div class="o-star -lg"></div>
                    <div class="o-star -sm"></div>
                    <div class="o-star -md"></div>
                    <div class="o-star"></div>
                </div>
            </div>

            <!-- partner -->
            <div class="c-logo swiper">
                <div class="c-logo__wrap swiper-wrapper">
                    <template v-for="loopIndex in 10" :key="loopIndex">
                        <template v-for="(item, index) in partner" :key="loopIndex">
                            <div class="c-logo__item swiper-slide">
                                <a v-if="item.url" class="c-logo__link" :href="item.url" target="_blank">
                                    <img class="c-logo__logo" :class="{ 'no-filter': !item.filter }" :src="item.logo" :alt="item.name">
                                </a>
                                <div v-else class="c-logo__link">
                                    <img class="c-logo__logo" :class="{ 'no-filter': !item.filter }" :src="item.logo" :alt="item.name">
                                </div>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>

        <!-- quote -->
        <div class="l-block__item" data-aos="zoom-in">
            <div class="o-quote">
                <div class="o-quote__title">我們深知，每一個好產品背後，都是創辦人無數個堅持的結晶。</div>
                <div class="o-quote__content">你負責把產品做到極致，守護你的初心；我們的任務，是當你隨調隨用的最強後盾，用文字賦予靈魂、用數據死磕轉換，幫你把這份執著與美好，轉化為看得到的實質結果。</div>
            </div>
        </div>

        <!-- feature -->
        <div class="l-block__item -feature" ref="featureEl">
            <div class="l-block__bg" :class="{ 'is-visible': isFeatureVisible }" :style="{ '--scroll-scale': scale, '--scroll-rotate': `${rotation}deg` }"></div>
            <div class="l-block__wrap">
                <div class="c-title">三大亮點</div>
                <div class="c-feature">
                    <div class="c-feature__item" data-aos="fade-up" data-aos-delay="300">
                        <div class="c-feature__title">從策略、視覺到下單，<br>打造不漏接的「高轉換閉環」</div>
                        <div class="c-feature__content">
                            <ul class="o-list -hash">
                                <li class="o-list__item">精準廣告、SEO 與 AI 搜尋卡位，搶佔市場黃金目光。</li>
                                <li class="o-list__item">高質感的視覺設計與直擊痛點的文案，搭配 KOL/KOC 口碑，瞬間建立品牌信任感。</li>
                                <li class="o-list__item">一頁式高轉換網站，把被設計與文案吸引進來的流量，直接變成營業額。</li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-feature__item" data-aos="fade-up" data-aos-delay="300">
                        <div class="c-feature__title">≤ 1 個員工的薪水<br>= 1 個跨領域行銷團隊</div>
                        <div class="c-feature__content">不用一個員工的薪水，就能同時擁有 " 策略、視覺、文案、投放 " <br>多位頂尖專家「行銷交給蔚泯幫您變現，技術留給您專精」</div>
                    </div>
                    <div class="c-feature__item" data-aos="fade-up" data-aos-delay="300">
                        <div class="c-feature__title">專屬群組，隨時對接整個行銷宇宙</div>
                        <div class="c-feature__content">從日常文案、靈感激盪，到營運諮詢與活動規劃，專屬窗口群組隨時在線，整個專家團隊都是您的隨身特助，讓溝通高效率、進度全透明。</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- service -->
        <div class="l-block__item -service" id="more">
            <div class="l-service">
                <video class="l-service__bg" src="/video/service.mp4" autoplay muted loop playsinline></video>
                <div class="l-service__wrap">
                    <div class="l-service__title">
                        <div class="c-title -v" data-aos="fade-up">服務項目</div>
                    </div>
                    <div class="l-service__content">
                        <ul class="c-serviceList" data-aos="fade-in">
                            <li class="c-serviceList__item" data-aos="fade-up" data-aos-delay="300">
                                <img class="c-serviceList__icon" src="/images/icon/google.svg" alt="Google 與 AI 搜尋策略">
                                <div class="c-serviceList__content">
                                    <div class="c-serviceList__title">Google 與 AI 搜尋策略</div>
                                    <div class="c-serviceList__text">#關鍵字廣告 #SEO/GEO優化 #商家地標</div>
                                </div>
                            </li>
                            <li class="c-serviceList__item" data-aos="fade-up" data-aos-delay="300">
                                <img class="c-serviceList__icon" src="/images/icon/palette.svg" alt="EDM視覺行銷與社群經營">
                                <div class="c-serviceList__content">
                                    <div class="c-serviceList__title">EDM視覺行銷與社群經營</div>
                                    <div class="c-serviceList__text">#社群經營 #EDM設計 #品牌內容行銷</div>
                                </div>
                            </li>
                            <li class="c-serviceList__item" data-aos="fade-up" data-aos-delay="300">
                                <img class="c-serviceList__icon" src="/images/icon/design.svg" alt="品牌識別Logo・名片與平面設計">
                                <div class="c-serviceList__content">
                                    <div class="c-serviceList__title">品牌識別Logo・名片與平面設計</div>
                                    <div class="c-serviceList__text">#Logo設計 #商標視覺VI #平面印刷設計</div>
                                </div>
                            </li>
                            <li class="c-serviceList__item" data-aos="fade-up" data-aos-delay="300">
                                <img class="c-serviceList__icon" src="/images/icon/flash.svg" alt="全平台廣告代操(Google/FB/IG)">
                                <div class="c-serviceList__content">
                                    <div class="c-serviceList__title">全平台廣告代操(Google/FB/IG)</div>
                                    <div class="c-serviceList__text">#數位廣告投放 #數據追蹤優化 #精準客群圈選</div>
                                </div>
                            </li>
                            <li class="c-serviceList__item" data-aos="fade-up" data-aos-delay="300">
                                <img class="c-serviceList__icon" src="/images/icon/camera.svg" alt="KOL/KOC短影音・口碑行銷">
                                <div class="c-serviceList__content">
                                    <div class="c-serviceList__title">KOL/KOC短影音・口碑行銷</div>
                                    <div class="c-serviceList__text">#網紅業配 #KOC短影音實測 #社群口碑擴散</div>
                                </div>
                            </li>
                            <li class="c-serviceList__item" data-aos="fade-up" data-aos-delay="300">
                                <img class="c-serviceList__icon" src="/images/icon/frame.svg" alt="一頁式品牌形象網站">
                                <div class="c-serviceList__content">
                                    <div class="c-serviceList__title">一頁式品牌形象網站</div>
                                    <div class="c-serviceList__text">#高效轉換落地頁 #RWD響應式網頁 #網站速度優化</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="l-service__action" data-aos="fade-up">
                        <a href="#" class="o-btn" target="_self">詳細內容</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- comment -->
        <div class="l-block__item">
            <div class="l-comment">
                <div class="l-comment__content" data-aos="fade-in">
                    <div class="c-carousel -comment swiper" data-swiper="comment">
                        <div class="c-carousel__wrap swiper-wrapper">
                            <div v-for="loopIndex in 40" :key="loopIndex" class="c-carousel__slide swiper-slide">
                                <div class="o-comment">
                                    <div class="o-comment__name">車行老闆李先生</div>
                                    <div class="o-comment__text">試過自己做社群，結果對做圖排版完全一竅不通，社群直接荒廢。幸好蔚泯小編非常專業，溝通過程也非常舒服。</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="l-comment__star">
                    <div class="o-star -lg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import { Pagination, Navigation } from 'swiper/modules';

/** kv 文字動畫 */
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

/** partner logos */
const partner = [
    {
        name: 'MN studio',
        logo: '/images/partner/mn-studio.png',
        url: '',
        filter: false
    },
    {
        name: '璞印坊',
        logo: '/images/partner/print.png',
        url: 'https://www.instagram.com/print.fun888/',
        filter: true
    },
    {
        name: '一刻印章',
        logo: '/images/partner/moment.png',
        url: 'https://www.instagram.com/moment.8188/',
        filter: true
    },
    {
        name: 'Lizly Design',
        logo: '/images/partner/lizly-design.png',
        url: 'https://www.lizlydesign.com/',
        filter: true
    },
    {
        name: '基億實業',
        logo: '/images/partner/ji-yi-industrial.png',
        url: '',
        filter: true
    },
    {
        name: 'Rico 婚紗工作室',
        logo: '/images/partner/rico.png',
        url: '',
        filter: false
    },
    {
        name: '囍字成章',
        logo: '/images/partner/seal.png',
        url: '',
        filter: true
    }
]

const currentText = ref('');
const isLoading = ref(true);

/** 暫停指定毫秒數 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const rotation = ref(0);
const scale = ref(1);
const featureEl = ref<HTMLElement | null>(null);
const isFeatureVisible = ref(false);
let lastScrollY = 0;
let ticking = false;

const handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const offsetTop = featureEl.value?.offsetTop ?? 0;
            const relativeScroll = Math.max(0, lastScrollY - offsetTop + 400);

            rotation.value = relativeScroll / 20;
            scale.value = 1 + (relativeScroll / 3000);

            ticking = false;
        });
        ticking = true;
    }
};

/** 
 * init
 */
let featureObserver: IntersectionObserver | null = null;
let featureTimeout: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
    playAnimation();
    logoSwiper();
    commentSwiper();
    window.addEventListener('scroll', handleScroll, { passive: true });

    featureObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry) {
                if (entry.isIntersecting) {
                    featureTimeout = setTimeout(() => {
                        isFeatureVisible.value = true;
                    }, 200);
                } else {
                    if (featureTimeout) clearTimeout(featureTimeout);
                    isFeatureVisible.value = false;
                }
            }
        },
        { threshold: 0.1 }
    );
    if (featureEl.value) featureObserver.observe(featureEl.value);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    if (featureTimeout) clearTimeout(featureTimeout);
    featureObserver?.disconnect();
});

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

const swiper = ref<Swiper | null>(null);

const logoSwiper = () => {
    swiper.value = new Swiper('.c-logo', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 40,
        speed: 3000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
    });
};

const commentSwiper = () => {
    swiper.value = new Swiper('[data-swiper=comment]', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 32,
        speed: 2400,
        loop: true,
        autoplay: true
    });
};
</script>