import {
  SET_CURUSER
} from './Mutation-Type'
export default {
  [SET_CURUSER] (state, payload) {
    localStorage.setItem('jwt', JSON.stringify(payload));
    // console.log(payload)
    state.token = payload
  }
}
