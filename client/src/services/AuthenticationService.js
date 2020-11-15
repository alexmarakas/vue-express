import api from '@/services/api'

export default {
    login(credentials) {
        return api().post('users/login', credentials)
    },
    getUsers() {
        return api().get('users')
    }
}