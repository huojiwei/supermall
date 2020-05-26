<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="back">
                <img src="~assets/images/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div class="item"
                 v-for="(item,i) in title"
                  :key="i"
                  @click="itemClick(i)"
                  :class="{'active': i === currentIndex}">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
    export default {
        name:"DetailNavBar",
        data() {
            return {
                title:['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        components:{
            NavBar
        },
        methods: {
            itemClick(i){
                this.currentIndex = i
                this.$emit('titleClick',i)
            },
            back(){
                this.$router.go(-1)
            }
        },
    }
</script>

<style scoped>
.title{
    display: flex;
}
.item{
    flex: 1;
    font-size: 13px;
}
.active{
    color: var(--color-tint);
}
.back img{
    margin-top: 10px;
    margin-left: 15px;
}
</style>