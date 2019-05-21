function MyPromise(callback) {
  var self = this,
    state = null,
    param = null,
    nextResolve = null,
    nextReject = null,
    // 记录then方法的参数
    asyncOnFulfilled = null,
    asyncOnReject = null;

  if (typeof callback != "function") {
    throw new Error('');
  }
  // 执行并改变promise的状态
  callback(resolve, reject);
  // resolve 方法
  function resolve(data) {
    state = true;
    param = data;
    if (nextResolve) {
      doAsyncOnFulfilled(asyncOnFulfilled, nextResolve, nextReject);
    }
  }
  function reject(err) {
    state = false;
    param = err;
    if (nextReject) {
      doAsyncOnReject(asyncOnReject, nextResolve, nextReject);
    }
  }
  function doAsyncOnFulfilled(onFulfilled, resolve, reject) {
    window.setTimeout(function () {
      // 判断onFulfilled是否为function 如果不是 就忽略
      if (typeof onFulfilled === 'function') {
        // 执行onFulfilled方法获取返回值promise()
        var promise = onFulfilled(param);
        // 如果promise 为undefined 执行if
        // 如果promise 为MyPromise对象 执行else if
        // 如果promise 为非MyPromise对象 执行else
        if (!promise) {
          resolve(promise);
        } else if (promise.constructor === self.constructor) {
          // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的状态，执行resolve或reject
          promise.then(function (param) {
            resolve(param);
          }, function (param) {
            reject(param);
          })
        } else {
          // 直接执行then方法返回对象的resolve
          resolve(promise);
        }
      } else {
        resolve(param);
      }
    }, 0)
  }

  function doAsyncOnReject(onReject,resolve,reject){
    window.setTimeout(function () {
      if (typeof onReject === 'function') {
        var promise = onReject(param);
        if (!promise) {
          reject(promise);
        } else if (promise.constructor === self.constructor) {
          promise.then(function (param) {
            resolve(param);
          }, function (param) {
            reject(param);
          })
        } else {
          reject(promise);
        }
      } else {
        reject(param);
      }
    }, 0)
  }

  // then 方法
  this.then = function (onFulfilled, onReject) {
    // 返回一个新的Promise
    return new self.constructor(function (resolve, reject) {
      // 判断异步代码是否执行完毕(是否resolve或reject)
      // 若执行完毕，就在then方法立即执行，否则就将参数记录下来，等待state就绪再执行****函数
      if (state === null) {
        nextResolve = resolve;
        nextReject = reject;
        asyncOnFulfilled = onFulfilled;
        asyncOnReject = onReject;
      } else if (state) {
        doAsyncOnFulfilled(onFulfilled, resolve, reject);
      } else {
        doAsyncOnReject(onReject, resolve, reject);
      }
    })
  }

}
