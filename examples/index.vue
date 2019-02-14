<template>
    <div class="ui-auto-drag-wrap">
        <div class="container">
            <auto-drag  
                :maxWidth="300"
                :minWidth="100"
                class="left-wrap" 
                dragRight>
                <div class="left">左</div>
            </auto-drag>
            
            <div class="main">
                <auto-drag 
                    :maxHeight="300"
                    :minHeight="100"
                    class="top-wrap" 
                    dragBottom>
                    <div class="top">上</div>
                </auto-drag>
                <div class="center"></div>
                <auto-drag class="bottom-wrap" dragTop>
                    <div class="bottom">下</div>
                </auto-drag>
            </div>
            <auto-drag  class="right-wrap" dragLeft>
                <div class="right">右</div>
            </auto-drag>
        </div>
        <auto-drag class="move-wrap" dragMove>
            <div class="move">移动</div>
        </auto-drag>
    </div>
</template>

<script>
import AutoDrag from '../src/index.js';
export default {
    components: {
        AutoDrag,
    }
};
</script>

<style lang="scss">
.ui-auto-drag-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    .container {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
    }
    .left-wrap {
        height: 100%;
        width: 200px;
        border-right: 1px solid #e6e6e6;
        flex-shrink: 0;
    }
    .main {
        width: 100%;
        height: 100%;
        overflow: hidden;
        flex-shrink: 1;
        display: flex;
        flex-direction: column;
        .top-wrap {
            width: 100%;
            height: 200px;
            border-bottom: 1px solid #e6e6e6;
            flex-shrink: 0;
        }
        .center {
            width: 100%;
            height: 100%;
            flex-shrink: 1;
        }
        .bottom-wrap {
            width: 100%;
            height: 200px;
            border-top: 1px solid #e6e6e6;
            flex-shrink: 0;
        }
    }
    .right-wrap {
        height: 100%;
        width: 200px;
        border-left: 1px solid #e6e6e6;
        flex-shrink: 0;
    }
    .move-wrap {
        position: absolute;
        left: 100px;
        top: 100px;
        z-index: 3;
        width: 200px;
        height: 200px;
        border: 1px solid #e6e6e6;
        background-color: #f2f2f2;
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.25);
    }
}
</style>




