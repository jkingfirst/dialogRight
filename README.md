# dialogRight
一款从右侧滑出的jQuery插件  
引入dialogRight.js文件和样式后，直接调用  
例如：$('button').$.dialogRight.init({  
        title:'添加单位',  
        url:'https://www.baidu.com',  
        btns:['取消','确定'],  
        cancel:function(){  
            alert('我已取消')  
        },  
        commit:function(){  
            alert('发送成功')  
        }  
})  
