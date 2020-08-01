<template lang="pug">
  #app
    b-navbar(class="flex row flex-wrap m-2")
      div(class="col-12")
        router-link(to="/")
          b-img(src="../public/img/logo.png" id="logo")
      #menu02(class="col-12")
        router-link(to="/announcement" class="mx-2") 活動公告
        router-link(to="/shop" class="mx-2") 原創商品
        router-link(to="/collection" class="mx-2") 作品展示
        router-link(to="/notice" class="mx-2") 購物說明
    HomeMenu
    router-view(:screenWidth="screenWidth")
    #footer(class="flex row no-gutters justify-content-around")
      .footer-contact(class="col-6")
        h4 Contact us
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae iusto quia fuga harum, ea, quam culpa maxime ducimus iste nesciunt dolor natus.
      .footer-connect(class="col-6")
        h4 Follow us
        b-link(href="https://www.instagram.com/accounts/login/?next=/zuzuzuzu_tw/" target="_blank")
          img(src="../public/img/instagram.svg" width="40px")
</template>

<script>
import HomeMenu from '../src/components/HomeMenu'
export default {
  components: {
    HomeMenu
  },
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    }
  },
  methods: {
    heartbeat () {
      this.axios.get(process.env.VUE_APP_APIURL + '/heartbeat')
        .then(response => {
          const data = response.data
          // 如果是登入中
          if (this.account.length > 0) {
            // 如果後端登入時間過期
            if (!data) {
              alert('登入時效已過')
              // 前端登出
              this.$store.commit('logout')
              // 如果現在不是在首頁，跳到登出後的首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch((error) => {
          console.log(error)
          alert('發生錯誤')
          this.$store.commit('logout')
          // 如果現在不是在首頁，跳到登出後的首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 1000 * 5)
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        const that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c1111;
  background: #cfc1c4;
  overflow: hidden;
  height: 100%;
}

#logo{
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
}

#menu02{
  // background: #000000;
  a{
    color: #2c1111;
    font-size: 1.2rem;
  }
}

#footer{
  background:rgba($color: #333, $alpha: 0.5);
  padding: 2rem 0;
}
@media (max-width: 768px) {
  .try{
  background: rgba($color: rgb(43, 77, 30), $alpha: 0.5);
}
}

.logout-point{
cursor: pointer;
}
</style>
