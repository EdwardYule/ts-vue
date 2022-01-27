import request from '@/utils/request'
import { AxiosPromise } from 'axios';

// 示例接口
export const temp = (data: unknown): AxiosPromise => request({
  url: '/vue-admin-template/user/login',
  method: 'post',
  data
});