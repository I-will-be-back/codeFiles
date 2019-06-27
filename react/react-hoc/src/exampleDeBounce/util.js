/** 防抖 
 * func wait
*/
export function debounce(func, wait) {
  var result, timeout;
  return function() {
    // this
    // 参数
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      result = func.apply(context, args)
    }, wait);
    return result;
  }
}
/** 可用于装饰的 防抖 */
// 装饰器都是函数
export function decDebounce(wait) {
  return function(taget, key, descriptor) {
    var callBack = descriptor.value;
    var fn = debounce(callBack, wait);
    descriptor.value = fn;
  }
}

export function decArrowDebounce(wait) {
  return function(taget, key, descriptor) {
    // 拿到原来的
    var callBack = descriptor.initializer && descriptor.initializer();
    var fn = debounce(callBack, wait);
    // descriptor.value = fn;
    // value属性 -> 方法
    // get方法 -> 属性
    // 改变原来的 || 返回一个新的
    return {
      configurable: true,
      get: function() {
        return fn;
      }
    }
  }
}
// hoc 高阶组件 装饰整个组件
// class
// 修饰类的
export function decDisplayName(displayname) {
  return function(target) {
    target.displayName = displayname;
  }
}
