import Vue from 'vue';

function swipeLeft(el, binding) {
    const _this = this
    this._init(el, binding);
    //this.handleCallBack = typeof (binding.value) === "object" ? binding.value.fn : binding.value;   
    this.$el.addEventListener("touchstart", function (e) {
        _this.start(e, el, binding)
    }, false)
    this.$el.addEventListener("touchmove", function (e) {
        _this.move(e, el, binding)
    }, false)
    this.$el.addEventListener("touchend", function (e) {
        _this.end(e, el, binding)
    }, false)
}

swipeLeft.prototype = {
    _init(el, binding) {
        this.$el = el;
        this.$el.style.WebkitTransform = 'translateX(0px)'

        this.initX = 0 // 触摸位置X
        this.initY = 0 // 触摸位置Y
        this.moveX = 0 // 滑动时的位置
        this.moveToX = 0 // 目标对象位置

        this.childNode = null
        this.widthNode = null
        this.moveDistance = 0
    },
    _setChildWidth(width) {
        // width = '320';
        this.childNode.style.width = width + 'px';
        this.childNode.style.right = -width + 'px';
    },
    //重新设置每个明细行的transform的距离
    resetSiblings() {
        let className = this.$el.className;
        let siblings = document.querySelectorAll(`.${className}`)
        siblings.forEach((el, i)=>{
            if(el !== this.$el) {
                el.style.WebkitTransform = 'translateX(0px)'
            }
        })
    },
    /**
     * 开始触摸是记录当前位置
     */
    start: function(e, el, binding) {
        const targetTouches = e.touches[0];

        this.initX = targetTouches.clientX;
        this.initY = targetTouches.clientY;
        this.moveToX = (this.$el.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;

        this.childNode = this.$el.querySelector(binding.value.node);
        this.widthNode = this.$el.querySelector(binding.value.widthNode);
        this.parentNode = document.querySelector(binding.value.parentNode);
        // console.log(this.$el.offsetWidth);

        this.moveDistance = this.$el.offsetWidth * 40 / 100;//this.widthNode.offsetWidth;
        this.$el.style.transition = "unset";
        this.childNode.style.transition = "unset";

        this.resetSiblings();
    },
    /**
     * 开始移动记录位置
     */
    move: function(e) {
        const targetTouches = e.touches[0];
        
        this.moveX = targetTouches.clientX - this.initX;
        this.moveY = targetTouches.clientY - this.initY;
        this.$el.style.transition = 'unset';
        if (this.moveToX == 0) {
            if (this.moveX >= 0) {
                this.$el.style.WebkitTransform = "translateX(" + 0 + "px)";
            } else if (this.moveX < 0) {
                let moveLeft = Math.abs(this.moveX);
                this.$el.style.WebkitTransform = "translateX(" + -moveLeft + "px)";
                if (moveLeft > this.moveDistance) { //手滑动的距离大于按钮的长度，则按钮显示
                    moveLeft = this.moveDistance + moveLeft/10;
                    this._setChildWidth(Math.abs(moveLeft))
                    this.$el.style.WebkitTransform = "translateX(" + -moveLeft + "px)";
                }
                // if(this.moveX < -10){
                //     this.parentNode.style['overflowY'] = "hidden";
                // }
            }
        } else if (this.moveToX < 0) {
            if (this.moveX >= 0) {
                let moveRight = -this.moveDistance + Math.abs(this.moveX);
                this.$el.style.WebkitTransform = "translateX(" + moveRight + "px)";
                if (moveRight > 0) {
                    moveRight = 0;
                    this.$el.style.WebkitTransform = "translateX(" + moveRight + "px)";
                }
            } else { //向左滑动
                let moveRight = -this.moveDistance;
                moveRight += this.moveX / 10
                this._setChildWidth(Math.abs(moveRight))
                this.$el.style.WebkitTransform = "translateX(" + moveRight + "px)";
                // if(this.moveX < -10){
                //     this.parentNode.style['overflowY'] = "hidden";
                // }
            }
        }

        let sideL = Math.sqrt(this.moveX * this.moveX + this.moveY * this.moveY);

        if(Math.abs(this.moveY)/sideL < 1/2){
            this.parentNode.style['overflowY'] = "hidden";
        }else{
            this.parentNode.style['overflowY'] = "auto";
        }
    },
    end: function(e, el, binding) {
        if (e.changedTouches.length == 1) {
            this.moveToX = (this.$el.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
    
            if (this.moveToX > -this.moveDistance/2) {
                this.$el.style.WebkitTransform = "translateX(" + 0 + "px)";
                this.$el.style.transition = ".4s ease all";
                this.moveToX = 0;
            } else {
                this.$el.style.WebkitTransform = "translateX(" + -this.moveDistance + "px)";
                this.moveToX = -this.moveDistance;
            }


            this.childNode.style.width = this.moveDistance + 'px';
            this.childNode.style.right = -this.moveDistance + 'px';
     
            this.$el.style.transition = ".4s ease all";
            this.childNode.style.transition = ".4s ease all";

            this.moveX = 0;
            this.moveY = 0;
        }        
    }
}

Vue.directive('swipeLeft', {
    bind: function (el, binding) {
        if (binding.value.handle) {
            new swipeLeft(el, binding)
        } 
    }
})
