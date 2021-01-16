import {injectLunarCalendar} from './injectLunarCalendar';
import './index.less';

const pickerProto = $.fn.datepicker.prototype.constructor.Constructor.prototype;
pickerProto.backupShow = pickerProto.show;

pickerProto.show = function(...args) {
    let self = this;
    self.backupShow(args);
    injectLunarCalendar(self);
};