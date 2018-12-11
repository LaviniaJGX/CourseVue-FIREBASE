import Courseservice from '@/services/courseservice'
// console.log(postUser)
export default{
 async setCuruser ({commit}, payload) {
  //  console.log(payload)
  let {status, data} = await Courseservice.postUser(payload)
  if(status===200&&data.data){
    payload = data.data
    commit('SET_CURUSER', payload)
  }
 }
}
