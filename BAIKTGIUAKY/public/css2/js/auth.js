src="https://code.jquery.com/jquery-3.5.1.js"

  $(document).ready(function () {
    $('#login-form').on('submit', function (e) {
      e.preventDefault(); // Ngừng hành động mặc định của form
      const username = $('#username').val();
      const password = $('#password').val();

      // Gửi thông tin đăng nhập lên server
      $.ajax({
        url: '/api/login', // Đảm bảo đường dẫn API đúng với backend của bạn
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username: username, password: password }),
        success: function (response) {
          if (response.message === 'Login successful' ) {
            // Chuyển đến trang admin nếu đăng nhập thành công với role admin
            window.location.href = '/web/petmanager'; // Đảm bảo đường dẫn này chính xác
          } else {
            alert('Sai mật khẩu hoặc bạn không phải là admin.');
          }
        },
        error: function () {
          alert('Đã có lỗi xảy ra. Vui lòng thử lại.');
        }
      });
    });
  });
