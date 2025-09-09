// Nơi định nghĩa gọi hàm API cụ thể

// https://tiktok.fullstack.edu.vn/api/users/search?q=sontung&type=less

// utils = tầng kỹ thuật (cách gửi request). - Thằng utils này chỉ có https://tiktok.fullstack.edu.vn/api/
// apiServices = tầng business (gọi API nào, lấy dữ liệu gì).- Còn thằng này sẽ xly api/users/search?q=sontung&type=less



import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
  try {
    const res = await request.get('users/search', {
      // await luôn nằm trước các promise
      params: {
        q: q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
