<template lang="pug">
  #homemenu
    a(v-b-toggle href="#example1"  @click.prevent rounded)
      b-icon.rounded-circle.bg-info.p-2(v-if="icondrop" icon="caret-down-fill" variant="warning" font-scale="2.5" @click="iconselect()")
      b-icon.rounded-circle.bg-success.p-2(v-else icon="person" variant="dark" font-scale="2.5" @click="iconselect()")
    b-collapse(id="example1" visible)
      router-link(to="/adminsort")
        b-icon.my-1(icon="search" variant="dark" font-scale="1.5")
      br
      router-link(to="/member/membercenter")
        b-icon.my-1(icon="heart" variant="dark" font-scale="1.5")
      br
      router-link(to="/adminproduct")
        b-icon.my-1(icon="cart" variant="dark" font-scale="1.5")
      br
      router-link(to="/login" v-if="account.length===0")
        b-icon.my-1(icon="person" variant="dark" font-scale="1.5")
      router-link(to="/admin/adminsort" v-else-if="account==='admin1234'")
        b-icon.my-1(icon="person-check" variant="dark" font-scale="1.5")
        br
        b-icon.my-1(icon="box-arrow-up-right" variant="dark" font-scale="1.5" @click="logout")
      router-link(to="/member/membercenter" v-else)
        b-icon.my-1(icon="person-check" variant="dark" font-scale="1.5")
        br
        b-icon.my-1(icon="box-arrow-up-right" variant="dark" font-scale="1.5" @click="logout")
</template>

<script>
export default {
  data () {
    return {
      icondrop: true
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    }
  },
  methods: {
    iconselect () {
      this.icondrop = !this.icondrop
    },
    logout () {
      this.axios.delete(process.env.VUE_APP_APIURL + '/logout')
        .then(response => {
          const data = response.data
          // 如果回來的資料 success 是 true
          if (data.success) {
            alert('登出成功')
            // 呼叫 vuex 的登出
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登出後的首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    }
  }
}
</script>

<style lang="scss">
#homemenu{
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 100;
}
</style>
