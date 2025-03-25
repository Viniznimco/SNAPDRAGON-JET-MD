const axios = require('axios');
const getBuffer = async (_0x33e6d2, _0x46fe71) => {
  try {
    if (_0x46fe71) {
      _0x46fe71;
    } else {
      ({});
    }
    var _0x300c74 = await axios({
      'method': "get",
      'url': _0x33e6d2,
      'headers': {
        'DNT': 0x1,
        'Upgrade-Insecure-Request': 0x1
      },
      ..._0x46fe71,
      'responseType': "arraybuffer"
    });
    return _0x300c74.data;
  } catch (_0x17a528) {
    console.log(_0x17a528);
  }
};
const getGroupAdmins = _0x20060a => {
  var _0x51cbf8 = [];
  for (let _0x5a5309 of _0x20060a) {
    if (_0x5a5309.admin !== null) {
      _0x51cbf8.push(_0x5a5309.id);
    } else {
      '';
    }
  }
  return _0x51cbf8;
};
const getRandom = _0x37cd2c => {
  return '' + Math.floor(Math.random() * 0x2710) + _0x37cd2c;
};
const h2k = _0x539fb5 => {
  var _0x31647b = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  var _0x15c6a0 = Math.log10(Math.abs(_0x539fb5)) / 0x3 | 0x0;
  if (_0x15c6a0 == 0x0) {
    return _0x539fb5;
  }
  var _0x68c738 = _0x31647b[_0x15c6a0];
  var _0xaeb9b8 = Math.pow(0xa, _0x15c6a0 * 0x3);
  var _0x442cc1 = _0x539fb5 / _0xaeb9b8;
  var _0x1d4649 = _0x442cc1.toFixed(0x1);
  if (/\.0$/.test(_0x1d4649)) {
    _0x1d4649 = _0x1d4649.substr(0x0, _0x1d4649.length - 0x2);
  }
  return _0x1d4649 + _0x68c738;
};
const isUrl = _0x3bdebf => {
  return _0x3bdebf.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
};
const Json = _0x42b5a6 => {
  return JSON.stringify(_0x42b5a6, null, 0x2);
};
const runtime = _0x226b46 => {
  _0x226b46 = Number(_0x226b46);
  var _0x3acd58 = Math.floor(_0x226b46 / 86400);
  var _0x11147a = Math.floor(_0x226b46 % 86400 / 0xe10);
  var _0x37267d = Math.floor(_0x226b46 % 0xe10 / 0x3c);
  var _0x184eb1 = Math.floor(_0x226b46 % 0x3c);
  var _0x19babd = _0x3acd58 > 0x0 ? _0x3acd58 + (_0x3acd58 == 0x1 ? " day, " : " days, ") : '';
  var _0x46d4b5 = _0x11147a > 0x0 ? _0x11147a + (_0x11147a == 0x1 ? " hour, " : " hours, ") : '';
  var _0x588563 = _0x37267d > 0x0 ? _0x37267d + (_0x37267d == 0x1 ? " minute, " : " minutes, ") : '';
  var _0x15c885 = _0x184eb1 > 0x0 ? _0x184eb1 + (_0x184eb1 == 0x1 ? " second" : " seconds") : '';
  return _0x19babd + _0x46d4b5 + _0x588563 + _0x15c885;
};
const sleep = async _0x5c6709 => {
  return new Promise(_0x27c9ea => setTimeout(_0x27c9ea, _0x5c6709));
};
const fetchJson = async (_0xa926b, _0x320719) => {
  try {
    if (_0x320719) {
      _0x320719;
    } else {
      ({});
    }
    const _0x3596c3 = await axios({
      'method': "GET",
      'url': _0xa926b,
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x320719
    });
    return _0x3596c3.data;
  } catch (_0x206360) {
    return _0x206360;
  }
};
module.exports = {
  'getBuffer': getBuffer,
  'getGroupAdmins': getGroupAdmins,
  'getRandom': getRandom,
  'h2k': h2k,
  'isUrl': isUrl,
  'Json': Json,
  'runtime': runtime,
  'sleep': sleep,
  'fetchJson': fetchJson
};
