import axios from 'axios'
export const baseURL = 'http://vuecoursestest.herokuapp.com'
// export const baseURL = 'http://localhost:3000'
export default() => {
  return axios.create({
    baseURL
  })
}
