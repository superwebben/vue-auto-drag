<!--
 * @Description: 拖拽组件， 拖拽放大缩小div, 拖拽移动
 * @Author: zw8
 * @Date: 2019-01-21 17:35:06
 * @LastEditTime: 2019-01-24 19:36:35
 * @LastEditors: Please set LastEditors
 -->

<template>
    <div class="ui-auto-drag" @mousedown="move">
        <slot />
        <div 
            v-if="dragTop" 
            class="layer_line layer_top" 
            @mousedown="top"/>
        <div 
            v-if="dragRight" 
            class="layer_line layer_right" 
            @mousedown="right"/>
        <div 
            v-if="dragBottom"
            class="layer_line layer_bottom" 
            @mousedown="bottom"/>
        <div 
            v-if="dragLeft"
            class="layer_line layer_left" 
            @mousedown="left"/>
    </div>
</template>
<script type="text/javascript">
import VueTypes from 'vue-types';
export default {
    name: 'AutoDrag',
    props: {
        dragMove: VueTypes.bool.def(false),
        dragLeft: VueTypes.bool.def(false),
        dragTop: VueTypes.bool.def(false),
        dragRight: VueTypes.bool.def(false),
        dragBottom: VueTypes.bool.def(false),
        maxWidth: VueTypes.number.def(999999),
        minWidth: VueTypes.number.def(0),
        maxHeight: VueTypes.number.def(999999),
        minHeight: VueTypes.number.def(0)
    },
    methods: {
        move(e) {
            if (!this.dragMove) {
                return;
            }
            let odiv = e.currentTarget; //获取目标元素
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = e => {
                //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;

                //移动当前元素
                odiv.style.left = left + 'px';
                odiv.style.top = top + 'px';
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        top(e) {
            const { minHeight, maxHeight } = this;
            let odiv = e.target.parentNode; //获取目标元素
            //元素初始信息
            let RawH = odiv.offsetHeight;
            let RawY = odiv.offsetTop;
            //算出鼠标相对元素的位置
            let disY = e.clientY - RawY;
            //鼠标按下并移动的事件
            document.onmousemove = e => {
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let top = e.clientY - disY;

                188;
                let y = top - RawY;
                let height = Number(RawH) - Number(y);
                if (height >= minHeight && height <= maxHeight) {
                    odiv.style.height = height + 'px';
                }
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        right(e) {
            let odiv = e.target.parentNode; //获取目标元素
            //元素初始信息
            let RawW = odiv.offsetWidth;
            let RawX = odiv.offsetLeft;
            //算出鼠标相对元素的位置
            let disX = e.clientX - RawX;
            //鼠标按下并移动的事件
            document.onmousemove = e => {
                const { minWidth, maxWidth } = this;
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;

                let x = left - RawX;
                let width = Number(RawW) + Number(x);
                if (width >= minWidth && width <= maxWidth) {
                    odiv.style.width = width + 'px';
                }
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        bottom(e) {
            const { minHeight, maxHeight } = this;
            let odiv = e.target.parentNode; //获取目标元素
            //元素初始信息
            let RawH = odiv.offsetHeight;
            let RawY = odiv.offsetTop;
            //算出鼠标相对元素的位置
            let disY = e.clientY - RawY;
            //鼠标按下并移动的事件
            document.onmousemove = e => {
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let top = e.clientY - disY;

                let y = top - RawY;
                let height = Number(RawH) + Number(y);
                if (height >= minHeight && height <= maxHeight) {
                    odiv.style.height = height + 'px';
                }
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        left(e) {
            let odiv = e.target.parentNode; //获取目标元素
            //元素初始信息
            let RawW = odiv.offsetWidth;
            let RawX = odiv.offsetLeft;
            //算出鼠标相对元素的位置
            let disX = e.clientX - RawX;
            //鼠标按下并移动的事件
            document.onmousemove = e => {
                const { minWidth, maxWidth } = this;
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;

                let x = left - RawX;
                let width = Number(RawW) - Number(x);
                if (width >= minWidth && width <= maxWidth) {
                    odiv.style.width = width + 'px';
                }
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    }
};
</script>
<style lang="scss">
.ui-auto-drag {
    position: relative;
    overflow: hidden;
    /*设置一下背景*/

    .layer_line {
        position: absolute;
        z-index: 2;
    }

    .layer_top {
        width: 100%;
        height: 4px;
        top: -1px;
        left: 0;
    }

    .layer_top:hover {
        cursor: n-resize;
        border-top: 2px solid #ccc;
    }

    .layer_right {
        height: 100%;
        width: 4px;
        right: -1px;
        top: 0;
    }

    .layer_right:hover {
        cursor: e-resize;
        border-right: 2px solid #ccc;
    }

    .layer_bottom {
        width: 100%;
        height: 4px;
        bottom: -1px;
        left: 0;
    }

    .layer_bottom:hover {
        cursor: s-resize;
        border-bottom: 2px solid #ccc;
    }

    .layer_left {
        height: 100%;
        width: 4px;
        left: -1px;
        top: 0;
    }

    .layer_left:hover {
        cursor: w-resize;
        border-left: 2px solid #ccc;
    }

    .layer_dot {
        position: absolute;
        width: 6px;
        height: 6px;
        border: 1px solid #000;
        z-index: 999999;
    }
}
</style>
