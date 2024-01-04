<template>
    <el-card class="card" @click="GotoUrl">
        <el-row>
            <el-col :span="18">
                <div class="news_title">
                    {{ news.title }}
                </div>
                <div class="news_date">
                    {{ news.ctime }}
                </div>
                <div class="news_description">
                    {{ news.description }}
                </div>
            </el-col>
            <el-col :span="6">
                <img :src="news.picUrl" class="news_img" @error="onLoadError"/>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
export default {
    name: "NewsCard",
    props: {
        news: Array,
    },
    data() {
        return {};
    },

    methods: {
        GotoUrl() {
            window.open(this.news.url);
        },
        onLoadError(e) {
            console.log("图片失效了")
            e.target.src = require("../assets/null.jpg");
        },
    },
};
</script>
<style scoped>
.news_description{
    font-size: 15px;
    margin: 10px 0px;
    width: 95%;
}
.news_title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px;
}

.card {
    width: 90%;
    height: 180px;
    margin: 20px auto;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
}
.card:hover{
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
}
.news_img{
    width: 100%;
    height: 100%;
    margin-top: 2%;
}
</style>