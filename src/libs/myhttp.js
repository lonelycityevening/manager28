// 导入axios
import axios from 'axios'
axios.defaults.baseURL="http://localhost:8888/api/private/v1/"
export default {
  install(Vue) {
    Vue.prototype.$http = axios
  }
}