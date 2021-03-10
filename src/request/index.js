import md5 from 'js-md5';
import _request from './request';

// 登录(校验密码)
export function login(password) {
  var str_md5 = md5('root' + password);
  var parmas = { operation: 'login', function: 'set', usrid: str_md5 };

  return _request(parmas);
}

// 修改管理密码
export function setAccount(password) {
  var modfiy_parmas = { operation: 'login_modfiy', user: 'admin', password: password };

  return _request(modfiy_parmas)
}

// 重启路由器
export function restartRoute() {
  var params = { operation: 'device_opt', action: 'reboot' };

  return _request(params);
}

// 恢复出厂设置(重置)
export function restoreRoute() {
  var params = { operation: 'device_opt', action: 'default' };

  return _request(params);
}

// 首页获取路由信息
export function getRouterInfo() {
  var parmas = { operation: 'route_info', function: 'get' };

  return _request(parmas);
}

// 获取设备状态信息（）
export function getDeviceInfo() {
  var parmas = { operation: 'dev_info', function: 'get' };

  return _request(parmas);
}

// lan口设置 获取DHCP信息
export function getLanInfo() {
  var parmas = { operation: 'dhcpd', function: 'get' };

  return _request(parmas);
}

//  lan口设置 => 设置lan口信息
export function setLanInfo(parmas) {
  return _request(parmas);
}

// lan口设置 => 获取dhcp设备列表
export function getOlineList() {
  var parmas = { operation: 'get_host', function: 'get' };

  return _request(parmas);
}

// wan口设置 设置dhcp
export function setConnectDhcp() {
  var parmas = {
    operation: 'wan_setup',
    function: 'set',
    mode: 1,
  };

  return _request(parmas);
}

// wan口设置 宽带拨号
export function setConnectPPPoE(account, password) {
  var params = {
    operation: "wan_setup",
    function: "set",
    user: account,//待确认
    passwd: password,//待确认
    mode: 2,
    mtu: '1480',//宽带1480 自动和静态1500
    dns: '',
    dns1: '',
    mac: '',
    pppoe_server: '',
    math: Math.random()
  };

  return _request(params);
}

// 设置静态IP
export function setConnectStatic(parmas) {
  return _request(parmas);
}

// 软件升级 => 上传文件
export function uploadFile(file) {
  const parmas = { type: 'upload', function: 'upgrade' };
  const formData = new FormData();
  formData.append('file', file);


  return _request(formData, parmas);

  // return new Promise(function (resolve, reject) {
  //   $.ajax({
  //     type: 'post',
  //     url: url,
  //     timeout: 3000,
  //     data: formData,
  //     dataType: "json",
  //     contentType: false,
  //     processData: false,
  //     success: function (res) {
  //       resolve(res);
  //     },
  //     error: function (err) {
  //       reject(err);
  //     },
  //     complete: function (xhr) {
  //       xhr.abort();
  //     }
  //   });
  // });
}

//  软件升级 => 升级
export function upgradeStart() {
  const parmas = { type: 'mtd_write', function: 'upgrade' }

  return _request({}, parmas);
}

// 检测版本（测试接口，无效）
export function detectionVersion() {
  const parmas = {};

  return _request(parmas);
}