
var rootDocment = 'hxxxxx';//你的域名 
// url: rootDocment + url, 
function req(url, data, cb) {
  wx.request({
    url:  url,
    data: data,
    method: 'post',
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}


module.exports = {
  req: req
}