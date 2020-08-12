// pages/food/food.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey: 0,
        mainActiveIndex: 0,
        activeId: null,
        imageURL: '/pages/images/milktea.png',
        sidebarItem: ['搜索', '鲜果茶缘', '醇香奶茶', '原沏茗作', '现磨咖啡', '牛奶手作茶', '活力益菌多', '益小料'],
        show: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onChange(event) {
        console.log(event)
    },
    onShowFood() {
        console.log(1111)
        this.setData({
            show: true
        });
    },

    onClose() {
        this.setData({
            show: false
        });
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