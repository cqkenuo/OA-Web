// 用户登录
$(document).ready(function(){
	$("#login").click(function(event) {
		var studentNumber = $("#studentNumber").val();
		var password = $("#password").val();
		if(password != "" && password.length < 6){
			alert("密码不能小于6位！");
		}
		var data = {
			"studentNumber": studentNumber,
			"password": password
		}
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/userLogin/login",
			dataType:"json",
			contentType:"application/json",
			data: JSON.stringify(data),
			success: function (response) {
				if (response.code == 0){
					alert("登录成功");
				}else{
					alert("登录失败");
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.responseJSON.message);
				},
		});
	});

	//密码重置
	$("#foreignPass").click(function(event) {
		window.location.href = "findpass.html";
	});

	//账号激活
	$("#register").click(function(event) {
		window.location.href = "register.html";
	});

	function check(){
		var studentNumber=document.getElementById("studentNumber");
		var password=document.getElementById("password");
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
		return true;
	}
});