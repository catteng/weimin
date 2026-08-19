<template>
    <div class="l-block -line">
        <!-- banner -->
        <div class="l-block__item">
            <div class="c-banner">
                <div class="c-banner__title">Q&A</div>
                <div class="c-banner__subtitle">常見問題</div>
                <div class="c-banner__content">
                    <span class="c-banner__item">「專屬群組，隨時對接整個行銷宇宙」</span>
                    <span class="c-banner__item">── 整個專家團隊都是您的隨身特助，讓溝通高效率。</span>
                    <span class="c-banner__sign"></span>
                </div>
                <div class="c-banner__star">
                    <div class="o-star"></div>
                </div>
            </div>
        </div>

        <!-- collab -->
        <div class="l-block__item" data-aos="fade-up">
            <div class="l-accordion -wt">
                <div class="l-accordion__wrap">
                    <div class="l-accordion__title">
                        <div class="c-title -v">關於合作</div>
                    </div>
                    <div v-for="(item, index) in collab" :key="index" class="l-accordion__item">
                        <div class="c-accordion" :class="{ 'is-active': collabOpen[index] }">
                            <img class="c-accordion__icon" src="/images/icon/question.svg" alt="常見問題">
                            <div class="c-accordion__wrap">
                                <button class="c-accordion__head" @click="toggleCollab(index)">{{ item.title }}</button>
                                <div class="c-accordion__content">
                                    <div class="c-accordion__inner">{{ item.content }}</div>
                                </div>
                            </div>
                            <button class="c-accordion__toggle" @click="toggleCollab(index)"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- marketing -->
        <div class="l-block__item -faq" data-aos="fade-up">
            <Transition name="faq-video">
                <video :key="activeService.id" class="l-block__video" :src="`/video/${activeService.id}.mp4`" autoplay muted loop playsinline></video>
            </Transition>
            <div class="l-block__overlay"></div>
            <div class="l-block__wrap">
                <div class="c-title -v">關於行銷</div>
                <div class="c-tab">
                    <div class="c-tab__topic">
                        <div class="c-tab__text">topic</div>
                        <div class="c-tab__nav">
                            <button v-for="(item, index) in service" :key="index" class="c-tab__item" :class="{ 'is-active': activeGroup === index }" @click="activeGroup = index">{{ item.group }}</button>
                        </div>
                    </div>
                    <div class="c-tab__content">
                        <Transition name="tab-panel">
                            <div :key="activeService.id" class="c-tab__panel">
                                <div class="l-accordion">
                                    <div v-for="(item, itemIndex) in activeService.list" :key="itemIndex" class="l-accordion__item">
                                        <div class="c-accordion" :class="{ 'is-active': serviceOpen[activeService.id]?.[itemIndex] }">
                                            <img class="c-accordion__icon" src="/images/icon/question.svg" alt="常見問題">
                                            <div class="c-accordion__wrap">
                                                <button class="c-accordion__head" @click="toggleService(activeService.id, itemIndex)">{{ item.title }}</button>
                                                <div class="c-accordion__content">
                                                    <div class="c-accordion__inner">{{ item.content }}</div>
                                                </div>
                                            </div>
                                            <button class="c-accordion__toggle" @click="toggleService(activeService.id, itemIndex)"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>

        <!-- contact -->
        <div class="l-block__item -blur" id="contact">
            <div class="c-banner -faq" data-aos="fade-up">
                <div class="c-banner__title">Contact us</div>
                <div class="c-banner__content">
                    <span class="c-banner__item">「讓每次的曝光，都成為消費者心中更好的選擇」</span>
                    <span class="c-banner__item">── 在喧囂的社群中，為品牌沉澱出無法忽視的價值。</span>
                    <span class="c-banner__sign"></span>
                </div>
                <div class="c-banner__star">
                    <div class="o-star"></div>
                </div>
            </div>
            <div class="l-contact">
                <div class="l-contact__slogon">
                    <div class="o-quote -sm">
                        <div class="o-quote__title">
                            <span><b>看見 __ </b> 只是開始</span>
                            <br><span><b>心動 __ </b> 是過程</span>
                            <br><span><b>被選擇 __ </b> 才是結局</span>
                        </div>
                    </div>
                    <div class="o-star -sm"></div>
                </div>
                <div class="l-contact__content">
                    <div class="l-contact__form">
                        <form class="c-form" @submit.prevent="submit">
                            <div class="c-form__wrap">
                                <div class="c-form__item">
                                    <div class="c-form__title">姓名/品牌名稱 name</div>
                                    <input v-model="form.name" type="text" required class="c-form__content" placeholder="請輸入姓名或品牌名稱">
                                </div>
                                <div class="c-form__item">
                                    <div class="c-form__title">聯絡電話 phone</div>
                                    <input v-model="form.phone" type="text" required class="c-form__content" placeholder="請輸入聯絡電話">
                                </div>
                                <div class="c-form__item">
                                    <div class="c-form__title">聯絡時段 contact time</div>
                                    <input v-model="form.contactTime" type="text" class="c-form__content" placeholder="例 : 9:00~14:00">
                                </div>
                                <div class="c-form__item">
                                    <div class="c-form__title">諮詢項目 service</div>
                                    <input v-model="form.service" type="text" class="c-form__content" placeholder="例 : 想了解方案套裝價格">
                                </div>
                                <div class="c-form__item -lg">
                                    <div class="c-form__title">信箱 mail</div>
                                    <input v-model="form.email" type="email" class="c-form__content" placeholder="請輸入信箱">
                                </div>
                                <div class="c-form__item -lg">
                                    <div class="c-form__title">讓我們更了解您 get to know you</div>
                                    <input v-model="form.message" type="text" class="c-form__content" required placeholder="請輸入您的想要及需要">
                                </div>
                            </div>
                            <div class="c-form__action">
                                <button class="o-btn" type="submit" :disabled="isSubmitting">{{ isSubmitting ? '傳送中...' : '開啟專屬規劃' }}</button>
                                <span>填寫後，我們將在 24 小時內與您聯繫。 </span>
                            </div>
                        </form>
                        <div class="o-star -lg"></div>
                    </div>
                    <div class="l-contact__footer">讓專業各司其職，你的品牌才能美美地上線、穩穩地成交。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
