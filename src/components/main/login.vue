<template>
  <div>
    登录
    <button @click="login">登录</button>
  </div>
</template>

<script>
import lay_head from "@/components/layout/head";
import { Tabbar, TabItem, Toast } from "mint-ui";
import Store from "storejs";
export default {
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    login() {
      //1000 账号不存在
      //2000 登录成功
      //3000 密码错误
      this.$apis.login({ username: "msea", password: "123456" }).then(res => {
        if (res.data.code === "1000") {
          this.$router.push("/edit");
        } else if (res.data.code === "2000") {
          Store.set("userInfo", res.data.userInfo);
          this.$router.push("/my");
        } else if (res.data.code === "3000") {
          Toast(res.data.msg);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
