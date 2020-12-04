import axios from '@/utils/myaxios'

export function name (data) {
  return axios({
    url: '',
    method: 'post',
    data
  })
}
