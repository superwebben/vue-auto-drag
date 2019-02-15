[![GitHub stars](https://img.shields.io/github/stars/zwfun/vue-auto-drag.svg?style=flat-square)](https://github.com/zwfun/vue-auto-drag/stargazers)
[![Build Status](https://travis-ci.org/zwfun/vue-auto-drag.svg?branch=master)](https://travis-ci.org/zwfun/vue-auto-drag)
[![GitHub issues](https://img.shields.io/github/issues/zwfun/vue-auto-drag.svg?style=flat-square)](https://github.com/zwfun/vue-auto-drag/issues)
[![GitHub forks](https://img.shields.io/github/forks/zwfun/vue-auto-drag.svg?style=flat-square)](https://github.com/zwfun/vue-auto-drag/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square)](https://github.com/zwfun/vue-auto-drag)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/zwfun/vue-auto-drag)

[![NPM](https://nodei.co/npm/vue-auto-drag.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-auto-drag/)
[![NPM](https://nodei.co/npm-dl/vue-auto-drag.png?months=9&height=3)](https://nodei.co/npm/vue-auto-drag/)

# vue-auto-drag
自由拖拽div-vue组件, 上下左右或自由拖拽div,改变div的高度和宽度
auto drag components, drag you components to change height or width

# Example

[Demo Page](https://zwfun.github.io/vue-auto-drag/)

**vue-auto-drag props list:**

- dragMove: VueTypes.bool.def(false),
- dragLeft: VueTypes.bool.def(false),
- dragTop: VueTypes.bool.def(false),
- dragRight: VueTypes.bool.def(false),
- dragBottom: VueTypes.bool.def(false),
- maxWidth: VueTypes.number.def(999999),
- minWidth: VueTypes.number.def(0),
- maxHeight: VueTypes.number.def(999999),
- minHeight: VueTypes.number.def(0)

#### NPM

``` bash
npm install vue-auto-drag --save
```

### Mount

#### mount with global

``` javascript
// require lib
import Vue from 'vue'
import VueAutoDrag from 'vue-auto-drag'


// you can set default global options and events when use
Vue.use(VueAutoDrag)
```

#### mount with component

```javascript
// require component
import VueAutoDrag from 'vue-auto-drag'

// component
export default {
    components: {
        VueAutoDrag
    }
}
```

### Component

```vue
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
```

# Author
[zwfun](https://github.com/zwfun)