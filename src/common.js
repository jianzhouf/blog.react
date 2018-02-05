import axios from 'axios'
import { Modal } from 'antd'
export function fetch(url, data, success, method) {
    method = method ? method : 'get'
    let baseData = {}
    if (data != null)
        baseData = method === 'get' ? { params: data } : { data }
    axios({
        url,
        method,
        baseURL: '//localhost:3000/',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        ...baseData,
        withCredentials: true,
    }).then(res => {
        if (res.data.code === 0) {
            success(res.data)
        } else {
            Modal.error({
                title: '请求错误',
                content: res.data.message || '未知错误',
            })
        }
    })
}