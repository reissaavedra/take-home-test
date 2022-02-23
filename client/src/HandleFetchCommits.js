import axiosInstance from './Components/AxiosInstance';

const HandleApiCommits = 
    axiosInstance
        .get(`/commits`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
        console.log(error);
        });

export default HandleApiCommits;