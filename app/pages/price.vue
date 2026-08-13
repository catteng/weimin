<template>
    <div class="l-block -wave">
        <!-- banner -->
        <div class="l-block__item">
            <div class="c-banner -sm">
                <div class="c-banner__title">Price</div>
                <div class="c-banner__subtitle">方案價格</div>
                <div class="c-banner__content">
                    <span class="c-banner__item">「≤ 1 個員工的薪水 = 1 個跨領域行銷團隊」</span>
                    <span class="c-banner__item">── 恆藝不泯全方位品牌孵化。</span>
                    <span class="c-banner__sign"></span>
                </div>
                <div class="c-banner__star">
                    <div class="o-star"></div>
                </div>
            </div>
        </div>

        <!-- plan -->
        <div class="l-block__item" data-aos="fade-up">
            <div class="c-title">{{ activePlan.sectionTitle }}
                <div class="c-title__toolbar">
                    <div class="o-carouselNav">
                        <div class="o-carouselNav__prev swiper-button-prev" data-swiper-prev="plan"></div>
                        <div class="o-carouselNav__next swiper-button-next" data-swiper-next="plan"></div>
                    </div>
                </div>
            </div>

            <div class="c-carousel swiper -plan" data-swiper="plan">
                <div class="c-carousel__wrap swiper-wrapper">
                    <template v-for="loopIndex in 3" :key="loopIndex">
                        <div v-for="(item, index) in plan" :key="`${loopIndex}-${item.id}`" class="c-carousel__slide swiper-slide" :class="{ 'is-tooltipOpen': activeTooltipId === `${loopIndex}-${item.id}` }">
                            <div class="c-plan" :class="{ 'is-active': isActiveSlide(loopIndex, index) }">
                                <div class="c-plan__alpha">{{ item.id }}</div>
                                <div class="c-plan__wrap">
                                    <div class="c-plan__head" @click="goPlan">
                                        <div class="c-plan__tag">{{ item.tag }}</div>
                                        <div class="c-plan__title">{{ item.title }}</div>
                                        <label v-if="item.id === 'E'" class="c-plan__switch" @click.stop>
                                            <input v-model="isEPlanCollaborating" type="checkbox" class="c-plan__input">
                                            <div class="c-plan__text">{{ isEPlanCollaborating ? '搭配A~D任一方案' : '未搭配A~D任一方案' }}</div>
                                        </label>
                                        <div class="c-plan__price">
                                            <ul class="c-priceList" :class="{ 'is-active': isActiveSlide(loopIndex, index) }">
                                                <li class="c-priceList__item">
                                                    <span class="c-priceList__main">$&nbsp;&nbsp;{{ getPlanPrice(item).year }}</span>
                                                    <span class="c-priceList__per">/ 年</span>
                                                </li>
                                                <li class="c-priceList__item">
                                                    <span v-if="item.id !== 'E' || isEPlanCollaborating" class="c-priceList__origin">$ {{ item.origin.twoYears }}</span>
                                                    <span class="c-priceList__num">$ {{ getPlanPrice(item).twoYears }}</span>
                                                    <span class="c-priceList__per">/ 2年</span>
                                                </li>
                                                <li class="c-priceList__item">
                                                    <span v-if="item.id !== 'E' || isEPlanCollaborating" class="c-priceList__origin">$ {{ item.origin.threeYears }}</span>
                                                    <span class="c-priceList__num">$ {{ getPlanPrice(item).threeYears }}</span>
                                                    <span class="c-priceList__per">/ 3年</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="c-plan__note" v-if="item.note" v-html="item.note"></div>
                                    </div>
                                    <ul class="c-plan__list">
                                        <li v-for="feature in item.list" :key="feature" class="c-plan__item" v-html="feature"></li>
                                    </ul>
                                    <div class="c-plan__action" :class="{ '-notice': item.popup }">
                                        <button v-if="item.popup" class="c-plan__notice" @click="openNotice(item.condition)">注意事項</button>
                                        <a href="#" class="o-btn" :class="{ '-dark': isActiveSlide(loopIndex, index) }" target="_self">立即諮詢</a>
                                        <div class="o-tooltip" v-if="item.tooltip" :class="{ 'is-active': activeTooltipId === `${loopIndex}-${item.id}`, '-wt': isActiveSlide(loopIndex, index) }">
                                            <button class="o-tooltip__btn" :class="{ 'is-active': isActiveSlide(loopIndex, index) }" @click="activeTooltipId = activeTooltipId === `${loopIndex}-${item.id}` ? null : `${loopIndex}-${item.id}`"></button>
                                            <div class="o-tooltip__content">
                                                <div class="o-tooltip__item">一年方案贈 <span>1 支短影音</span></div>
                                                <div class="o-tooltip__item">兩年方案加贈 <span>3 支短影音 & 網站永久使用權</span></div>
                                                <div class="o-tooltip__item">三年方案再加贈
                                                    <ul class="o-tooltip__list">
                                                        <li><span>4 支短影音&行銷圖文企劃</span></li>
                                                        <li><span>DM設計 6 篇 & 網站永久使用權 </span><br>(免維護費)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- custom -->
        <div class="l-block__item" data-aos="fade-up">
            <div class="l-custom">
                <div class="l-custom__banner">
                    <div class="c-custom">
                        <div class="c-custom__content">
                            <div class="c-custom__title">方案客製化報價</div>
                            <div class="c-custom__item">
                                <b>【 依預算量身打造 】</b>
                                <ol>
                                    <li>告知我們您的行銷預算金額。</li>
                                    <li>預算內配置「最高互動、最精準」的網紅人數與貼文規格。</li>
                                    <li>確保把每一分錢都花在刀口上，不做無謂的浪費。</li>
                                </ol>
                            </div>
                            <div class="c-custom__item">
                                <b>【 依目標效果規劃 】</b>
                                <ol>
                                    <li>告知我們您這檔活動想達成的效果（如：累積好評、爆款導購、全網霸屏）</li>
                                    <li>依據目標倒推所需的「網紅等級」&「短影音支數」&「授權範圍」</li>
                                    <li>確保把每一分錢都花在刀口上，不做無謂的浪費。</li>
                                </ol>
                            </div>
                        </div>
                        <div class="c-custom__footer">＊ 根據最終確認的企劃規格內容，提供最透明、合理的專案執行報價。</div>
                    </div>
                </div>
                <div class="l-custom__content">
                    <div class="c-carousel -custom" data-swiper="custom">
                        <div class="c-carousel__wrap swiper-wrapper">
                            <template v-for="loopIndex in 3" :key="loopIndex">
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="c-customCard">
                                        <div class="c-customCard__tag">客製化品牌團隊出租</div>
                                        <div class="c-customCard__title">雲端行銷部 蔚藍智囊</div>
                                        <ul class="c-customCard__content">
                                            <li class="c-customCard__item">
                                                <span>文案寫手</span>品牌靈魂與故事的雕琢者
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>視覺美編</span>兼具匠心與商用邏輯的視覺大師
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>網站架站</span>高轉化率的數位門面建造者
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>活動企劃</span>串聯線上與線下的體驗策展人
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>廣告代操</span>精準觸及的品牌放大器
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>零隱形成本</span>免除勞健保負擔
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>零管理風險</span>不用擔心人員流動
                                            </li>
                                            <li class="c-customCard__item">
                                                <span>高效率產出</span>專家的即戰力保障
                                            </li>
                                        </ul>
                                        <div class="c-customCard__action">
                                            <a href="#" class="o-btn" target="_self">立即聯絡行銷宇宙</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="c-carousel__slide swiper-slide">
                                    <div class="c-customCard">
                                        <div class="c-customCard__tag">紅人商務影響力方案</div>
                                        <div class="c-customCard__title">星火燎原 蔚為星海</div>
                                        <div class="c-customCard__content">
                                            <ul class="c-customCard__list">
                                                <li class="c-customCard__item">品牌定位評估</li>
                                                <li class="c-customCard__item">品牌定位評估</li>
                                                <li class="c-customCard__item">品牌定位評估</li>
                                                <li class="c-customCard__item">品牌定位評估</li>
                                                <li class="c-customCard__item">網紅 (KOL/KOC) 精準篩選與媒合</li>
                                                <li class="c-customCard__item">開箱短影音與圖文企劃方向導引</li>
                                                <li class="c-customCard__item">互動率與曝光成效綜合分析</li>
                                                <li class="c-customCard__item">電影活動出席</li>
                                                <li class="c-customCard__item">公關禮品策畫</li>
                                                <li class="c-customCard__item">腳本與素材審查</li>
                                                <li class="c-customCard__item">檔期合約簽署</li>
                                                <li class="c-customCard__item">產品寄送對接</li>
                                                <li class="c-customCard__item">網紅上線時程全面控管</li>
                                                <li class="c-customCard__item">結案流量反饋</li>
                                            </ul>
                                        </div>
                                        <div class="c-customCard__action">
                                            <a href="#" class="o-btn" target="_self">立即聯絡行銷宇宙</a>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- notice popup -->
        <dialog ref="noticeDialog" class="o-popup" @click.self="closeNotice">
            <div class="o-popup__wrap">
                <div class="o-popup__head">
                    <div class="o-popup__title">注意事項：</div>
                    <button class="o-popup__close" @click="closeNotice"></button>
                </div>
                <div class="o-popup__content">
                    <ol>
                        <li>「廣告投放預算由客戶自行規劃，並依實際需求支付給廣告投放平台(如 Meta , Google 等) 」</li>
                        <li>「方案為專業廣告代操與維護之固定收費，含基礎 $15,000 /月以內之廣告操作需求」<br>合約體制：方案皆採「年度合約制」，注重品牌長期數據優化與穩定成長。 
                            <div class="o-fee">
                                <div class="o-fee__item">
                                    <div class="o-fee__tag">廣告操作費率</div>
                                    <div class="o-fee__list">
                                        當月實際投放金額之 30%
                                        <ul>
                                            <li>簽署 2 年調降為 25%</li>
                                            <li>簽署 3 年調降為 20%</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="o-fee__item">
                                    <div class="o-fee__tag">廣告操作費率</div>
                                    <div class="o-fee__list">
                                        當月實際投放金額之 30%
                                        <ul>
                                            <li>簽署 2 年調降為 25%</li>
                                            <li>簽署 3 年調降為 20%</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>－計費小幫手<br>代操費：當月廣告投放額若超出基礎門檻，超出部分依方案費率另行計收。</li>
                    </ol>
                </div>
                <div class="o-popup__action">
                    <button class="o-btn -dark" @click="closeNotice">確定</button>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { Swiper } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

