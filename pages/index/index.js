//index.js
//获取应用实例
const app = getApp()

// pages/start/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    image: '',
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // bindgetuserinfo() {
  //   var that = this;
  //   wx.getUserInfo({
  //     success(res) {
  //       console.log("aaa")
  //       wx.u.getUserInfo().then(res1 => {
  //         var bmobUser = res1.result;
  //         console.log("ccc")
  //         if (bmobUser.avatarUrl == '' || bmobUser.avatarUrl == undefined) {
  //           wx.u.changeUserInfo(res.userInfo.avatarUrl, res.userInfo.nickName).then(res2 => { });
  //         }
  //       })
  //       that.setData({
  //         userInfo: res.userInfo
  //       })
  //       console.log("bbb"+that.setData.userInfo)
  //     }
  //   })
  // },

  bindgetuserinfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码
    // 声明一个变量接收用户授权信息
    var userinfos = e.detail.userInfo;
    console.log("bbb" + userinfos.avatarUrl)
    // // 判断是否授权  true 替换微信用户头像
    if (userinfos != undefined) {
      console.log("ccc")
      this.setData({
        image: userinfos.avatarUrl
      })
    }
    // } else {
    //   // false 默认头像
    //   this.setData({
    //     image: "../../image/list_img.png"
    //   })
    // }
  },

  goSign() {
    wx.reLaunch({
      url: '/pages/select/index',
    })
  }
})
