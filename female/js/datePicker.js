(function(){
    function DatePicker(elem,options){
        this.elem=document.getElementById(elem);
        this.options=options||{};
        this.init();
    }
    DatePicker.prototype={
        constructor:DatePicker,
        init:function(){
            this.render();
            this.stateType();
            this.bindEvent();
            var swiper  = new Swiper('.datePickerDate', {
                direction: 'vertical',
                initialSlide :10,
                height:27,
                followFinger: false
            });
            var swiperDate  = new Swiper('.datePickerMonth', {
                direction: 'vertical',
                initialSlide :9,
                height:27,
                followFinger: false
            });
            var swiperTime  = new Swiper('.datePickerTime', {
                direction: 'vertical',
                initialSlide :6,
                height:27,
                speed:400,
                followFinger: false
            });
            var swiperDateTime  = new Swiper('.datePickerDateTime', {
                direction: 'vertical',
                initialSlide :0,
                height:27,
                speed:400,
                followFinger: false
            });
            if(this.options.type=="dateTime"){
                var swipers  = new Swiper('.datePickerDays', {
                    direction: 'vertical',
                    initialSlide :27,
                    height:27,
                    speed:400,
                    followFinger: false
                });
            }
        },
        render:function(){
                var html='<div class="datePicker">\
                <div class="datePicker-container">\
                    <div class="datePicker-title">\
                    </div>\
                    <div class="datePicker-list">\
                        <div class="flex datePicker-body">\
                            <div class="datePicker-item datePickerDate flex flex-direction flex-box">\
                                <div class="swiper-container datePickerDate date-container datepicker swiper-container-vertical swiper-container-free-mode">\
                                    <div class="swiper-wrapper">\
                                        <div class="swiper-slide">2008年</div>\
                                        <div class="swiper-slide">2009年</div>\
                                        <div class="swiper-slide">2010年</div>\
                                        <div class="swiper-slide">2011年</div>\
                                        <div class="swiper-slide">2012年</div>\
                                        <div class="swiper-slide">2013年</div>\
                                        <div class="swiper-slide">2014年</div>\
                                        <div class="swiper-slide">2015年</div>\
                                        <div class="swiper-slide">2016年</div>\
                                        <div class="swiper-slide">2017年</div>\
                                        <div class="swiper-slide">2018年</div>\
                                        <div class="swiper-slide">2019年</div>\
                                        <div class="swiper-slide">2020年</div>\
                                        <div class="swiper-slide">2021年</div>\
                                        <div class="swiper-slide">2022年</div>\
                                        <div class="swiper-slide">2023年</div>\
                                        <div class="swiper-slide">2024年</div>\
                                        <div class="swiper-slide">2025年</div>\
                                        <div class="swiper-slide">2026年</div>\
                                        <div class="swiper-slide">2027年</div>\
                                        <div class="swiper-slide">2028年</div>\
                                        <div class="swiper-slide">2029年</div>\
                                        <div class="swiper-slide">2030年</div>\
                                        <div class="swiper-slide">2031年</div>\
                                        <div class="swiper-slide">2032年</div>\
                                        <div class="swiper-slide">2033年</div>\
                                        <div class="swiper-slide">2034年</div>\
                                        <div class="swiper-slide">2035年</div>\
                                        <div class="swiper-slide">2036年</div>\
                                        <div class="swiper-slide">2037年</div>\
                                        <div class="swiper-slide">2038年</div>\
                                        <div class="swiper-slide">2039年</div>\
                                        <div class="swiper-slide">2040年</div>\
                                        <div class="swiper-slide">2041年</div>\
                                        <div class="swiper-slide">2042年</div>\
                                        <div class="swiper-slide">2043年</div>\
                                        <div class="swiper-slide">2044年</div>\
                                        <div class="swiper-slide">2045年</div>\
                                        <div class="swiper-slide">2046年</div>\
                                        <div class="swiper-slide">2047年</div>\
                                        <div class="swiper-slide">2048年</div>\
                                        <div class="swiper-slide">2049年</div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="datePicker-item datePickerDate flex flex-direction flex-box">\
                                <div class="swiper-container datePickerMonth date-container datepicker swiper-container-vertical swiper-container-free-mode">\
                                    <div class="swiper-wrapper">\
                                        <div class="swiper-slide">1月</div>\
                                        <div class="swiper-slide">2月</div>\
                                        <div class="swiper-slide">3月</div>\
                                        <div class="swiper-slide">4月</div>\
                                        <div class="swiper-slide">5月</div>\
                                        <div class="swiper-slide">6月</div>\
                                        <div class="swiper-slide">7月</div>\
                                        <div class="swiper-slide">8月</div>\
                                        <div class="swiper-slide">9月</div>\
                                        <div class="swiper-slide">10月</div>\
                                        <div class="swiper-slide">11月</div>\
                                        <div class="swiper-slide">12月</div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="datePicker-item datePickerDateTime flex flex-direction flex-box">\
                                <div class="swiper-container datePickerDays datePickerDateTime date-container datepicker swiper-container-vertical swiper-container-free-mode">\
                                    <div class="swiper-wrapper">\
                                        <div class="swiper-slide">1日</div>\
                                        <div class="swiper-slide">2日</div>\
                                        <div class="swiper-slide">3日</div>\
                                        <div class="swiper-slide">4日</div>\
                                        <div class="swiper-slide">5日</div>\
                                        <div class="swiper-slide">6日</div>\
                                        <div class="swiper-slide">7日</div>\
                                        <div class="swiper-slide">8日</div>\
                                        <div class="swiper-slide">9日</div>\
                                        <div class="swiper-slide">10日</div>\
                                        <div class="swiper-slide">11日</div>\
                                        <div class="swiper-slide">12日</div>\
                                        <div class="swiper-slide">13日</div>\
                                        <div class="swiper-slide">14日</div>\
                                        <div class="swiper-slide">15日</div>\
                                        <div class="swiper-slide">16日</div>\
                                        <div class="swiper-slide">17日</div>\
                                        <div class="swiper-slide">18日</div>\
                                        <div class="swiper-slide">19日</div>\
                                        <div class="swiper-slide">20日</div>\
                                        <div class="swiper-slide">21日</div>\
                                        <div class="swiper-slide">22日</div>\
                                        <div class="swiper-slide">23日</div>\
                                        <div class="swiper-slide">24日</div>\
                                        <div class="swiper-slide">25日</div>\
                                        <div class="swiper-slide">26日</div>\
                                        <div class="swiper-slide">27日</div>\
                                        <div class="swiper-slide">28日</div>\
                                        <div class="swiper-slide">29日</div>\
                                        <div class="swiper-slide">30日</div>\
                                        <div class="swiper-slide">31日</div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="datePicker-item datePickerTime flex flex-direction flex-box">\
                            <div class="swiper-container datePickerTime date-container datepicker swiper-container-vertical swiper-container-free-mode">\
                                <div class="swiper-wrapper">\
                                    <div class="swiper-slide">1天</div>\
                                    <div class="swiper-slide">2天</div>\
                                    <div class="swiper-slide">3天</div>\
                                    <div class="swiper-slide">4天</div>\
                                    <div class="swiper-slide">5天</div>\
                                    <div class="swiper-slide">6天</div>\
                                    <div class="swiper-slide">7天</div>\
                                </div>\
                            </div>\
                        </div>\
                        </div>\
                        <div class="datePicker-highlight"></div>\
                    </div>\
                    <div class="confirm flex">\
                        <p class="choice-off btn-choice">取消</p>\
                        <p class="choice-on btn-choice">确定</p>\
                    </div>\
                </div>\
            </div>'
            this.elem.innerHTML=html;
            if(this.options.name !==''){
                $(".datePicker-title").html(this.options.name)
            }
        },
        stateType:function(){
            if(this.options.type=="dateTime"){
                $(".datePicker-body .datePickerDate").remove();
                $(".datePicker-body .datePickerTime").remove();
            }else if(this.options.type=="time"){
                $(".datePicker-body .datePickerDate").remove();
                $(".datePicker-body .datePickerDateTime").remove();

            }else{
                $(".datePicker-body .datePickerTime").remove();
            }
        },
        bindEvent: function () {
            var _this = this;
            $(".datePicker-container .choice-on").click(function () {
                var html=$(".datePicker-body .swiper-slide-active"),
                    arr=[],
                    str='';
                for(var i=0;i<html.length;i++){
                    arr.push(html[i].innerHTML);
                }
                str=arr.join();
                var strs = str.replace(/,/g, "");
                _this.options.mode(strs);
                $(".datePicker").remove();
            });
            $(".datePicker-container .choice-off").click(function(){
                $(".datePicker").remove();
            })
        }
    }
    window.DatePicker=DatePicker;
}())