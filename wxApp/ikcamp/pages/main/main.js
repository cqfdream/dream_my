// pages/main/main.js
import util from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   articleList:[]
  },
  goDetail(e){
    // console.log(e.currentTarget.dataset.id);

    wx.navigateTo({//跳转页面
      url: '/pages/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    util.request({
      url:'https://www.fastmock.site/mock/e39e6b4180ca7bb2b79e2e56d30b217e/IKcamp/list'
    }).then((res) => {
     
      let articleList = this.formatArticleDate(res.data)
      console.log(articleList);
      this.setData({
        articleList:articleList
      })
    })
  },
  formatArticleDate(data){
   
    let formatData = null
    if (data && data.length){//数据存在且数组不为空
      formatData = data.map((group) =>{
        group.formatDate = this.dateConvert(group.date)
        return group
      })
    }
    console.log(formatData);
    return formatData
  },
  dateConvert(dateStr){//2023-04-15 => 2023年04月15日
    if (!dateStr) return
    let arr = dateStr.split('-')
    return `${arr[0]}年${arr[1]}月${arr[2]}日`
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})