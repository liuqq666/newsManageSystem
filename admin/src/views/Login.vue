<template>
    <div >
        <Particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="options"
        />

        <div class="FrameContainer">
            <h3>企业门户管理系统</h3>
        <el-form
    ref="loginFormRef"
    :model="loginForm"
    status-icon
    :rules="loginrules"
    label-width="80px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" type="username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()"
        >登陆</el-button>
    </el-form-item>
  </el-form>
        </div>

    </div>
</template>

<script setup>
import { reactive,ref } from "vue";
import {loadFull} from "tsparticles"
import { useRouter } from "vue-router";
import axios from 'axios'




//<button @click="handleLogin">login</button>
const handleLogin = ()=>{
    localStorage.setItem('token','lqq')
}

const loginForm = reactive({
    username:'',
    password:''
})

const loginFormRef = ref()

const router = useRouter()

const loginrules = reactive({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' }
  ]
})

const submitForm = function(){

    //校验表单
    loginFormRef.value.validate((vaild)=>{
        if(vaild){
            // localStorage.setItem('token','lqq');
            axios.post("/adminapi/user/login",loginForm).then(res=>{
                console.log(res.data );
            })
            // router.push('/index')
        }
    })
    //提交数据

    //设置token

}





const particlesInit = async (engine)=>{
    await loadFull(engine)
}
//粒子效果配置
const options = {
                    background: {
                        color: {
                            value: '#2d3a4b'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                
}
</script>

<style scoped>
.FrameContainer{
    width: 50%;
    height: 40%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba(238, 230, 230, 0.2);
    color: white;
    text-align: center;
    padding: 10;
}
::v-deep .el-form-item label {
    color: #ffffff;
}
h3{
    color: #ffffff;
    margin: 10px;
    font-size: 2rem;
}
</style>