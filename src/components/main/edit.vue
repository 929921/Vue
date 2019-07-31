<template>
  <div>
    <div>注册</div>
    <button v-fileUpload="{fn:'fileUpload',multiple:true}">fileUpload</button>
    <button @click="edit">edit</button>
    <img :src="url" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:""
    };
  },
  methods: {
    edit() {
      var temp = {
        id: 101,
        username: "msea",
        password: "123456",
        avatar: " https://avatars0.githubusercontent.com/u/51230659?v=4&s=120",
        name: "长沙最靓仔"
      };
      this.$apis.edit(temp).then((res)=>{
        //4000 注册成功
        if(res.data.code==4000){
          this.$router.push("/login");
        }
      })
    },
    fileUpload(url){
      this.url=url;
      // console.log(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
