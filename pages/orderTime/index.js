// pages/orderTime/index.js
//作者：李佳明同学
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendar:[],
    width:0,
    currentIndex:0,
    currentTime: 0,
    date: '请选择预计年审日期',
    time: '请选择预计年审时间',
    // timeArr:[],
    timeArr: [{ "time": "9:00-10:00", "status": "约满" }, { "time": "10:00-11:00", "status": "约满" }, { "time": "11:00-12:00", "status": "约满" }, { "time": "12:00-13:00", "status": "约满" }, { "time": "13:00-14:00", "status": "约满" }, { "time": "14:00-15:00", "status": "约满" }, { "time": "15:00-16:00", "status": "约满" }, ],
    timeArr1: [{ "time": "9:00-10:00", "status": "约满" }, { "time": "10:00-11:00", "status": "约满" }, { "time": "11:00-12:00", "status": "约满" }, { "time": "12:00-13:00", "status": "约满" }, { "time": "13:00-14:00", "status": "约满" }, { "time": "14:00-15:00", "status": "约满" }, { "time": "15:00-16:00", "status": "约满" }, ],
    timeArr2: [{ "time": "9:00-10:00", "status": "可选" },{ "time": "10:00-11:00", "status": "可选" }],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {

    var that=this;
    function getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate();
    }
  // 计算每月第一天是星期几
    function getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
    }
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const cur_date=date.getDate();
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    //利用构造函数创建对象
    function calendar(date,week){
      this.date=cur_year+'-'+cur_month+'-'+date;
      this.week = '星期' + week;
      // if(date==cur_date){
      //   this.week = "今天";
      // }else if(date==cur_date+1){
      //   this.week = "明天";
      // }else{
      //   this.week = '星期' + week;
      // }
    }
    var da = '2022-04-06';
    var today=new Date(da);
    var currentDate=today.getDay();
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    console.log("今天是：" + weekday[currentDate]);
    // function getweekday(date){
    //   var weekArray = new Array('日', '一', '二', '三', '四', '五', '六');
    //   var week = weekArray[new Date(date).getDay()];//注意此处必须是先new一个Date
    //   return week;
    //   }
      // var week = weekArray[new Date().getDay()];
      // var da = '2017-12-12';
      // var week = weekArray[new Date(da).getDay()];//注意此处必须是先new一个Date
      // console.log("今天：" + week);

  //   function slygetWeek(dateString) {
  //     var dateArray = dateString.split("-");
  //     date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
  //     return "周" + "日一二三四五六".charAt(date.getDay());
  // };
  //   var dateString='2022-04-06'
  //   var re=slygetWeek(dateString)
  //   console.log(re);

    // function getiweek(year, month,date) {
    //   y=year;m=month;d=date;
    //   if(m==1||m==2) {
    //     m+=12;
    //     y--;
    //   }
    //   var iWeek=(d+2*m+3*(m+1)/5+y+y/4-y/100+y/400)%7;
    //   switch(iWeek)
    //   {
    //     case 0: return "星期一" ; break;
    //     case 1: return "星期二" ; break;
    //     case 2: return "星期三" ; break;
    //     case 3: return "星期四" ; break;
    //     case 4: return "星期五" ; break;
    //     case 5: return "星期六" ; break;
    //     case 6: return "星期日" ; break;
    //     // case 1: console.log("星期二\n"); break;
    //     // case 2: console.log("星期三\n"); break;
    //     // case 3: console.log("星期四\n"); break;
    //     // case 4: console.log("星期五\n"); break;
    //     // case 5: console.log("星期六\n"); break;
    //     // case 6:console.log("星期日\n"); break;
    // }
    // }
    // var iweek=getiweek(2022, 4,6)
    // console.log("周"+'{}',iweek);
    //当前月份的天数
    var monthLength= getThisMonthDays(cur_year, cur_month)
    //当前月份的第一天是星期几
    var week = getFirstDayOfWeek(cur_year, cur_month)
    var x = week;
    for(var i=1;i<=monthLength;i++){
      //当循环完一周后，初始化再次循环
      if(x>6){
        x=0;
      }
      //利用构造函数创建对象
      that.data.calendar[i] = new calendar(i, [weeks_ch[x]][0])
      x++;
    }
    //限制要渲染的日历数据天数为7天以内（用户体验）
    var flag = that.data.calendar.splice(cur_date, that.data.calendar.length - cur_date <= 7 ? that.data.calendar.length:7)
    that.setData({
      calendar: flag
    })
    //设置scroll-view的子容器的宽度
    that.setData({
      width: 186 * parseInt(that.data.calendar.length - cur_date <= 7 ? that.data.calendar.length : 7)
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    app.globalData.date = e.detail.value
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
    app.globalData.time = e.detail.value
  },
  gotores: function () {
    if (!this.data.date.length){
      wx.showToast({
        title: '请选择预计年审时间',
        icon:'none'
      })
      return;
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
  
  },
  select:function(event){
    //为上半部分的点击事件
    this.setData({
      currentIndex: event.currentTarget.dataset.index
    })
  },
  selectTime:function(event){
    //为下半部分的点击事件
    this.setData({
      currentTime: event.currentTarget.dataset.tindex
    })
  }
})

// function getweek(year, month,date) {
//   y=year;m=month;d=date;
//   if(m==1||m==2) {
//     m+=12;
//     y--;
//   }
//   var iWeek=(d+2*m+3*(m+1)/5+y+y/4-y/100+y/400)%7;
//   switch(iWeek)
//   {
//     case 0: console.log("星期一\n"); break;
//     case 1: console.log("星期二\n"); break;
//     case 2: console.log("星期三\n"); break;
//     case 3: console.log("星期四\n"); break;
//     case 4: console.log("星期五\n"); break;
//     case 5: console.log("星期六\n"); break;
//     case 6:console.log("星期日\n"); break;
// }
// }