const collabOpen = ref<boolean[]>([true]);
const serviceOpen = ref<Record<string, boolean[]>>({});
const activeGroup = ref(0);

const form = ref({
    name: '',
    phone: '',
    contactTime: '',
    service: '',
    email: '',
    message: ''
});

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_yX5Vz5lOSLi8pRsaNBjgHn_gGWC6YtbGQjT3vP-iAMjZJxqGi8cjyOSdHx8j1nLy3w/exec';

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const submit = async () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    submitStatus.value = 'idle';

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(form.value)
        });
        submitStatus.value = 'success';
        form.value = { name: '', phone: '', contactTime: '', service: '', email: '', message: '' };
        alert('感謝您的填寫，我們將在 24 小時內與您聯繫！');
    } catch {
        submitStatus.value = 'error';
    } finally {
        isSubmitting.value = false;
    }
};

const toggleCollab = (index: number) => {
    const isOpen = collabOpen.value[index];
    collabOpen.value = collab.map((_, itemIndex) => itemIndex === index && !isOpen);
};

const toggleService = (serviceId: string, index: number) => {
    const items = serviceOpen.value[serviceId] ?? [];
    const isOpen = items[index];
    const targetService = service.find((item) => item.id === serviceId)!;
    serviceOpen.value[serviceId] = targetService.list.map((_, itemIndex) => itemIndex === index && !isOpen);
};

