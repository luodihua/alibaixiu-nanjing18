//实现登录
$("#btnLogin").on('click', function(){
	var email = $('#email').val();
	var password = $('#password').val();
	$.ajax({
		type: 'post',
		url: '/login',
		data: {email, password},
		success: function(res){
			location.href = 'index.html'
		},
		error: function(){
			alert('登录失败');
		}
	});
})