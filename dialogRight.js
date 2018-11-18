;(function($,window,document,undefined){
    $.DialogRight={
        init:function(opt){
            var defaults = {
                    title:'hello word',
                    url:'',
                    content:'',
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
                if(settings.btns.length!==0){
                    $dialogContent.find('input').css({'display':'inline-block'})
                    if(settings.btns[0]!=''){
                      $('.dialog-cancel').attr('value',settings.btns[0])
                    }
                    var $cancel = $('.dialog-cancel');
                    $cancel.on('click',function(){
                        settings.cancel && settings.cancel();
                        $.DialogRight.close()
                    })
                    if(settings.btns[1]!=''){
                        $('.dialog-commit').attr('value',settings.btns[1])
                        var $commit = $('.dialog-commit');
                        $commit.on('click',function(){
                            settings.commit && settings.commit();
                            $.DialogRight.close()
                        })
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
