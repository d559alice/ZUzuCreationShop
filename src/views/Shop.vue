<template lang="pug">
  #shop
    #container
      .sort(v-for="(sort,index) in sorts")
        .sortTitle
          router-link(to="/shopcard") {{sort.sortTitle}}
        .sortName.flex.row.no-gutters
          .sort.col-6.col-md-4.col-lg-3(v-for="(sortCard,index) in sort.sortCards")
            router-link.m-1(:to="sortCard.sortlink")
              b-card(:img-src="sortCard.sortsrc" overlay text-variant="white" :title="sortCard.sortName")
</template>

<script>
export default {
  data () {
    return {
      sorts: [
        {
          sortTitle: 'ALL'
          // sortCards: [
          //   {
          //     sortName: 'ALL',
          //     src: require('../assets/image/product/S__13344983.jpg'),
          //     link: '/'
          //   }
          // ]
        },
        {
          sortTitle: 'EARRINGS',
          sortCards: [
            {
              sortName: 'TAIWAN',
              sortsrc: require('../assets/image/product/2020725 _1_200725_89.jpg'),
              sortlink: '/shopcard'
            },
            {
              sortName: 'PLANET',
              sortsrc: require('../assets/image/product/2020725 _1_200725_17.jpg'),
              sortlink: '/shopcard'
            },
            {
              sortName: 'NATURE',
              sortsrc: require('../assets/image/product/2020725 _1_200725_45.jpg'),
              sortlink: '/shopcard'
            },
            {
              sortName: 'COOKIE',
              sortsrc: require('../assets/image/product/2020725 _1_200725_20.jpg'),
              sortlink: '/shopcard'
            }
          ]
        },
        {
          sortTitle: 'KEYCHAIN',
          sortCards: [
            {
              sortName: 'GREEN',
              sortsrc: require('../assets/image/product/2020725 _1_200725_37.jpg'),
              sortlink: '/'
            },
            {
              sortName: 'BLUE',
              sortsrc: require('../assets/image/product/2020725 _1_200725_38.jpg'),
              sortlink: '/'
            }
          ]
        },
        {
          sortTitle: 'BADGE',
          sortCards: [
            {
              sortName: 'MIME',
              sortsrc: require('../assets/image/product/2020725_200725_1.jpg'),
              sortlink: '/'
            },
            {
              sortName: 'BUBBLETEA',
              sortsrc: require('../assets/image/product/2020725_200725_2.jpg'),
              sortlink: '/'
            },
            {
              sortName: 'BIGNOSE',
              sortsrc: require('../assets/image/product/2020725_200725_3.jpg'),
              sortlink: '/'
            },
            {
              sortName: 'PLANET',
              sortsrc: require('../assets/image/product/2020725_200725_4.jpg'),
              sortlink: '/'
            }
          ]
        }

      ]
    }
  }
}
</script>

<style lang="scss">
#shop{
  .sortTitle{
    width: 100%;
    background: #333;
    color: #fff;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    padding: 0.2rem 0;
    font-size: 1.6rem;
    border-radius: 1rem 0;
    &:hover{
      background: orange;
      color: #333;
      a{
        color: #333;
      }
    }
  }
  .card-body{
    // background: rgba($color: #333, $alpha: 0.6);
    h4{
      display: none;
    }
  }

  .card-title{
    position: absolute;
    top: calc(50% - 0.7rem);
    right: 0;
    left: 0;
    font-size: 1.4rem;
    text-shadow: 0 0 5px rgb(0, 0, 0);
  }

  a{
    color: white;
    display: block;
  }

  .card{
    background: transparent;
    border: 0;
    img{
      border-radius: 1rem 0;
    }
  }
  .card-body:hover{
    background: rgba($color: #fff, $alpha: 0.7);
      border-radius: 1rem 0;
    .card-title{
      color: #333;
      text-shadow: 0 0 0;
    }
    h4{
      display: inline;
    }
  }
}
</style>
