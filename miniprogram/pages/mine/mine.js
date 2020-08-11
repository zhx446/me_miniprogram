// pages/mine/mine.js
const app = getApp();
// 获取数据库引用
const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loginIs: false,
        info: ['积分', '储值金', '优惠券'],
        userInfo: {},
        cell: [{
                title: '会员等级',
                icon: 'gem-o'
            },
            {
                title: '福利社',
                icon: 'bill-o'
            },
            {
                title: '会员码',
                icon: 'qr'
            },
            {
                title: '积分商城',
                icon: 'shop-o'
            },
            {
                title: '我的订单',
                icon: 'orders-o'
            },
            {
                title: '收货地址',
                icon: 'location-o'
            },
            {
                title: '兑换码',
                icon: 'coupon-o'
            },
            {
                title: '集点送',
                icon: 'point-gift-o'
            },
            {
                title: '微商城',
                icon: 'bag-o'
            },
            {
                title: '邀请有礼',
                icon: 'friends-o'
            }

        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setLogin()
    },
    // setLogin:function(e) {
    //     wx.login({
    //         success (res) {
    //           if (res.code) {
    //             //发起网络请求
    //             wx.request({
    //               url: 'GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //               data: {
    //                 code: res.code
    //               }
    //             })
    //           } else {
    //             console.log('登录失败！' + res.errMsg)
    //           }
    //         }
    //       })
    // },
    userLogin: function (e) {
        if (e.detail.userInfo) {
            db.collection('users').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                        nickName: e.detail.userInfo.nickName,
                        avatarUrl: e.detail.userInfo.avatarUrl,
                        phoneNumber: '',
                        realName: '',
                        time: new Date()
                    }
                })
                .then(res => {
                    db.collection('users').where({
                        _openid:'o5Bj84tF2bD54h6SNYVoIa7bHt6o'
                      }).get({
                        success: function(res) {
                        // 输出 [{ "title": "The Catcher in the Rye", ... }]
                        console.log(res)
                       }
                      })
                })
            this.setData({
                loginIs: true,
                userInfo: e.detail.userInfo
            })
            app.userInfo = e.detail.userInfo
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})