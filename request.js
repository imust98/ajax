const buildUrl = function (url = '', query = {}) {
  let ret = [];
  Object.keys(query).forEach(key => {
    ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(query[key]));
  });
  return url + ret.join('&');
}
const request = function (config = {}) {
  return new Promise(function (resolve, reject) {
    let opt = Object.assign(config, {

    })
    let xhr = new XMLHttpRequest();
    xhr.open(opt.method.toLowerCase(), buildUrl(opt.url, opt.query), true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState !==4) return;
      let resData = null;
      try{
        resData = JSON.parse(xhr.responseText || '{}'); 
      } catch(e) {
        resData = {};
      }
      resolve(resData)
    }
    xhr.onerror = function (res) {
      reject(new Error('msg'));
      xhr = null;
    }
    xhr.send(!opt.data ? null : opt.data);
  });


}
// export default request;