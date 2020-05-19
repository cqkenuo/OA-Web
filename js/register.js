/*
* @Author: 25452
* @Date:   2019-02-16 13:57:23
* @Last Modified by:   25452
* @Last Modified time: 2019-02-16 14:16:40
*/

        function check(){
            var name=document.getElementById("username");
            var pswd1=document.getElementById("password1");
            var pswd2=document.getElementById("password2");
            if(name.value==""||name.value.length<6){
               alert("名称为空，或长度不足！");
               name.select();
               name.focus();
               return false;
            }
            if(pswd1.value==""){
               alert("密码不能为空！");
               document.myform.pswd1.focus();
               return false;
            }
            if(pswd2.value==""){
                alert("密码确认不能为空！");
                document.myform.pswd2.focus();
                return false;
            }
            if(pswd1.value!=pswd2.value){
                alert("两次输入的密码不相同！");
                document.myform.pswd1.focus();
                return false;
            }
            return true;
        }
