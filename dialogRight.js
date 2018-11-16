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
                    title:'hello word',
                    content:'',
                    url:'https://baidu.com',
                    btns:[]
                },
                html = '<div class="dialogRight"> <div class="dialogMask"></div> <div class="dialogContent animate fadeInRight"><div class="dialogTitle"></div><div class="dialogCon"></div><div class="dialogFooter"><input class="dialog-cancel" type="button" value="" /><input class="dialog-commit" type="button" value=""/></div></div></div> </div>',
                $dialogRight =$('.dialogRight');
            var settings = $.extend({},defaults,opt);
            if($dialogRight.length>0){$dialogRight.remove()}else{
                $('body').append(html)
                var $dialogTitle=$('.dialogTitle'),
                    $dialogContent=$('.dialogContent'),
                    $dialogCon = $('.dialogCon');
                $dialogTitle.html(settings.title)
                if(settings.content){
                    $dialogCon.html(settings.content)
                }
                else if(settings.url){
                    var ifr = '<iframe name="ifrcon" frameborder="0" id="ifrcon" src='+settings.url+'></iframe>'
                    $dialogCon.append($(ifr))
                }
                if(settings.btns){
                    $dialogContent.find('input').css({'display':'inline-block'})
                    if(settings.btns[0]!=''){

                    }
                }else{
                    $dialogContent.find('input').css({'display':'none'})

                }
            }
            var $dialogMask = $('.dialogMask');
            $dialogMask.on('click',function(){
                $.DialogRight.close()
            })

        },
        close:function(){
            var $dialogRight = $('.dialogRight'),
                $dialogCon  = $dialogRight.find('.dialogContent');
            $dialogCon.get(0).className = $dialogCon.get(0).className.replace(/fadeInRight/,'fadeOutRight')
            setTimeout(function(){
                $dialogRight.remove();
            },400)
        }
    }
})(jQuery,window,document)
