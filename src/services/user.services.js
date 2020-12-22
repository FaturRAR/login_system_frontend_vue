import axios from 'axios';

const URI = 'http://localhost:8080/api';

class UserService {

    getUser(token){
        return axios(
            {
                method: 'GET', 
                url: `${URI}/user`, 
                headers: {'x-access-token': token}
            }
        )
    }

    register(data){
        return axios(
            {
                method: 'POST', 
                url: `${URI}/register`, 
                data
            }, 
        )
    }

    login(data){
        return axios(
            {
                method: 'POST', 
                url: `${URI}/login`, 
                data
            }, 
        )
    }

    deleteUser(id, token){
        return axios(
            {
                method: 'DELETE',
                url: `${URI}/${id}`, 
                headers: {'x-access-token': token}
            }
        ) 
    }
}

export default new UserService;