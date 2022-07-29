import {axiosService} from './axios.service'


const accessTockenKey= 'access'
const refreshTockenKey = 'refresh'

const authService={

    login:(user) => axiosService.post(urls.auth, user)
    register:(user)=> axiosService.post(urls.users, user)

    setTokens:({access, refresh}) =>
        localStorage.setItem(_accessTockenKey, access)
        localStorage.setItem(_refreshTockenKey, refresh)
},
deleteTockens:()=>{
    localStorage.removeItem(_accessTockenKey)
    localStorage.removeItem(_refreshTockenKey)
},

getAccessTocken:()=>localStorage.getItem(_accessTockenKey),
getRefreshTocken:()=>localStorage.getItem(_refreshTockenKey),
