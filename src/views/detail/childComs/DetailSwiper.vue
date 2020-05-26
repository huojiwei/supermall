<template>
    <div>
        <swiper class="topimg">
            <swiper-item v-for="item in topImages" :key="item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        name:"detailswiper",
        data() {
            return {
                
            }
        },
        props: {
            topImages:{
                type:Array,
                default(){
                    return []
                }
                
            }
        },
        components:{
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
.topimg{
    height: 300px;
}
</style>