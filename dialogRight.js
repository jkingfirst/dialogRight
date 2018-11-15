;(function($,window,document,undefinded){
    /* function DialogRight(opt){
     this.default={
     width:600,
     height:'100%',
     title:'hello word',
     content:'内容区',
     url:'',
     }
     this.settings = $.extend({},this.default,opt)
     }
     DialogRight.prototype={
     init:function(){
     var self = this,
     html = '<div class="dialogRight"> <div class="dialogMask"></div> <div class="dialogContent animate fadeInRight" style="height:1000px;"></div> </div>',
     $dialogRight = $('.dialogRight');
     if($dialogRight.length>0){$dialogRight.remove()}else{
     $(html).append('body')
     }
     }

     }
     $.fn.DialogRight = function(opt){
     var dialogRight = new DialogRight(opt)
     return dialogRight.init()
     }*/
/*    $.extend({
        DialogRight:function(opt){
            var defaults = {
                    width:600,
                    height:'100%',
                    title:'hello word',
                    content:'内容区',
                    url:'',
                },
                html = '<div class="dialogRight"> <div class="dialogMask"></div> <div class="dialogContent animate fadeInRight" style="height:1000px;"></div> </div>',
                $dialogRight = $('.dialogRight');
            var settings = $.extend({},defaults,opt);
            if($dialogRight.length>0){$dialogRight.remove()}else{
                $('body').append(html)
            }
            $(document).on('click',function(){
                $dialogRight.remove();
                console.log(1)
            })
        }
    })*/
    $.DialogRight={
        init:function(opt){
            var defaults = {
                    width:600,
                    height:'100%',
                    title:'hello word',
                    content:'内容区',
                    url:'',
                },
                html = '<div class="dialogRight"> <div class="dialogMask"></div> <div class="dialogContent animate fadeInRight" style="height:1000px;"></div> </div>',
                $dialogRight = $('.dialogRight');
            var settings = $.extend({},defaults,opt);
            if($dialogRight.length>0){$dialogRight.remove()}else{
                $('body').append(html)
            }
            $dialogRight.on('click',function(){
               console.log(1)
               close()
           })
        },
        close:function(){
            var $dialogRight = $('.dialogRight');
            $dialogRight.remove();
            console.log('a')
        }
    }
})(jQuery,window,document)
/*
 var DialogRight = {
 var default = {

 }
 var settings = $.extend({},)
 }*/
$.fn  ===jQuery.prototype