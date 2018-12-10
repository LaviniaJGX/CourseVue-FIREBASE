import axios from 'axios'
export const baseURL = 'http://vuecoursestest.herokuapp.com'
export default() => {
  return axios.create({
    baseURL
  })
}
