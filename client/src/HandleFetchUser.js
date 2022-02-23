import axiosInstance from './Components/AxiosInstance';

const HandleApiUser = 
    axiosInstance
        .get(`/user_info`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
        console.log(error);
        });

export default HandleApiUser;