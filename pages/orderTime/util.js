function getDates( todate) {
    var day = getDate(todate).getDay();
    switch (day) {
      case 0:
        return "星期天"
        break;
      case 1:
        return "星期一"
        break;
      case 2:
        return "星期二"
        break;
      case 3:
        return "星期三"
        break;
      case 4:
        return "星期四"
        break;
      case 5:
        return "星期五"
        break;
      case 6:
        return "星期六"
        break;
    }
  }
   
  module.exports = {
    getDates: getDates
  }