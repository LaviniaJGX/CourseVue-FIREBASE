<template>
  <form @submit.prevent="submit">
    <div class="form-group" >
      <label class="form__label">Course Title</label>
      <input class="form__input" type="text" v-model.trim="courseTitle"/>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.classHours.$error }">
      <label class="form-control-label" name="classHours">Class Hours (Enter a number between 1 and 100)</label>
      <input class="form__input" type="number" v-model.trim="classHours"/>
    </div>
    <div class="error" v-if="!$v.classHours.between">Class Hours must be between 1 and 100</div>
    <div class="form-group" :class="{ 'form-group--error': $v.studentNumbers.$error }">
      <label class="form-control-label" name="studentNumbers">Student Numbers (Enter a number between 1 and 1000)</label>
      <input class="form__input" type="number" v-model.trim="studentNumbers"/>
    </div>
    <div class="error" v-if="!$v.studentNumbers.between">Student Numbers must be between 1 and 1000</div>
    <div class="form-group">
      <label class="form-label">Select Student Category</label>
      <select id="studentCategory" name="studentCategory" class="form-control" type="text" v-model="studentCategory">
        <option value="null" selected disabled hidden>Choose Student Category</option>
        <option value="undergraduate">undergraduate</option>
        <option value="postgraduate">postgraduate</option>
      </select>
    </div>
    <div class="form-group" >
      <label class="form__label">Teacher Name</label>
      <input class="form__input" type="text" v-model.trim="teacherName"/>
    </div>
    <div class="form-group">
      <label class="form-label">Select Teacher Type</label>
      <select id="teacherType" name="teacherType" class="form-control" type="text" v-model="teacherType">
        <option value="null" selected disabled hidden>Choose Teacher Type</option>
        <option value="common">common</option>
        <option value="admin">admin</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.message.$error }">
      <label class="form__label">Personal Message</label>
      <input class="form__input" placeholder="enter some message here" v-model.trim="$v.message.$model"/>
    </div>
    <div class="error" v-if="!$v.message.required">Message is Required</div>
    <div class="error" v-if="!$v.message.minLength">Message must have at least {{$v.message.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ courseBtnTitle }}</button>
    </p>
    <p>
      <a href="#/courses" class="btn btn-primary btn1" role="button">Manage Courses</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Course Has Been Added!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['courseBtnTitle', 'course'],
  data () {
    return {
      messagetitle: ' Course ',
      message: this.course.message,
      courseTitle: this.course.courseTitle,
      classHours: this.course.classHours,
      studentNumbers: this.course.studentNumbers,
      studentCategory: this.course.studentCategory,
      teacherName: this.course.teacherName,
      teacherType: this.course.teacherType,
      submitStatus: null
    }
  },
  validations: {
    message: {
      required,
      minLength: minLength(5)
    },
    classHours: {
      required,
      between: between(1, 100)
    },
    studentNumbers: {
      required,
      between: between(1, 1000)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var course = {
            courseTitle: this.courseTitle,
            classHours: this.classHours,
            studentNumbers: this.studentNumbers,
            studentCategory: this.studentCategory,
            teacherName: this.teacherName,
            teacherType: this.teacherType,
            message: this.message
          }
          this.course = course
          console.log('Submitting in CourseForm : ' +
            JSON.stringify(this.course, null, 5))
          this.$emit('course-is-created-updated', this.course)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
