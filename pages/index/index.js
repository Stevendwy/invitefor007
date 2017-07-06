//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    datalist:[{
      name: "汽配商",
      clickid:1,
    },{
        name: "修理厂",
        clickid: 2,
    },{
        name: "4S店",
        clickid: 3,
    },{
        name: "其他",
        clickid: 4,
    }],
    userclickid:0,
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  typeClick:function(e){
    console.log(`点击了${e.target.dataset.idx}`)
    this.setData({
      userclickid: e.target.dataset.idx
    })
  },
  formSubmit:function(e){
    var inputphone = e.detail.value.inputphone;
    var inputname = e.detail.value.inputname;
    var inputfactory = e.detail.value.inputfactory;
    var inputcity = e.detail.value.inputcity;
    if (inputphone.length==0){
      wx.navigateTo({
        url: '../topay/index'
      })
      // wx.showToast({

      //   title: '手机号码或密码不得为空!',

      //   icon: 'loading',

      //   duration: 1500

      // })
      // setTimeout(function () {

      //   wx.hideToast()

      // }, 2000)
    }else{
      wx.navigateTo({
        url: '../logs/logs'
      })
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