const activeTooltipId = ref<string | null>(null);
const activePlanIndex = ref(0);
const isEPlanCollaborating = ref(false);

const noticeDialog = ref<HTMLDialogElement | null>(null);
const noticeText = ref('');

const openNotice = (condition?: string) => {
    noticeText.value = condition ?? '';
    noticeDialog.value?.showModal();
    document.body.classList.add('is-popupOpen');
};

const closeNotice = () => {
    noticeDialog.value?.close();
};

const handleNoticeClose = () => {
    document.body.classList.remove('is-popupOpen');
};

const plan = [
    {
        id: 'A',
        sectionTitle: '成長方案',
        title: '數位旺鋪 蔚藍初曉',
        tag: '在地曝光成長方案',
        price: {
            year: '29,800',
            twoYears: '56,600',
            threeYears: '79,800'
        },
        origin: {
            twoYears: '59,600',
            threeYears: '89,400'
        },
        list: [
            'Google 商家首頁關鍵字優化(10組)',
            'SEO/GEO優化',
            '社群經營',
            '廣告投放',
            '數據分析',
            'Google 商家首頁經營更新優化',
            'SEO優化內容',
            '社群曝光與流量成長',
            '社群素材同步使用<br> ( IG / FB / Threads )',
            '每月行銷文案企劃 (年度 12 篇)',
            '品牌形象 DM 設計 (年度 12 張)',
            '實境短影音攝影 & 剪輯',
            '客製化一頁式品牌形象網站<br> ( RWD響應式設計 )',
            'SEO 技術優化',
            '多維度數位渠道深化建構',
            '社群平台導流及搜尋流量整合'
        ],
        tooltip: true
    },
    {
        id: 'B',
        sectionTitle: '進階方案',
        title: '品牌門面 蔚然成風',
        tag: '視覺美學進階方案',
        price: {
            year: '40,800',
            twoYears: '67,600',
            threeYears: '90,800'
        },
        origin: {
            twoYears: '81,600',
            threeYears: '122,400'
        },
        list: [
            'Google 商家首頁關鍵字優化(10組)',
            'Google 商家首頁經營更新優化',
            'SEO優化內容',
            '社群曝光與流量成長',
            '社群素材同步使用<br> ( IG / FB / Threads )',
            '每月行銷文案企劃 (年度 12 篇)',
            '品牌形象 DM 設計 (年度 12 張)',
            '實境短影音攝影 & 剪輯',
            '品牌核心 Logo 美學設計',
            '專屬標準字體架構優化',
            'Logo 直式或橫式排版 (擇一)',
            '專屬品牌色彩系統建立<br> ( 印刷 CMYK / 數位 RGB 色碼表 )'
        ],
        tooltip: true
    },
    {
        id: 'C',
        sectionTitle: '旗艦方案',
        title: '旗艦大樓 蔚為大觀',
        tag: '數位導流旗艦方案',
        price: {
            year: '44,800',
            twoYears: '83,600',
            threeYears: '116,800'
        },
        origin: {
            twoYears: '89,600',
            threeYears: '134,400'
        },
        list: [
            'Google 商家首頁關鍵字優化(10組)',
            'Google 商家首頁經營更新優化',
            'SEO優化內容',
            '社群曝光與流量成長',
            '社群素材同步使用<br> ( IG / FB / Threads )',
            '每月行銷文案企劃 (年度 12 篇)',
            '品牌形象 DM 設計 (年度 12 張)',
            '實境短影音攝影 & 剪輯',
            '客製化一頁式品牌形象網站<br> ( RWD響應式設計 )',
            'SEO 技術優化',
            '多維度數位渠道深化建構',
            '社群平台導流及搜尋流量整合'
        ],
        tooltip: true
    },
    {
        id: 'D',
        sectionTitle: '全域方案',
        title: '數位帝國 蔚為萬象',
        tag: '全域品牌佈局方案',
        price: {
            year: '55,800',
            twoYears: '94,600',
            threeYears: '127,800'
        },
        origin: {
            twoYears: '111,600',
            threeYears: '167,400'
        },
        list: [
            'Google 商家首頁關鍵字優化(10組)',
            'Google 商家首頁經營更新優化',
            'SEO優化內容',
            '社群曝光與流量成長',
            '社群素材同步使用<br> ( IG / FB / Threads )',
            '每月行銷文案企劃 (年度 12 篇)',
            '品牌形象 DM 設計 (年度 12 張)',
            '實境短影音攝影 & 剪輯',
            '專屬標準字體架構優化',
            'Logo 直式或橫式排版 (擇一)',
            '專屬品牌色彩系統建立<br> ( 印刷 CMYK / 數位 RGB 色碼表 )',
            '客製化一頁式品牌形象網站<br> ( RWD響應式設計 )',
            'SEO 技術優化',
            '多維度數位渠道深化建構',
            '社群平台導流及搜尋流量整合'
        ],
        tooltip: true
    },
    {
        id: 'E',
        sectionTitle: '廣告方案',
        title: '全面進擊 蔚藍激浪',
        tag: '數位廣告代操方案',
        condition: '未搭配A~D任一方案',
        price: {
            year: '36,000',
            twoYears: '60,000',
            threeYears: '72,000'
        },
        origin: {
            year: '54,000',
            twoYears: '90,000',
            threeYears: '108,000'
        },
        nocollab: {
            year: '54,000',
            twoYears: '90,000',
            threeYears: '108,000'
        },
        note: '註：費用僅為代操服務費，不含廣告平台之投放預算。',
        list: [
            '廣告策略與定位規劃',
            '透明化報表與顧問式解析',
            '渠道廣告動能注入',
            '平台資產深度整合',
            '多維度受眾精準對焦',
            '動態數據反饋與優化',
            '高效能數位廣告代操',
            '高意圖關鍵字攔截與標籤設定',
            '再行銷 (Retargeting) 深度佈局',
            '轉換率全面追蹤優化'
        ],
        tooltip: false,
        popup: 'notice'
    }
]

