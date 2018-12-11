<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input class='email-text' type="text" v-model="email" placeholder="Email"><br>
    <input class='psd-text' type="password" v-model="password" placeholder="Password"><br>
     <select id="teacherType" name="teacherType" class="form-control" type="text" v-model="role">
        <!-- <option value="null" selected disabled hidden>Choose Teacher Type</option> -->
        <option :value="1" selected>common</option>
        <option :value="2">admin</option>
      </select>
    <button @click="signUp" class="signup-btn">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: '',
      role:1
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // console.log(user)
          // trigger signup action
          this.setCuruser({account: this.email, role: this.role})
          // this.$router.replace('home')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    ...mapActions(['setCuruser'])
  },
  computed:{
    ...mapState(['token'])
  },
  created() {
    console.log(this.token)
  }
}
</script>

<style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input,
  #teacherType {
    margin: 10px auto;
    width: 20%;
    padding: 15px;
  }
  button, {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
