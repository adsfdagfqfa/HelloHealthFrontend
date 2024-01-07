<template>
    <div v-if="!is_newlist_empty">
        <div class="viewTitle tracking-in-expand" style="padding-left: 100px">最新资讯</div>
        <div>
            <div class="news_list">
                <div v-for="news in news_list" :key="news.id">
                    <NewsCard :news="news"></NewsCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {defineComponent} from "vue";
import NewsCard from "@/components/NewsCard.vue";
import axios from "axios";

export default defineComponent({
    components: {NewsCard},
    data() {
        return {
            news_list: [],
            is_newlist_empty: false,
        }
    },
    methods: {
        getNewsList() {
            axios
                .get("https://apis.tianapi.com/health/index", {
                    params: {
                        key: "a8311c8595ba809f23bcb1a3b4c9eeaf",
                        num: 10,
                    }
                })
                .then((res) => {
                    console.log("获取到网上的新闻了！")
                    console.log(res)
                    var response = res.data
                    //判断是否为空
                    if (response.code==250) {
                        this.is_newlist_empty = true;
                        console.log("该城市新闻列表为空！")
                    }
                    if (response.code == 200) {
                        this.news_list = response.result.newslist;
                        this.handleCitySocietyNewsPic();
                    }
                })
                .catch((err) => {
                    console.log("获取新闻失败！")
                    console.log(err);

                    this.news_list = err.response.data.result.newslist;
                });
        },

        handleCitySocietyNewsPic() {
            //把图片的url为空的url替换为本地null.jpg
            for (var i = 0; i < this.news_list.length; i++) {
                if (this.news_list[i].picUrl === "") {
                    this.news_list[i].picUrl = "https://questionbank-1317981426.cos.ap-shanghai.myqcloud.com/null.jpg";
                }
            }
        },
    },
    created() {
        this.getNewsList();
    }
})

</script>

<style scoped>
.viewTitle {
    padding-left: 0px;
    background-image: linear-gradient(96.14deg,
    rgba(0, 191, 168, 1) 0%,
    #0093bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: left;
    font: 600 32px "Poppins", sans-serif;
}

.tracking-in-expand {
    -webkit-animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
</style>