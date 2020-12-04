import axios from 'axios'
import {
  Loading
} from 'element-ui'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 1000000

/**
 * 设置请求传递数据的格式（看服务器要求的格式）
 * x-www-form-urlencoded
 */

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
  // const token = getToken()
  // token && (config.headers.token = token)
  return config
}, error => {
  Loading.service().close()
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return error
})

export default axios
