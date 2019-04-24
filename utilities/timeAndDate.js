"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeAndDate = (function () {
    function timeAndDate() {
    }
    timeAndDate.getTimeAndDate = function () {
        var timeAndDateObject = { transferTime: "", tranferDate: "" };
        var dateArray = [];
        var buffer;
        var time = Date();
        buffer = time.split(' ');
        time = buffer[4];
        for (var index = 0; index <= 2; index++)
            dateArray[index] = buffer[index + 1];
        var date = dateArray.join(" ");
        timeAndDateObject.transferTime = time;
        timeAndDateObject.tranferDate = date;
        return timeAndDateObject;
    };
    ;
    return timeAndDate;
}());
exports.timeAndDate = timeAndDate;
//# sourceMappingURL=timeAndDate.js.map