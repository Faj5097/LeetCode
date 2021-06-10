var MyCalendar = function () {
  this.arr = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  //   console.log("TO ADD:" + start + "--" + end);
  if (this.arr.length === 0) {
    this.arr.push([start, end - 1]);
    return true;
  } else {
    if (
      this.arr.filter((cal) => {
        // console.log("[" + cal[0] + "," + cal[1] + "]");
        // console.log("1st: " + (cal[0] <= start && cal[1] >= start));
        // console.log("2nd: " + (cal[0] <= end && cal[1] >= end));
        return !(
          (start < cal[0] && end <= cal[0]) ||
          (start > cal[1] && end > cal[1])
        );
      }).length === 0
    ) {
      this.arr.push([start, end - 1]);
      //   console.log(this.arr);
      return true;
    } else {
      return false;
    }
  }
};

var obj = new MyCalendar();
console.log(obj.book(47, 50));
console.log(obj.book(33, 41));
console.log(obj.book(39, 45));
console.log(obj.book(33, 42));
console.log(obj.book(25, 32));
console.log(obj.book(26, 35));
console.log(obj.book(19, 25));
console.log(obj.book(3, 8));
console.log(obj.book(8, 13));
console.log(obj.book(18, 27));
