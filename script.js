// todays date 
var todayDate = moment().format('dddd,MM Do YYYY');
('currentDay').html(todayDate);
 (document).ready (function (){
    //saveBtn click listener
    ('saveBtn').on('click', function () {
        //Jquery
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time,text);
    })
//time tracking func
    function timeTracker() {
        var timeNow = moment(). hour();
        //loop over time blocks
    (".time-block").each(function () {
            var blockTime = parseInt($(this).attr('id').split('hour')[1]);
            if (blockTime < timeNow) {
                (this).removeClass('future');
                (this).removeClass('present');
                (this).addClass('past');
            
            }
            else if (blockTime === timeNow) {
                (this).removeClass('future');
                (this).removeClass('past');
                (this).removeClass('present');
            }
            else if (blockTime > timeNow) {
                (this).removeClass('past');
                (this).removeClass('present');
                (this).removeClass('future');
            }
        })
    }
    timeTracker();
})