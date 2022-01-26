import request from '@/utils/request'

// 示例接口
export const temp = (data: unknown) => request({
  url: '/vue-admin-template/user/login',
  method: 'post',
  data
});