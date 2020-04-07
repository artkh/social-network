import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "1dd127c8-5cd4-4a97-bd64-42390a8b2174"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  }
}

// export const getUsers = (currentPage, pageSize) => {
//   return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
// }