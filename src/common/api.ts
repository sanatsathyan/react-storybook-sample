
import axios from 'axios'

export const getAxios = async (url: string, params?: any) => {
  // for(let i = 0; i < 50000; i++) {
  //   console.warn(i)
  // }
  const res = await axios.get(url, {
    params
  });
  return res.data;
}