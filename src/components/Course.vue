<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <course-form :course="course" courseBtnTitle="Make Course"
                         @course-is-created-updated="submitCourse"></course-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import CourseService from '@/services/CourseService.js'
import CourseForm from '@/components/CourseForm'

export default {
  data () {
    return {
      course: { courseTitle: '',
        classHours: 0,
        studentNumbers: 0,
        studentCategory: 'undergraduate',
        teacherName: '',
        teacherType: 'admin',
        message: ''},
      messagetitle: ' Make Course '
    }
  },
  components: {
    'course-form': CourseForm
  },
  methods: {
    submitCourse: function (course) {
      CourseService.postCourse(course)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