const collab = [
    {
        title: '我自己加減做也可以，為什麼要找你們？',
        content: '您最厲害的是產品，不需要為行銷和排版感到焦慮。您的任務是把產品做到極致；我們的任務是用專業技術，把這份美好放大給所有人看到。'
    },
    {
        title: '你們有特定的服務產業限制嗎？如果我的行業很冷門、很無聊也能做嗎？',
        content: '越冷門的產業，越容易靠「搜尋卡位」與「高質感視覺文案」脫穎而出。不論是傳統製造、專業諮詢或新興電商，我們都能把枯燥的資訊轉化為品牌故事，幫您在藍海中快速插旗。'
    },
    {
        title: '交給你們做專案，我需要每天花很多時間跟你們對接、盯進度嗎？',
        content: '完全不用。合作啟動後，我們會提供清晰的「專案進度時程表」，你只需要在關鍵的「定案、對稿、交付」節點確認即可。'
    },
    {
        title: '我對行銷一竅不知，不知道自己想要甚麼',
        content: '別擔心，這正是我們存在的理由！您只要告訴我們當前的痛點（沒流量、沒轉換、形象想升級）。我們會幫您拆解經營盲點，精準診斷出最該補上哪一塊拼圖。'
    },
    {
        title: '合作之後會不會找不到人？',
        content: '我們深知創辦人最怕遇到「簽約前熱情、付錢後失蹤」。我們會將所有溝通、對稿與進度，以制度化的軌跡完整留存。在這裡，您的訊息不會石沉大海，能隨時看見進度，體驗最踏實的並肩作戰。'
    }
]

