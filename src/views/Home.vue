<template lang="pug">
  #home
    #container
      #carousel-01
        b-carousel(id="carousel-fade" style="text-shadow: 0px 0px 2px #000" :interval="4000" fade controls indicators class="my-5")
          b-carousel-slide(img-src="../assets/image/home/carousel/S__13344997.jpg")
          b-carousel-slide(img-src="../assets/image/home/carousel/S__13344983.jpg")
          b-carousel-slide(img-src="../assets/image/home/carousel/S__13344991.jpg")
      .section01(class="flex")
        div(class=" flex row my-5 justify-content-center")
          img(src="https://picsum.photos/500/500/?image=40" width="100%" height="auto" class="col-12 col-lg-5")
          span(class="col-12 col-lg-7 flex row flex-wrap align-content-end" style="text-align:left;text-align: justify;")
            h1 品牌理念
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae iusto quia fuga harum, ea, quam culpa maxime ducimus iste nesciunt dolor natus, accusantium dolores mollitia fugit. Est cupiditate consequatur ipsam! Accusantium ipsam animi sint ducimus mollitia dolores sequi illo distinctio officia fuga commodi ullam harum facilis labore, explicabo beatae?
        div(class=" flex row my-5 justify-content-center")
          img(src="https://picsum.photos/500/500/?image=50" class="col-12 col-lg-5 order-lg-4")
          span(class="col-12 col-lg-7 flex row flex-wrap align-content-end" style="text-align:left; text-align: justify;")
            h1 商品介紹
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae iusto quia fuga harum, ea, quam culpa maxime ducimus iste nesciunt dolor natus, accusantium dolores mollitia fugit. Est cupiditate consequatur ipsam! Accusantium ipsam animi sint ducimus mollitia dolores sequi illo distinctio officia fuga commodi ullam harum facilis labore, explicabo beatae?
</template>

<style lang="scss">
#carousel{
  width: 100%;
}

.section01{
  margin:5rem 0;
  img{
    width: 100%;
    height: auto;
  }
}
</style>
