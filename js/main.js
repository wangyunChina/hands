function loginStatusCheck(){
	var username=$.cookie("handsUsername")
	if(username!=undefined&&username!=null&&username.length!=0)
		return true;
	else return false;
}
function loginFilter(target){
	var islog=loginStatusCheck();
	if(islog==true)
		{
			return true
		}
	else{
		$.cookie("target",target,{path: '/'} );
		location.href="login.html"
		}
}
	function getUrlParam(name) {
			   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			   var r = window.location.search.substr(1).match(reg); //匹配目标参数
			
			   if (r != null) return unescape(r[2]); return null; //返回参数值
  			}
 function uploadPhoto() {
        $("#photoFile").click();
    }

    /**
     * 上传图片
     */
    function upload() {
        if ($("#photoFile").val() == '') {
            return;
        }
        var formData = new FormData();
        formData.append('photo', document.getElementById('photoFile').files[0]);
        $.ajax({
            url:"http://localhost:8180/server/uploadPhoto",
            type:"post",
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                if (data.type == "success") {
                    $("#preview_photo").attr("src", "http://localhost:8180/img/"+data.filename);
                    $("#productImg").val(data.filename);
                } else {
                    alert(data.msg);
                }
            },
            error:function(data) {
                alert("上传失败")
            }
        });
    }