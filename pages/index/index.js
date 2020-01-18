// pages/go/go.js
Page({

  onTapSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onTapGo() {
    wx.navigateTo({
      url: '/pages/go/go',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh()

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      currentTab:0
    })
    this.onLoad();
  },
})