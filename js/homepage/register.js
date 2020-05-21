$(document).ready(function(){
	$("#register").click(function(event) {
		var studentNumber = $("#studentNumber").val();
		var password = $("#password").val();
		var repassword = $("#repassword").val();
		if(password != "" && password.length < 6){
			alert("密码不能小于6位！");
		}
		if(repassword.value != password.value){
			alert("两次输入的密码不相同！");
		}
		var data = {
			"studentNumber": studentNumber,
			"password": password,
			"repassword" :repassword
		}
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/system/user/editPass",
			dataType:"json",
			contentType:"application/json",
			data: JSON.stringify(data),
			success: function (response) {
				if (response.code == 0){
					alert("激活成功");
				}else{
					alert("激活失败");
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.responseJSON.message);
				},
		});
	});

	// 输入密码初次验证
	function check(){
		var studentNumber=document.getElementById("studentNumber");
		var password=document.getElementById("password");
		var repassword=document.getElementById("repassword");
		if(studentNumber.value == ""||studentNumber.value.length < 6){
			alert("名称为空，或长度不足！");
			studentNumber.select();
			studentNumber.focus();
			return false;
		}
		if(password.value==""){
			alert("密码不能为空！");
			document.modifyPassword.password.focus();
			return false;
		}
		if(repassword.value==""){
			alert("密码确认不能为空！");
			document.modifyPassword.repassword.focus();
			return false;
		}
		if(password.value!=repassword.value){
			alert("两次输入的密码不相同！");
			document.modifyPassword.password.focus();
			return false;
		}
		return true;
	}

});