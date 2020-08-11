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
        avatarUrl: '',
        nickName:'',
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
        this.getStorage()
    },
    getStorage:function(e) {
        var nickName = wx.getStorageSync('nickName')
        var avatarUrl = wx.getStorageSync('avatarUrl')
        this.setData({
            loginIs:true,
            nickName:nickName,
            avatarUrl:avatarUrl
        })
        
        // try {
        //     var value = wx.getStorageSync('nickName')
        //     if (value) {
        //       this.setData({
        //         userInfo:value
        //       })
        //     }
        //   } catch (e) {
        //     // Do something when catch error
        //   }
    },
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
                        _openid: 'o5Bj84tF2bD54h6SNYVoIa7bHt6o'
                    }).get({
                        success: function (res) {
                            // console.log(res)
                            wx.setStorageSync('nickName', res.data[0].nickName); 
                            //将获取信息写入本地缓存 
                            wx.setStorageSync('openid', res.data[0]._openid);
                            wx.setStorageSync('avatarUrl', res.data[0].avatarUrl);
                        }
                    })
                })
            this.setData({
                loginIs: true,
                nickName: e.detail.userInfo.nickName,
                avatarUrl: e.detail.userInfo.avatarUrl
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