//去除空白符
export function _trim(str) {
  return str.replace(/\s/g, "");
}

// 空白
export function _space(str) {
  return (/\s/g).test(str);
}

// 数字密码组合
export function _validePassword(str) {
  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;

  return reg.test(str);
}

// 校验ip
export function _ip(str) {
  var reg = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
  return reg.test(str);
}

export function _toBety(size) {
  var c = 0;
  var num = size / 1000;
  var bety = ['K', 'M', 'G', 'T'];

  while (num >= 1024) {
    num /= 1024;
    c++;
  }

  return num.toFixed(2) + bety[c];
}

// 统一格式
export function formatNumber(s) {
  let n = s.toString();
  return n[1] ? n : '0' + n;
}

// 序列化时间
export function _formatTime(date) {
  // var year = date.getFullYear();
  // var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  // var minute = date.getMinutes();
  // var second = date.getSeconds();

  return { day, hour };
}


// 会话存储
export var _storages = {
  set: function (key, value) {
    if (typeof value === 'object' && value !== null) {
      sessionStorage.setItem(key, JSON.stringify(value));
      return;
    }
    sessionStorage.setItem(key, value);
  },
  get: function (key) {
    var value = sessionStorage.getItem(key) || '';
    var val = null;
    try {
      val = JSON.parse(value);
    } catch (e) {
      return value;
    }

    if (typeof val === 'number') {
      return value;
    }
    return val;
  },
  del: function (key) {
    sessionStorage.removeItem(key);
  }
}

// 将表单的数组对象格式转为对象格式
// [{name:''},{age:''}] => {name:'',age:''}
// el jquery表单节点
// export function _formArrToObject(el) {
//   var arr = el.serializeArray();
//   var form = {};
//   $(arr).each(function (i, e) {
//     form[e.name] = e.value;
//   });

//   return form;
// }

// 秒数转成天时
export function formattingTime(count) {
  var hour = parseInt(parseInt(count / 60) / 60) % 24;

  if (hour < 1) {
    hour = 0;
  }
  var day = parseInt(parseInt(parseInt(count / 60) / 60) / 24);

  return { hour: hour, day: day };
}

// 请求地址
window._action = "/cgi-bin/cdata.cgi";

// 禁止右键
export function banEvent() {
  document.ondragstart = function () { return false };
  document.onbeforecopy = function () { return false };
  document.onselectstart = function () { return false };
  document.oncontextmenu = function () { return false };
  document.oncopy = function () { document.selection && document.selection.empty(); };
  document.onselect = function () { document.selection && document.selection.empty(); };
  document.onmouseup = function () { document.selection && document.selection.empty(); }
}
