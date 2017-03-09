/*(**************************** 通用对话框*************************)*/
(function(){
    //遮慕层；
    var Dialog = {
        //确认盒子
        confirm : function(content,fn){
            this.open("<div class='content'></div><div class='cancel'>取消</div><div class='right'>确定</div>")
            var scroll = $(document).scrollTop();
            $(".dialog-box").css({"top":scroll+150+"px"});
            $(".dialog-box .content").html(content);
            $(".dialog-box .cancel").on("click",function(){
                Dialog.close();
            })
            $(".dialog-box .right").on("click",function(){
                Dialog.close();
                fn();
            })
        },
        //失败弹窗
        fail : function(content){
            this.open("<div class='fail-content'><div class='fail-png'></div>"+content+"</div></div></div>");
            setTimeout(function(){
                Dialog.close();
            },2000)
        },
        //加载弹窗
        loading : function(){
            this.open()
        },
        //遮慕
        hidePage : function(){
            $('body').append($("<div class='hide-page'></div>"));
        },
        //弹窗init
        open : function(html){
            var $html = $("<div class='dialog-box'>"+html+"</div>");
            $('body').append($html);
            this.hidePage();
        },
        //关闭弹窗
        close : function(){
            $(".dialog-box,.hide-page").remove();
        },
    };
    $.extend($,{Dialog: Dialog});
})();
