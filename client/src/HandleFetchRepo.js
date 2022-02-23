import axiosInstance from './Components/AxiosInstance';

const HandleApiRepo = 
    axiosInstance
        .get(`/repo_info`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
        console.log(error);
        });

export default HandleApiRepo;