const service = [
    {
        id: 'google',
        group: 'Google 與 AI 搜尋策略',
        list: [
            {
                title: '為甚麼要做 Google 關鍵字優化？',
                content: '廣告是「花錢讓人看見你」，關鍵字優化則是「讓人搜尋時，自然覺得你就是首選」。當消費者主動在 Google 或 AI 搜尋解答時，若您的品牌能成為第一頁的推薦答案，消費者的選擇意願是最高的。'
            },
            {
                title: '我自己在手機上輸入關鍵字，已經看得到我們店了，這樣還需要優化嗎？',
                content: '因為常在店裡，Google 會自動把您的店排在最前面，但新客搜尋時的排名完全不同。蔚泯優化的是幫你突破「地理距離」與「個人化泡沫」，讓方圓數里內原本搜不到您的潛在客群，都能在第一時間看到您的店。'
            },
            {
                title: '你們會怎麼幫我們規劃關鍵字與搜尋方向？',
                content: '我們不盲目追逐高流量，而是鎖定「有購買意圖」的精準詞彙。我們會分析你的產業痛點，找出對手忽略的藍海字眼，用精準策略幫你攔截潛在客戶。'
            },
            {
                title: '什麼是 SEO (搜尋引擎優化)？',
                content: 'SEO 分為兩種：技術 SEO 負責將網站速度與結構優化；內容 SEO 則是佈局客戶會搜的關鍵字，寫出打中痛點的文案。雙管齊下，就能讓想買的人在 Google 搜尋時第一眼看到你。'
            },
            {
                title: '什麼是 GEO (AI 搜尋優化)？',
                content: '因應 AI 時代的全新策略！現在越來越多人用 Gemini、ChatGPT 找答案。GEO 就是優化品牌內容，讓 AI 在統整回答時，把你的品牌列為「首選推薦答案」。'
            }
        ]
    },
    {
        id: 'media',
        group: 'EDM視覺行銷與社群經營',
        list: [
            {
                title: '什麼是 EDM 視覺行銷？這和一般的社群發文有什麼不同？',
                content: '一般發文偏向日常互動，EDM 則是針對特定活動、新品或節慶設計的「高張力視覺海報」。它主要用於 LINE 群發、限動或私訊推播，能瞬間抓住眼球、提高轉換率。'
            },
            {
                title: '我們都是靠熟客跟口碑經營，為甚麼需要做社群？',
                content: '再忠誠的熟客也會因搬家或習慣改變而流失，只靠口耳相傳，品牌的成長往往追不上流失的速度。社群就是口碑的放大器。用有質感的內容吸引轉發，把店面直接開進客人的手機裡，才能讓好生意走得更長遠。'
            },
            {
                title: '我們行業比較傳統，有需要特別做社群嗎？',
                content: '傳統產業最厲害的是技術、規格與信任，但若社群雜亂或停滯，第一眼就會被貼上「缺乏質感」的標籤。蔚泯要做的是幫您重塑視覺，讓老客戶覺得放心、新客戶看了覺得專業。'
            },
            {
                title: '我們需要自己寫文案或提供照片嗎？',
                content: '我們會根據每月與您討論出的核心主題，負責文案撰寫、視覺設計與排版。您只需提供基礎的商品素材或活動資訊，其餘的轉化與美化都交給我們。'
            },
            {
                title: '之後如果臨時想辦活動，可以急件請你們做圖嗎？',
                content: '蔚泯採「主題排程制」。若有突發活動，我們會視當下時程盡力協調配合，但仍建議提前規劃，充足的時間才能兼顧品牌視覺品質與行銷成效。'
            }
        ]
    },
    {
        id: 'design',
        group: '品牌識別Logo・名片與平面設計',
        list: [
            {
                title: '為什麼我不能隨便找個免費圖庫的圖或是 AI 出圖當 Logo？',
                content: '公開圖庫或 AI 生產的圖缺乏靈魂，容易流於大眾化，感受不到品牌的用心。Logo 是傳遞品牌精神的第一步，我們堅持全原創設計，將您的初衷與故事量身打造成視覺，讓客戶一眼就看見品牌的用心。'
            },
            {
                title: '我們會拿到哪些檔案格式？',
                content: '我們會交付完整向量原始檔（AI 檔）及業界標準通用格式（PDF、高解析度 PNG / JPG）。無論您未來要用於實體印刷、招牌製作或網路社群，都能完美解析。'
            },
            {
                title: 'Logo 設計好之後，版權是屬於誰的？可以去註冊商標嗎？',
                content: '該設計的版權將完全轉讓給您。我們的創作皆為原創設計，您可以直接委託商標事務所進行法律上的商標註冊（我們亦可協助提供標準規範圖）。'
            },
            {
                title: '名片設計有包含印刷嗎？還是我需要自己找廠商？',
                content: '若有印刷需求，蔚泯提供完整的代客印刷服務，包含材質推薦（如象牙卡、特種紙）、加工建議（如燙金、打凸），讓您省去對接印刷廠的繁瑣流程。'
            },
            {
                title: '我們已經有舊的 Logo 了，可以請你們做優化（微調）嗎？',
                content: '可以。我們會保留您原有的核心精神與品牌識別度，僅針對線條、字體流暢度與現代視覺審美進行優化。'
            }
        ]
    },
    {
        id: 'ads',
        group: '全平台廣告代操(Google/FB/IG)',
        list: [
            {
                title: '既然優化了 Google 商家跟關鍵字，還要投放廣告嗎？',
                content: '關鍵字優化（SEO）是需要時間累積的長期資產，能降低未來的獲客成本；而投放廣告則是「即戰力」，能短時間大量曝光、快速測試市場。兩者並行，才能打造「持續有業績、長期省成本」的良性循環。'
            },
            {
                title: '我的廣告預算不多，有需要 Google/FB/IG 都投嗎？分散掉會不會沒效果？',
                content: '預算有限時，盲目分散絕對會稀釋效果。蔚泯會根據店家的行業屬性規劃及目前「最需要、最想要」的目標，在「社群」與「Google」兩大區塊中精準取捨與分配。'
            },
            {
                title: '在後台按「加強推廣貼文」就好了，為什麼還要找你們代操呢？',
                content: '手機按「加強推廣」只是花錢買虛胖的按讚，蔚泯做的是「精準再行銷」。當客人點進一頁式網站卻沒有動作，我們能鎖定這群「已經心動的人」，隔天精準推送好評或細節亮點，臨門一腳把他們引導到 LINE 諮詢或預約。'
            },
            {
                title: '投了廣告之後，我們看得到數據和花費嗎？',
                content: '當然可以。蔚泯會提供精簡易懂的數據截圖與視覺化報表，實際花費、曝光點擊、以及最重要的「轉換成效」。除了數據透明，附上白話文的分析說明與優化建議，讓你不用親自研究複雜的後台，也能精準掌握每一分預算的去向與投報率。'
            },
            {
                title: '如遇店休、淡季或配合節慶辦活動，廣告預算和策略可以隨時調整嗎？',
                content: '當然可以。無論是旺季加碼衝刺、還是淡季縮減防守，只要提前對接，我們都能即時調配。'
            }
        ]
    },
    {
        id: 'kol',
        group: 'KOL/KOC短影音・口碑行銷',
        list: [
            {
                title: '網紅有分大牌 KOL 和素人 KOC，我到底該做哪一種才對？',
                content: 'KOL 負責帶動「知名度」，用名氣打開市場；KOC 則負責帶動「真實感」，用口碑促成買氣。蔚泯不盲目混搭，而是看你當下缺什麼，把每一分錢都花在對的切入點上。'
            },
            {
                title: '找網紅做行銷，熱度一下就過去了，這筆行銷預算是不是一次性消耗品？',
                content: '社群的熱度只是一時的，留在網路上的「搜尋口碑」和素材產權才是長遠的。短影音與開箱照能直接轉化為官網與廣告的信任背書。我們不只買當下的曝光，更幫您把一次性的行銷支出，變成能無限複利的品牌資產。'
            },
            {
                title: '我的店主要是做在地的過路客或街坊鄰居，有需要做 KOL 或 KOC 行銷嗎？',
                content: '以前的在地客是「路過看到」才進店，現在連去隔壁條街都習慣先上網搜尋。做 KOL / KOC 不是為了吸引外縣市遊客，而是幫您在本地建立數位口碑。'
            },
            {
                title: '如果我們自己有小編，為什麼還要找蔚泯代操網紅與口碑？',
                content: '小編擅長日常維運，但蔚泯擁有完整的「創作者人脈庫、合約談判權、整體的行銷漏斗策略」。找我們是為了引進專業的外部資源，讓效果極大化。'
            },
            {
                title: '既然都要花錢，為什麼不直接投廣告，還要花心思做口碑？',
                content: '廣告是「自賣自誇」，口碑是「別人說你好」。消費者下單前一定會上網爬文，口碑做的就是臨門一腳的信任防線，沒這道防線，廣告費只是幫別人導流。'
            }
        ]
    },
    {
        id: 'web',
        group: '一頁式品牌形象網站',
        list: [
            {
                title: '為什麼要做「一頁式」品牌形象網站？',
                content: '現代人注意力短暫，一頁式網站就像一本精緻的品牌雜誌。能讓讀者順著安排好的視覺與故事線，流暢地看完品牌初衷、核心產品與客戶好評，用最高效率建立信任感。'
            },
            {
                title: '我想做一頁式形象網站，但我不知道裡面要放什麼內容，也沒有素材怎麼辦？',
                content: '想內容是我們的工作，您只需負責審核。我們不丟生硬表格，而是透過輕鬆訪談，把您腦海中的品牌故事，翻譯成消費者看得懂的精緻視覺。從架構、文案到排版設計，蔚泯一手包辦。'
            },
            {
                title: '我們的產品很多，一頁式網站真的夠放嗎？',
                content: '夠。一頁式是精準的「數位 Sales Kit」，蔚泯幫您去蕪存菁，只留核心優勢與痛點，讓客戶在短時間內看完就想聯絡您。'
            },
            {
                title: '如果以後我們店擴大，一頁式網站還可以再調整或升級嗎？',
                content: '一頁式網站是先把品牌的高級感門面和獲客動線穩穩建立起來，未來不論想增加頁面，或串接購物車做電商，都能隨時升級。'
            },
            {
                title: '市面上很多一頁式網站用手機看排版就亂掉，你們的會嗎？',
                content: '絕不會。我們是使用「行動優先（RWD 響應式設計）」。會針對手機、平板、電腦逐一優化視覺與字體排版，確保客戶用什麼螢幕看，都一樣精緻體面。'
            }
        ]
    }
]

const activeService = computed(() => service[activeGroup.value]!);
</script>