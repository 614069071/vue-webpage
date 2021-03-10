import axios from 'axios';

const action = '/cgi-bin/cdata.cgi';
const serve = axios.create({ timeout: 6000 });

serve.interceptors.request.use(config => config, err => Promise.reject(err));

serve.interceptors.response.use(response => {
  if (response.code) {
    return Promise.reject(response);
  } else {
    return response;
  }
}, err => {
  return Promise.reject(err);
});

export default (data, params = {}, method = 'post') => serve({ url: action, data, params, method });