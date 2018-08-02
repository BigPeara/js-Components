(function() {
    var Turntable = function(elem, trigger) {
        //九宫格抽奖转盘
        this.speed = 10; //初始速度
        this.timer = 0; //定时器时间
        this.currentIndex = -1; //转动的当前位置
        this.rotateNum = 0; //转动次数
        this.basicCycle = 50; //运动初始次数
        this.prizePlace = -1; //中奖位置
        this.isClick = false; //是否重复点击抽奖
        this.initOppo = 2;
        this.elem = document.getElementById(elem);
        this.trigger = document.getElementById(trigger);
        this.child = $(".turntable-item");
        // debugger
        this.init();
    };
    Turntable.prototype = {
        constructor: Turntable,
        init: function() {
            this.render();
            // this.start();
            this.bindEvent();
        },
        render: function() {
            for (var i = 0; i < this.child.length; i++) {
                // this.child[i].classList.add("lottery-" + i + "");
                this.child[i].classList.remove("active");
            }
            // this.child[this.currentIndex].classList.remove("active");
            // debugger
            this.currentIndex++;
            if (this.currentIndex >= this.child.length) {
                this.currentIndex = 0;
            }
            return false
        },
        bindEvent: function() {
            var _this = this;
            _this.trigger.onclick = function() {
                if (_this.isClick) { //防止在转动过程中,重复点击抽奖按钮
                    return false
                } else {
                    _this.speed = 100;
                    _this.rotateNum = 0;
                    _this.initOppo -= 1;
                    _this.start();
                    _this.isClick = true; //一次完成后，可继续抽
                    return false;
                }
            }
        },
        start: function() {
            var arr = [0, 1, 2, 4, 7, 6, 5, 3];
            this.rotateNum += 1
            this.render();
            this.child[arr[this.currentIndex]].classList.add("active");
            //判断是否转动完毕
            if (this.rotateNum > this.basicCycle + 10 && this.prizePlace == this.currentIndex) {
                // debugger
                clearTimeout(this.timer)
                this.prizePlace = -1;
                this.timer = 0;
                this.initOppo != 0 ? this.isClick = false : this.isClick = true;
            } else {
                //该判断内是对转动速度speed的处理
                if (this.rotateNum < this.basicCycle) {
                    this.speed -= 10
                } else if (this.rotateNum == this.basicCycle) {
                    // 此处是随机数获取中奖位置的，在点击抽奖的时候该位置（随机数）就已确定
                    // this.prizePlace = 4;
                    this.prizePlace = Math.floor(Math.random() * this.child.length);
                    this.prizePlace == 8 ? this.prizePlace = 0 : this.prizePlace = this.prizePlace;
                    // debugger
                } else {
                    // 如果中奖位置和当前位置的位差在一到多圈时，加快转动速度
                    if (this.rotateNum > this.basicCycle + 10 && ((this.prizePlace == 0 && this.currentIndex == 7)) || this.prizePlace == this.currentIndex + 1) {
                        this.speed += 100;
                    } else {
                        this.speed += 20;
                    }
                }
                // 此处做匀速阶段的处理
                if (this.speed < 40) {
                    this.speed = 40;
                };
                // 定时器做整个转动处理
                this.timer = setTimeout(this.start.bind(this), this.speed) //此处使用bind(),防止setTimeout改变this的指向
            }
            return false;
        }
    };
    window["Turntable"] = Turntable;
}())