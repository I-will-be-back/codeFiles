import originalJsonp from 'jsonp';
import { CODE_SUCCESS } from './config';

const jsonp = (url, data, option) => {
  return new Promise((resolve, reject) => {
    originalJsonp(buildUrl(url, data), option, (err, res) => {
      if (!err) {
        if (res && res.code === CODE_SUCCESS) {
          resolve(res);
        } else {
          reject('接口出现错误!');
        }
      } else {
        reject(err);
      }
    })
  })
}

/**
 * url baidu.com
 * data {a: 1, b: 2}
 * baidu.com?a=1&b=2
 */
function buildUrl(url, data) {
  let param = [];
  for (let k in data) {
    // 注意转码
    param.push(`${k}=${encodeURIComponent(data[k])}`);
  }
  let paramStr = param.join('&');
  if (url.indexOf('?') === -1) {
    url += `?${paramStr}`;
  } else {
    url += `&${paramStr}`;
  }
  return url;
}

export default jsonp;