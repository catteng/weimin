<template>
    <div class="l-block -line">
        <!-- banner -->
        <div class="l-block__item">
            <div class="c-banner">
                <div class="c-banner__title">Services</div>
                <div class="c-banner__subtitle">服務內容</div>
                <div class="c-banner__content">
                    <span class="c-banner__item">從策略、視覺到下單，打造不漏接的「高轉換閉環」</span>
                    <span class="c-banner__item">── 看見只是開始．心動是過程．被選擇才是結局。</span>
                    <span class="c-banner__sign"></span>
                </div>
                <div class="c-banner__star">
                    <div class="o-star"></div>
                </div>
            </div>
        </div>

        <div class="l-block__item">
            <div class="l-serviceCard" >
                <div class="l-serviceCard__wrap" data-aos="fade-up">
                    <div v-for="(item, index) in services" :ref="(element) => { cards[index] = element as HTMLElement }" class="l-serviceCard__item" :class="{ 'is-active': isOpen(index) }" :key="index">
                        <div class="c-service" :class="{ 'is-active': isOpen(index) }" @mouseenter="isPC(index)" @click="isMB(index)">
                            <img class="c-service__bg" :src="`/images/section/service/${item.icon}.jpg`" :alt="item.title" />
                            <div class="c-service__mask"></div>
                            <div class="c-service__wrap">
                                <div class="c-service__collapse">
                                    <div class="c-service__text">{{ item.title }}</div>
                                    <img class="c-service__icon" :src="`/images/icon/${item.icon}.svg`" :alt="item.icon" />
                                </div>
                                <div class="c-service__content">
                                    <div class="c-service__head">
                                        <div class="c-service__title">{{ item.title }}</div>
                                        <div class="c-service__hash">{{ item.hash }}</div>
                                    </div>
                                    <div class="c-service__desc">{{ item.content }}</div>
                                    <ul class="c-service__list">
                                        <li v-for="(listItem, index) in item.list" :key="index" class="c-service__item">{{ listItem }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const openCards = ref([0])
const breakpoint = 1200
const cards = ref<HTMLElement[]>([])
let clickId = 0

function isOpen(index: number) {
    return openCards.value.includes(index)
}

function isPC(index: number) {
    if (window.innerWidth > breakpoint) {
        openCards.value = [index]
    }
}

function isMB(index: number) {
    if (window.innerWidth > breakpoint) return

    const card = cards.value[index]
    if (!card) return

    const id = ++clickId
    const header = document.querySelector<HTMLElement>('.l-header')?.offsetHeight ?? 0
    let scrollTimer: number | undefined

    const open = () => {
        window.removeEventListener('scroll', stopScroll)
        window.clearTimeout(scrollTimer)

        if (id === clickId && !isOpen(index)) {
            openCards.value = [index]
        }
    }

    const stopScroll = () => {
        window.clearTimeout(scrollTimer)
        scrollTimer = window.setTimeout(open, 100)
    }

    window.addEventListener('scroll', stopScroll, { passive: true })
    window.scrollTo({
        top: card.getBoundingClientRect().top + window.scrollY - header - 16,
        behavior: 'smooth'
    })
    stopScroll()
}

const services = [
    {
        icon: 'google',
        title: 'Google與AI搜尋策略',
        hash: '#關鍵字廣告 #SEO/GEO優化 #商家地標',
        content: '優化SEO(搜尋引擎)/GEO(AI搜尋)與商家關鍵字，提升品牌在自然搜尋的能見度，讓你的品牌成為 Google 與 AI (如 Gemini) 推薦的首選答案。',
        list: [
            '搶佔 AI 搜尋時代先機',
            '獨佔行業關鍵字',
            '精準攔截主動意向客戶',
            '持續降低未來獲客成本',
            '24小時不間斷推廣',
            '提升品牌權威與信任度'
        ]
    }, {
        icon: 'palette',
        title: 'EDM視覺行銷與社群經營',
        hash: '#社群經營 #EDM設計 #品牌內容行銷',
        content: '產出高品質社群內容與EDM通知，維持品牌熱度與客戶黏著度。結合質感美學與精準文案，賦予品牌靈魂，將枯燥的產品資訊轉化為引人入勝的品牌故事，建立具備溫度的專業形象。',
        list: [
            '視覺化傳遞品牌質感',
            '有效拉高熟客回購率',
            '節慶一鍵發送客製促銷',
            '日常維持品牌社群熱度'
        ]
    }, {
        icon: 'design',
        title: '品牌識別Logo、名片與平面設計',
        hash: '#Logo設計 #商標視覺VI #平面印刷設計',
        content: '從 Logo、名片到各類平面視覺，整合專業打造質感的品牌形象。精緻具質感的設計，讓品牌在市場競品中脫穎而出，讓客戶第一眼就感受到「用心」，願意為了「品牌價值」買單。',
        list: [
            '堅持全原創拒絕大眾化',
            '視覺化傳遞核心價值',
            '奠定專業第一印象',
            '完整註冊保護品牌商標'
        ]
    }, {
        icon: 'flash',
        title: '全平台廣告代操',
        hash: '#數位廣告投放 #數據追蹤優化 #精準客群圈選',
        content: '三大主流平台，針對不同受眾屬性進行多層次的廣告曝光。錢花在刀口上，針對不同受眾透過數據分析，把廣告投放在「最可能買的人」身上，短時間大量曝光。',
        list: [
            '合理預算換取精準流量',
            '猶豫客群精準再行銷',
            '依後台轉化數據調預算',
            '快速驗證市場接受度',
            '短時間曝光衝高業績',
            '精準受眾配優質素材'
        ]
    }, {
        icon: 'camera',
        title: 'KOL/KOC短影音、口碑行銷',
        hash: '#KOC短影音實測 #社群口碑擴散',
        content: 'KOL與KOC透過真實體驗短影音與圖文，引發討論體驗建立口碑。利用影響者素人與網紅的影響與號召力，打破消費者的戒心，快速建立信任護城河。',
        list: [
            '藉助網紅流量與信任',
            '獲得可重複授權素材',
            '快速累積數位好口碑',
            '真實體驗降低防備心',
            '多維度觸及潛在客群',
            '跟上時事保持年輕化'
        ]
    }, {
        icon: 'web',
        title: '一頁式品牌形象網站',
        hash: '#高效轉換落地頁 #RWD響應式網頁 #網站速度優化',
        content: '打造高轉換率的形象官網，將品牌故事與產品優勢濃縮精緻於單一頁面。極速載入與直覺動線，讓客戶看完就想下單，專為「成交」設計的網站。',
        list: [
            '將繁雜的資訊化繁為簡',
            '動線單一集中專注力',
            '網頁秒開減少客戶流失',
            'RWD 完美適應行動裝置'
        ]
    }
]
</script>