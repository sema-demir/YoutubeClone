import axios from "axios";

//istek için gerekli ayarlar
const options = {
  headers: {
    'X-RapidAPI-Key': 
    'e4f5ce1768msh41219fbd34033ffp143b1bjsn94b55b3d9b12',

    'X-RapidAPI-Host': 
    'yt-api.p.rapidapi.com'
  }
};

  //isteklerin baslangıc kısmı
  axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com'

  export const getData = async (endpoint) => {
    try{
    const res = await axios.get(endpoint, options)

    return res.data;
    } catch (err) {
        console.log('verileri çekerken sorun olustu', err)
    }
    
  }
  