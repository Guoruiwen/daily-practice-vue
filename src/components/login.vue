<template>
  <div id="building">
      <div class="login-box">
        <h2>登录系统</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" v-model="username">
            <label>账号</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" v-model="password">
            <label>密码</label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a @click="handleSubmit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            登录
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a @click="signUp_asd">注册 </a>
        </form>
      </div>
  </div>
</template>
  
<script>
var url = 'http://localhost:8080/user/login'
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    signUp_asd() {
      this.$router.replace({ path: '/register' });
    },
    open1() {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'warning'
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'success'
      });
    },
    open3() {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'error'
      });
    },

    handleSubmit() {
      let _this = this
      if (this.username === "" || this.password === "") {
        this.msg = "请输入账号密码"
        this.open3()
      } else {
        this.$post(url, {
            username: this.username,
            password: this.password
          }).then((res) => {
          //成功回调
          console.log('登陆成功');
          this.$router.push('/login');
        }, err => {
          //失败回调
        this.msg = "请确认账号密码"
        this.open3()
        })
      }
    },
  },
}
  ;
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only  -->
<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}</style>
  