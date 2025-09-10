// utils: công cụ
// Thằng nào thực hiện request thì đưa vào thư mục utils

// https://tiktok.fullstack.edu.vn/api/users/search?q=sontung&type=less

// utils = tầng kỹ thuật (cách gửi request). - Thằng utils này chỉ có https://tiktok.fullstack.edu.vn/api/
// apiServices = tầng business (gọi API nào, lấy dữ liệu gì).- Còn thằng này sẽ xly api/users/search?q=sontung&type=less
import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL)


const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL // https://tiktok.fullstack.edu.vn/api/
})

// Taoh hàm get luôn trả về một Promise
export const get = async (path, options = {}) => {  // khi gọi hàm này nó sẽ trả về 1 promise, k cần .then
    const response = await request.get(path, options) //  hàm get ở đây là của Axios instance
    return response.data // nó là Promise.resolve(response.data)
}


export default request