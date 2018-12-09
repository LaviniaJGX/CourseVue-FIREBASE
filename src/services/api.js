import axios from 'axios'
export const baseURL = 'http://endend.herokuapp.com'
export default() => {
  return axios.create({
    baseURL
  })
}
