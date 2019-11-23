$('#btnLogout').on('click', function(){
	$.ajax({
		type: 'post',
		url: '/logout',
		success: function(res){
			location.href = 'login.html';
		},
		error: function(){
			alert('退出失败');
		}
	})
})