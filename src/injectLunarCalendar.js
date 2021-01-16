import { computeDateToLunarDate } from 'amlich.js';

export const injectLunarCalendar = function(self){
    $(self.picker).find(".day:not(.lunar-day)")
                .map(function(){
                    let current = $(this);
                    let originText = current.html();
                    let dataDate = parseInt(current.attr('data-date'), 10);
                    let date = new Date(dataDate);
                    let lunar = computeDateToLunarDate(date.getDate(), date.getMonth()+1, date.getFullYear(), 7);
                    console.log(originText,"lunar",lunar);
                    current.addClass('lunar-day')
                            .html(`<span class="gregorian-text">${originText}</span><span class="lunar-text">${lunar.lunarDay == 1 ? lunar.lunarDay+'/'+lunar.lunarMonth : lunar.lunarDay}</span>`);
                });
};


// export default self => {
//   $(self.picker)
//     .find('.day')
//     .map(function() {
//       const $this = $(this);
//       const originText = $this.html();

//       // Have rendered before.
//       if (originText.indexOf('<br>') > -1) return;

//       // time(timestamp)
//       const date = parseInt($this.attr('data-date'), 10);

//       const lunarInfo = getLunarDate(date);

//       $this
//         .addClass('lunar-day')
//         .html(makeHtml(originText, lunarInfo.day === 1 ? lunarInfo.monthName : lunarInfo.dayName));
//     });
// };