// pages/food/food.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey: 0,
        mainActiveIndex: 0,
        activeId: null,
        imageURL: '../images/milktea.png',
        sidebarItem: ['搜索', '鲜果茶缘', '醇香奶茶', '原沏茗作', '现磨咖啡', '牛奶手作茶', '活力益菌多', '益小料'],
        show: false,
        chooseMian:['常规','加仙草','加布丁','加椰果','加燕麦','加珍珠','加红豆','加蜂蜜冻','加多肉晶球','加西米明珠'],
        chooseSugar:['全糖','7分糖','5分糖','3分糖','不加额外糖'],
        chooseTem:['冰','少冰'],
        mlikteaList:[
            {},
            {},
            {},
            {},
            {}
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onChange(event) {
        console.log(event)
    },
    onChangeFood(event) {
        // console.log(event.detail);
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