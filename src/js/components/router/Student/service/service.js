import axios from 'axios'
//创建axios实例
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})
//获取电影的接口
async function fetchAllMovies(){
  const data = await axios.get("/j/search_subjects",{
                        params:{type:'movie','tag':'热门','page_limit':50,'page_start':0},
                      })
  .then(resp => resp.data.subjects)
  return data
}

export default {fetchAllMovies}
