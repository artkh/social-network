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
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put('/profile/status', {status: status}).then(response => response.data);
  },
  savePhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },
  updateProfile(newDataProfile) {
    return instance.put('/profile', newDataProfile).then(response => response.data); //передаем объект из формы, не оборачивая в фигурные скобки, иначе будет объект в объекте, а дальше ошибка
  }
}

export const loginAPI = {
  getLogin() {
    return instance.get('auth/me').then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe }).then(response => response.data);
  },
  logout() {
    return instance.delete('auth/login').then(response => response.data);
  }
}