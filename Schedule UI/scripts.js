"use strict";

var calendarDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
                     "September", "October", "November", "December"];
var calendarDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var calendarCurrentDate = new Date();

function Calendar(month, year) {
    this.month = (isNaN(month) || month == null) ? calendarCurrentDate.getMonth() : month;
    this.year = (isNaN(year) || year == null) ? calendarCurrentDate.getFullYear() : year;
    this.html = "";
}
Calendar.prototype.generateHTML = function() {
    var firstDay = new Date(this.year, this.month, 1);
    var startingDay = firstDay.getDay();
    var monthLength = calendarDaysInMonth[this.month];
        // Leap year
        if (this.month == 1) {
            if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
                monthLength = 29;
            }
        }



// Header
var monthName = calendarMonths[this.month];
var html = '<table class="table table-bordered table-hover">';
html += '<tr><th colspan="7" class="text-center">';
html += monthName + "&nbsp;" + this.year;
html += '</th></tr>';
html += '<tr class="calendar-header text-center ">';
for (var i = 0; i <= 6; i++ ) {
    html += '<td class="calendar-header-day ">';
    html += calendarDays[i];
    html += '</td>';
}
html += '</tr><tr>';

// Filling in Days
var day = 1;
// Rows of weeks
for (var i = 0; i < 9; i++) {
    // Weekday cells
    for (var j = 0; j <= 6; j++) {
        html += '<td class="calendar-day text-center">';
            if (day <= monthLength && (i > 0 || j >= startingDay)) {
                html += day;
                day++;
            }
            html += '</td>';
    }

// stop making rows if no more Days
    if (day > monthLength) {
    break;
    }
    else {
    html += '</tr><tr>';
         }
    }
html += '</tr></table>';
this.html = html;

}

Calendar.prototype.getHTML = function() {
    return this.html;
}


var cal = new Calendar();
cal.generateHTML();

var calendarDiv = document.getElementById("calendarApp");
calendarDiv.innerHTML = cal.getHTML();










