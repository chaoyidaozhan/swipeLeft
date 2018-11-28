<style lang="less" scoped>
    .newaddWrapper{
        font-size:100px;   
    }
    .head{
            height: 2rem;
            background-color: #F5F5F5;
            // font-size: 0.32rem;
            color: #999999;
            overflow: hidden;
            .headUl{
                margin-left: 0.306667rem;
                list-style-type :none;
                font-size:0.8rem;
                line-height:2rem;
            }
        }
    .content{
        overflow:hidden;
        .itemDiv{
            position:relative;
            .itemUl{
                list-style-type :none;
                margin-left: 0.306667rem;
                height: 3.533333rem;
                overflow: hidden;
                border-bottom: 0.013333rem solid #E9E9E9;
                -webkit-transform: translateX(0);
                transform: translateX(0);
                .list-1{
                    font-size: 0.7rem;
                    color: #333333;
                    margin: 0.493333rem 0 0.186667rem 0;
                    height: 0.426667rem;
                    line-height: 0.426667rem;
                    .listspan-1{
                        float: right;
                        text-align: right;
                        color: #999999;
                        margin-right: 1.2rem;
                        width: 5.066667rem;
                    }
                }
                .list-2{
                    font-size: 0.4rem;
                    color: #333333;
                    margin: 0.493333rem 0 0.186667rem 0;
                    height: 0.426667rem;
                    line-height: 0.426667rem;
                }
                .list-3{
                    font-size: 0.4rem;
                    color: #333333;
                    margin: 0.493333rem 0 0.186667rem 0;
                    height: 0.426667rem;
                    line-height: 0.426667rem;
                }
                .icon-more{
                    font-family: 'icomoon' !important;
                    speak: none;
                    font-style: normal;
                    font-weight: normal;
                    font-variant: normal;
                    text-transform: none;
                    line-height: 1;
                    -webkit-font-smoothing: antialiased;
                    font-size: 0.4rem;
                    position: absolute;
                    right: 0.586667rem;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
            .btnArray{
                position: absolute;
                top: 0;
                right: -7rem;
                text-align: center;
                font-size:0.7rem;
                color: #fff;
                height: 3.533333rem;
                width: 7rem;
                display:flex;
                align-items:center;
                justify-content:center;
                .check{
                    width: 50%;
                    background: #f29901;
                    height:100%;
                    line-height: 3.3rem;
                }
                .delete{
                    width: 50%;
                    background: red;
                    height:100%;
                    line-height: 3.3rem;
                }
            }
        }
    }
    
</style>

<template>
    <div class="newaddWrapper">
        <div class="head">
            <ul class="headUl">
                <li>{{title}}</li>
            </ul>
        </div>
        <div class="content">
            <div class="itemDiv"       
             v-swipeLeft="{
                node: '.btnArray', 
                widthNode: '.btnArray', 
                handle: true,
                parentNode:'.newaddWrapper',
            }">
                <ul class="itemUl">
                    <li class="list-1">
                        <span class="listspan-1">订单1</span>
                        <span class="listspan-2">1.00PCS</span>
                    </li>
                    <li class="list-2">0000000001</li>
                    <li class="list-3">111</li>
                    <li class="icon-more"></li>
                </ul>
                <div class="btnArray" >
                    <div class="check" @click.stop="checkConfirm(list,index,$event)">批改仓库</div>
                    <div class="delete" @click.stop="deletConform(list)">删除</div>
                </div>
            </div>
            <div class="itemDiv"       
             v-swipeLeft="{
                node: '.btnArray', 
                widthNode: '.btnArray', 
                handle: true,
                parentNode:'.newaddWrapper',
            }">
                <ul class="itemUl">
                    <li class="list-1">
                        <span class="listspan-1">订单1</span>
                        <span class="listspan-2">1.00PCS</span>
                    </li>
                    <li class="list-2">0000000001</li>
                    <li class="list-3">111</li>
                    <li class="icon-more"></li>
                </ul>
                <div class="btnArray" >
                    <div class="check" @click.stop="checkConfirm(list,index,$event)">批改仓库</div>
                    <div class="delete" @click.stop="deletConform(list)">删除</div>
                </div>
            </div>
            <div class="itemDiv"       
             v-swipeLeft="{
                node: '.btnArray', 
                widthNode: '.btnArray', 
                handle: true,
                parentNode:'.newaddWrapper',
            }">
                <ul class="itemUl">
                    <li class="list-1">
                        <span class="listspan-1">订单1</span>
                        <span class="listspan-2">1.00PCS</span>
                    </li>
                    <li class="list-2">0000000001</li>
                    <li class="list-3">111</li>
                    <li class="icon-more"></li>
                </ul>
                <div class="btnArray" >
                    <div class="check" @click.stop="checkConfirm(list,index,$event)">批改仓库</div>
                    <div class="delete" @click.stop="deletConform(list)">删除</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'订单行',
            
        }
    }
}
</script>
