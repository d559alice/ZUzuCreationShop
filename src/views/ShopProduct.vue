<template lang="pug">
  #shopproduct
    #container.flex.row
      #productsrc.col-12.col-md-6
        b-img(:src="productsrc[0]" fluid)
      #productName.text-left.col-12.col-md-6
        #123
        h4 {{sortName}}
        h1 {{productName}}
        br
        p NT${{productPrice}}
        b-button
          b-icon(icon="cart" font-scale="1.5")
          span.ml-1  Add To Cart
        hr
        br
        p {{productDescription}}
        br
        p 🔺採用德國軟陶，環保材質
        p 🔺低溫烘烤、無毒無味
        p 🔺防水不掉色、堅固有彈性
        p 🔺925純銀耳針/耳夾可選擇
        br
        p ⚠️商品為手工製作，表面有些微手紋壓痕 、烘烤出的小泡泡，屬正常現象，高標準者勿下單。
        p ⚠️在配戴的過程中請輕巧配戴，避免碰撞，並且盡量避免於洗澡、游泳、泡溫泉時配戴。
        #ddd
          b-icon(icon="heart" font-scale="1.5")

</template>

<script>
export default {
  data () {
    return {
      sortTitle: 'EARRINGS',
      sortName: 'TAIWAN',
      sortsrc: require('../assets/image/product/2020725 _1_200725_89.jpg'),
      productName: 'Big Taiwan',
      productsrc: [
        require('../assets/image/product/2020725 _1_200725_57.jpg'),
        require('../assets/image/product/2020725 _1_200725_56.jpg'),
        require('../assets/image/product/2020725 _1_200725_55.jpg')
      ],
      productPrice: '580',
      productDescription: 'SIZE: Width 6.7cm/ Height 2.5cm',
      // productStock: true,
      // productLink: '/shopproduct',
      // ShopCardWishlist: false,
      // addToCart: false,
      stock: 1
    }
  }
}
</script>

<style lang="scss">
#shopproduct{
  #ddd{
    position: absolute;
    top: 12px;
    right: 15px;
  }
}
</style>
