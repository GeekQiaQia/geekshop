// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: 'wx3d242bf00c0bc844', // 小程序 appid
    secret: '7bfaaf9ebd1b0dfaa77edacdc72380ed', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: 'test1574788', // 对应快递鸟用户后台 用户ID
    appkey: '8d019395-1e29-4643-90de-4588a4d51395', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
