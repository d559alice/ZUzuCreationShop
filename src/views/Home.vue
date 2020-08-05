<template lang="pug">
  #home
    #container
      #carousels.row
        .carousel.col-12.col-lg-6(v-for="carousel in carousels")
          b-carousel.m-1(id="carousel-fade" :interval="carousel.speed" fade controls indicators)
            .carouselImg(v-for="src in carousel.imgs")
              b-carousel-slide.img-scale(:img-src="src")
        .taiwansvg.col-12.p-0.col-lg-6
          .taiwan-box
            img.ear(:src="require('../assets/image/home/ear (1).svg')")
            img.taiwansvg1(:src="require('../assets/image/home/taiwanearrings_animated.svg')")
      .section01
        span.col-12.row.no-gutters.align-content-end.text-left
          .parallaxline
            v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="20")
          .parallaxline
          .parallaxline
          .parallaxline
          .parallaxline
          .parallaxline
          h1 品牌理念
          .parallaxline
          .parallaxline
          h5 Zuzu的風格變化多端，我們使無形的想法具體化，也讓有形的物品抽象化；將生活融入創作中，日常裡看到什麼、聽到什麼、吃到什麼都可以轉換成為軟陶藝術，讓你的生活在小小的耳環上體現，所以就讓我們一起期待ZUzu的原創商品吧！！
          .parallaxline
          .parallaxline
          .parallaxline
          .parallaxline
          .parallaxline
          .parallaxline
            v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="20")
      .section02.row.no-gutters.justify-content-around
        h1.col-12 製程介紹
        div.col-2
          img(:src="require('../assets/image/home/clay.svg')")
          h5 混色揉土
        div.col-2
          img(:src="require('../assets/image/home/tool.svg')")
          h5 修飾塑形
        div.col-2
          img(:src="require('../assets/image/home/oven.svg')")
          h5 低溫烘烤
        div.col-2
          img(:src="require('../assets/image/home/polish.svg')")
          h5 去邊打磨
        .parallaxline
            v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="20")
      .section03.row.justify-content-around.align-items-center
        span
          h1(v-parallax.modifier="0.3") 商品展示
        Introduction
      .parallaxline
            //- v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="20")
      //- .section04.row.no-gutters.justify-content-around
        .footer-contact.col-6
          h3.my-5 Contact us
          b-link(href="http://line.me/ti/p/@zuzucreation" target="_blank")
            img(src="../../public/img/line-messenger.svg" width="50px")
        .footer-connect.col-6
          h3.my-5 Follow us
          b-link(href="https://www.instagram.com/accounts/login/?next=/zuzuzuzu_tw/" target="_blank")
            img(src="../../public/img/instagram-2-1.svg" width="50px")
      //- .texttry
        .textanime1
          p Zuzu的風格變化多端，我們使無形的想法具體化，也讓有形的物品抽象化
      //- .texttry
        .textanime2
          p 將生活融入創作中，日常裡看到什麼、聽到什麼、吃到什麼都可以轉換成為軟陶藝術，讓你的生活在小小的耳環上體現，所以就讓我們一起期待ZUzu的原創商品吧！！
      //- v-parallax(src="https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg" height="200")
    br
    //- .mask(v-parallax.modifier="-0.5")
      p 123
    //- .mask(v-parallax.modifier="0.5")
</template>
<script>
import Introduction from '../components/Introduction'
export default {
  components: {
    Introduction
  },
  data () {
    return {
      carousels: [
        {
          speed: 5000,
          imgs: [
            require('../assets/image/home/carousel/S__13344997.jpg'),
            require('../assets/image/home/carousel/S__13344983.jpg'),
            require('../assets/image/home/carousel/S__13344991.jpg')
          ]
        }
        // {
        //   speed: 3500,
        //   imgs: [
        //     require('../assets/image/collection/creation/creation_20200725_02.jpg'),
        //     require('../assets/image/collection/creation/creation_20200725_05.jpg'),
        //     require('../assets/image/collection/creation/creation_20200725_12.jpg')
        //   ]
        // }
      ]
    }
  }
}
</script>

<style lang="scss">
// .img-scale{
//   animation: img-scale 20s 1s 1 ease forwards;
// }
// @keyframes img-scale{
//   from{
//     transform: scale(1);
//   }
//   to{
//     transform: scale(1.2);
//   }
// }

.parallaxline{
  width: 100%;
  height: 20px;
}

.mask{
  width: 50vw;
  height: 50vh;
  background: url("https://img.51miz.com/preview/element/00/01/06/84/E-1068495-FE3BE6A3.jpg")no-repeat top center;
  background-size: cover;
  -webkit-mask: url("../assets/image/taiwan-map-clip-art-taiwan-thumbnail1.png") no-repeat center center;
  mask: url("../assets/image/taiwan-map-clip-art-taiwan-thumbnail1.png") no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mask:hover{
  background: url("../assets/image/home/carousel/S__13344984.jpg")no-repeat top center;
}

#carousels{
  .taiwan-box{
    width: 500px;
    height: 500px;
    position: relative;
  }
  .ear{
  position: absolute;
  width: 13rem;
  top: 10%;
  left: 50%;
  }
  .taiwansvg1{
    position: absolute;
    width: 700px;
    top: 38%;
    left: -5%;
  }
}

@media (max-width: 576px){
#carousels{
  .ear{
  top: 10%;
  left: 25%;
  }
  .taiwansvg1{
    top: 37%;
    left: -30%;
  }
}
}

.section01{
  margin:5rem 0;
  img{
    width: 100%;
    height: auto;
  }
  h1{
    color: #333;
    font-weight: bold;
  }
  h5{
    font-weight: bolder;
  }
}

.section02{
  h1{
    margin-bottom: 8rem;
    font-weight: bolder;
  }
  img{
    width: 100%;
  }
  h5{
    margin: 2rem 0;
    font-weight: bolder;
  }
}

.section03{
  position: relative;
  .taiwansvg{
  width: 1000px;
  position: absolute;
  top: 0;
  left: -20%;
}
}

#texttry{
  padding-top: 5em;
  display: flex;
  justify-content: start;
  font-size: 20px;
  width: auto;
}
/* DEMO-SPECIFIC STYLES */
.textanime1 p {
  color: rgb(0, 0, 0);
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
  typing 5s steps(30, end) infinite,
  blink-caret .5s step-end infinite;
}

.textanime2 p {
  color: rgb(0, 0, 0);
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
  typing 10s 10s steps(30, end) infinite,
  blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>
