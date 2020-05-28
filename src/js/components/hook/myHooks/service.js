import axios from "axios"

// 获取笑话列表数据
export function getAllData(url,params){
    url = url + `?appkey=MP5UF3AZX9QQ&type=幽默`
    let query = ''
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const element = params[key];
            query += element ? `&${key}=${element}` : ''
        }
    }
    url = url + query
    return axios.get(url)
}