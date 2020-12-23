import axios from 'axios';

const URI = 'https://loginsystemrar.herokuapp.com/api';

class UserService {
    getOne(email){
        return axios(
            {
                method: 'GET',  
                url: `${URI}/user/${email}`, 
            }
        )
    }

    getAllUser(token){
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

    changePassword(id, data){
        return axios(
            {
                method: 'PUT',
                url: `${URI}/password/${id}`, 
                data
            }
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