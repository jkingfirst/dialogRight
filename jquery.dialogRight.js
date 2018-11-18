;(function($,windwow,document,undefined){
    function DialogR(el,opt){
        this.$el = el;
        this.defaults={
            title:'hello word',
            url:'',
            content:''
        }
        this.settings = $.extend({},this.defaults,opt)
    }
    DialogR.prototype={
        init:function(){
            var self = this;

        }
    }

})(jQuery,window,document)