const activePlan = computed(() => plan[activePlanIndex.value % plan.length]!);

const getPlanPrice = (item: (typeof plan)[number]): { year: string; twoYears: string; threeYears: string } => {
    return item.id === 'E' && !isEPlanCollaborating.value ? item.nocollab! : item.price;
};

const isActiveSlide = (loopIndex: number, planIndex: number) => {
    return (loopIndex - 1) * plan.length + planIndex === activePlanIndex.value;
};

onMounted(() => {
    planSwiper();
    customSwiper();
    noticeDialog.value?.addEventListener('close', handleNoticeClose);
});

onUnmounted(() => {
    noticeDialog.value?.removeEventListener('close', handleNoticeClose);
});

const swiper = ref<Swiper | null>(null);

const goPlan = (event: MouseEvent) => {
    const slide = (event.currentTarget as HTMLElement).closest<HTMLElement>('.swiper-slide');
    const index = swiper.value?.slides.indexOf(slide!);

    if (index !== undefined && index >= 0) {
        swiper.value?.slideTo(index);
    }
};

const planSwiper = () => {
    swiper.value = new Swiper('[data-swiper=plan]', {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 'auto',
        spaceBetween: 32,
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 'auto'
            }
        },
        loop: true,
        loopAdditionalSlides: 3,
        autoplay: false,
        navigation: {
            prevEl: '[data-swiper-prev="plan"]',
            nextEl: '[data-swiper-next="plan"]'
        },
        on: {
            slideChange(activeSwiper) {
                activeTooltipId.value = null;
                activePlanIndex.value = activeSwiper.realIndex;
            }
        }
    });
};

const customSwiper = () => {
    swiper.value = new Swiper('[data-swiper=custom]', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 'auto'
            }
        },
    });
};
</script>