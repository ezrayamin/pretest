const findNextWorkingDay = (start,end) => {		
    let weekdays = []
    let current = start
    let holidays = ['2019-01-08','2019-01-09']

    let i = 0; 
    while(i < end){
        if (!isWeekend(current)) {
            weekdays.push(current)
            i++
        }
        currentObj = new Date(current)
        current = currentObj.addDays(1).format()
    }

    function isWeekend(date){
        dateObj = new Date(date)
        if (dateObj.getDay() == 6 || dateObj.getDay() == 0) {
            return true;
        }else{
            if (holidays.contains(date)) {
                return true
            }else{
                return false
            }
        }
    }

    return weekdays[end - 1]
}

isWeekend = function(date){
    date.getDay();
    return (dayOfWeek == 6 || dayOfWeek == 0)
}

Array.prototype.contains = function(obj) {
    let i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true
        }
    }
    return false
}

Date.prototype.addDays = function(days) {
    let dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days)
    return dat
}

Date.prototype.format = function() {
    let mm = this.getMonth() + 1
    let dd = this.getDate()
    if (mm < 10) {
        mm = '0' + mm
    }
    if (dd < 10) {
        dd = '0' + dd
    }
    return this.getFullYear()+'-'+mm+'-'+dd
}


let start = '2019-01-03'
let end = 7
let result = findNextWorkingDay(start,end)
console.log(result)