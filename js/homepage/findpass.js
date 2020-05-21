$(document).ready(function(){
	//获取验证码
	$("#getCode").click(function(event) {
		var studentNumber = $("#studentNumber").val();
		var password = $("#password").val();
		var repassword = $("#repassword").val();
		$.ajax({
			type: "GET",
			url: "http://localhost:8080/userLogin/getCode",
			data:"studentNumber=" + studentNumber,
			success: function (response) {
				if (response.code == 0){
					$("#studentNumber").val(studentNumber);
					$("#password").val(password);
					$("#repassword").val(repassword);
					alert("验证码发送成功");
				}else{
					alert("验证码发送失败");
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.responseJSON.message);
			},
		});
	});

	//密码找回发送请求
	$("#change").click(function(event) {
		var studentNumber = $("#studentNumber").val();
		var password = $("#password").val();
		var repassword = $("#repassword").val();
		var methodCode = $("#methodCode").val();
		if(password!="" && password.length < 6){
			alert("密码不能小于6位！");
		}
		var data = {
			"studentNumber": studentNumber,
			"password": password,
			"repassword": repassword,
			"methodCode": methodCode
		}
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/userLogin/reCode",
			dataType:"json",
			contentType:"application/json",
			data: JSON.stringify(data),
			success: function (response) {
				if (response.code == 0){
					alert("密码重置成功");
				}else{
					alert("密码重置失败");
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.responseJSON.message);
			},
		});
	});



	function check(){
		var studentNumber=document.getElementById("studentNumber");
		var password=document.getElementById("password");
		var repassword=document.getElementById("repassword");
		var methodCode=document.getElementById("methodCode");
		if(studentNumber.value == "" || studentNumber.value.length < 6){
			alert("名称为空，或长度不足！");
			studentNumber.select();
			studentNumber.focus();
			return false;
		}
		if(password.value == ""){
			alert("密码不能为空！");
			document.modifyPassword.password.focus();
			return false;
		}
		if(repassword.value == ""){
			alert("密码确认不能为空！");
			document.modifyPassword.repassword.focus();
			return false;
		}
		if(password.value != repassword.value){
			alert("两次输入的密码不相同！");
			document.modifyPassword.password.focus();
			return false;
		}
		if(methodCode.value != methodCode.value){
			alert("两次输入的密码不相同！");
			document.modifyPassword.password.focus();
			return false;
		}
		return true;
	}

});