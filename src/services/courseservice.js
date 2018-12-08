import Api from '@/services/api'

export default {
  fetchCourses () {
    return Api().get('/courses')
  },
  postCourse (course) {
    return Api().post('/courses', course,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchCourse (id) {
    return Api().get(`/courses/${id}`)
  },
  putCourse (id, course) {
    console.log('REQUESTING ' + course._id + ' ' +
      JSON.stringify(course, null, 5))
    return Api().put(`/courses/${id}`, course,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteCourse (id) {
    return Api().delete(`/courses/${id}`)
  }
}
