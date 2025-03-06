import AsyncStorage from "@react-native-async-storage/async-storage";
import  Axios  from "axios";

type methodType = 'post' | 'get' | 'put' | 'delete';


const axiosInstance = Axios.create({
  baseURL: 'https://honeydew-magpie-887435.hostingersite.com/api/',
})

const getFormData = (object: any) => {
  const formData = new FormData();
  Object.keys(object).forEach(key => {
    formData.append(key, object[key]);
  });
  console.log('formData===>',formData)
  return formData;
}

const APICall = async(
  method: methodType = 'post',
  body: any,
  url = '',
  formData = false,
) =>{
  const Token = await AsyncStorage.getItem('Token');
  console.log("(====>",Token)
  const staticToken = 'bANNjeQhv8573c4zP4jDaLHtDSkM4SZCTOiyVJEv0bNr4RdWpP5rG64wM0vPxVihasdasd';
  const apiMethod = method.toLowerCase();
  const config: any ={
    method: apiMethod,
    timeOut: 1000 * 60
  }
  // config.headers = 
  config.headers = formData ?
  {
    Accept : 'application/json',
    'Content-Type': 'multipart/form-data',
    "Authorization":  `Bearer ${staticToken}`,
    // ...(Token ? {Authorization: `Bearer ${Token}`}:{Authorization: `Bearer ${staticToken}`}),
  }:
  { Accept : 'application/json',
    'Content-Type': 'application/json',
    "Authorization":  `Bearer ${staticToken}`,
    // ...(Token ? {Authorization: `Bearer ${Token}`}:{Authorization: `Bearer ${staticToken}`}),
    // ...(Token ? {Authorization: `Bearer ${Token}`}:{Authorization: `Bearer ${staticToken}`}),
  }
  console.log('config===>',config)
  if(url){
    config.url = url;
  }
  if(body && !formData){
    config.data = body;
  }else if(body && formData){
    config.data = getFormData(body);
  }
  return new Promise((resolve)=>{
    axiosInstance(config)
    .then((res)=>{
      resolve({statusCode: res.status, data: res.data});
    }).catch((error)=>{
      console.log('error==>>', error);  
      resolve(error.response);
    })
  })
}


export default APICall
