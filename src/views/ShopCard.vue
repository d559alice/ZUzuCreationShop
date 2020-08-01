<template lang="pug">
  #shopcard
    #container
      .sort
        .sortTitle EARRINGS
        .sortName TAIWAN
        #productCard.flex.row.no-gutters
          .productCard.col-6.col-md-4.col-lg-3(v-for="(product,index) in products")
            router-link.m-2(:to="product.productLink")
              b-card(:title="product.sortName + '-' + product.productName" :img-src="product.productsrc")
                b-card-text NT${{product.productPrice}}
              .producthover
            b-button.ShopCardCart(herf="#" variant="warning")
              b-icon.my-1(icon="cart"  font-scale="1.5")
            b-icon.ShopCardWishlist.my-1(v-if="!product.ShopCardWishlist" @click="product.ShopCardWishlist=!product.ShopCardWishlist" icon="heart" variant="dark"  font-scale="1.5")
            b-icon.ShopCardWishlist.my-1(v-else @click="product.ShopCardWishlist=!product.ShopCardWishlist" icon="heart-fill" variant="danger"  font-scale="1.5")

</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          sortTitle: 'EARRINGS',
          sortName: 'TAIWAN',
          sortsrc: require('../assets/image/product/2020725 _1_200725_89.jpg'),
          productName: 'Big Taiwan',
          productsrc: require('../assets/image/product/2020725 _1_200725_57.jpg'),
          productPrice: '580',
          productDescription: 'SIZE: Width 6.7cm/ Height 2.5cm',
          productStock: true,
          productLink: '/shopproduct',
          ShopCardWishlist: false,
          addToCart: false,
          stock: 1
        },
        {
          sortTitle: 'EARRINGS',
          sortName: 'TAIWAN',
          sortsrc: require('../assets/image/product/2020725 _1_200725_89.jpg'),
          productName: 'BubbleTea',
          productsrc: require('../assets/image/product/2020725 _1_200725_56.jpg'),
          productPrice: '420',
          productDescription: 'SIZE: Width 4cm/ Height 2.2cm',
          productStock: true,
          productLink: '/shopproduct',
          ShopCardWishlist: false,
          addToCart: false,
          stock: 1
        },
        {
          sortTitle: 'EARRINGS',
          sortName: 'TAIWAN',
          sortsrc: require('../assets/image/product/2020725 _1_200725_89.jpg'),
          productName: 'MangoIce',
          productsrc: require('../assets/image/product/2020725 _1_200725_55.jpg'),
          productPrice: '280',
          productDescription: 'SIZE: Width 1.5cm/ Height 1.5cm',
          productStock: true,
          productLink: '/shopproduct',
          ShopCardWishlist: false,
          addToCart: false,
          stock: 1
        }
      ]
    }
  }
}
</script>
<style lang="scss">
#shopcard{
  .sortTitle{
    width: 100%;
    background: orange;
    color: #333;
    // margin-top: 0.8rem;
    // margin-bottom: 0.4rem;
    padding: 0.2rem 0;
    font-size: 1.6rem;
    border-radius: 1rem 0 0 0;
  }
  a{
    color: #fff;
    display: block;
  }
  .sortName{
    background: #333;
    color: orange;
    border-radius: 0 0 1rem 0;
  }

  .card{
    background: #333;
    border: none;
    border-radius: 1rem 0 1rem 0;
    img{
      border-radius: 1rem 0 0 0;
    }
  }

  .ShopCardCart{
    border-radius: 50%;
    box-shadow: 3px 3px 5px #555;
    position: absolute;
    bottom: 5%;
    right: 8%;
  }

  .ShopCardWishlist{
    position: absolute;
    top: 5%;
    right: 8%;
    cursor: pointer;
  }

  .ShopCardWishlist:hover{
    g{
    color: red;
    }
  }

  .card-title{
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 1.5rem;
  }

  .card-text{
    // font-size: 1rem;
    text-align: left;
  }

  .producthover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0.5rem;
    border-radius: 1rem 0 1rem 0;
  }

  .producthover:hover{
    background: rgba($color: #000000, $alpha: 0.5);
    // z-index: 1;
    &::after{
    content: "Quick View";
    display: block;
    background: #333;
    color: orange;
    font-size: 1.4rem;
    border: 4px double orange;
    margin: 1rem;
    top: calc(50% - 0.7rem);
    // bottom: 50%;
    left: 0;
    right: 0;
    position: absolute;
    }
  }
}
</style>
