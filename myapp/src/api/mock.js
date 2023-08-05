import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission from './mockServeData/permission'

// 定义mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

// 用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
// mock可以拦截请求 模拟前后端数据交互  模拟出这个数据
Mock.mock(/api\/users\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)