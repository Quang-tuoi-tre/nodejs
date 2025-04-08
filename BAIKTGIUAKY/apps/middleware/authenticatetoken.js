const jwt = require('jsonwebtoken');

// Middleware kiểm tra token và vai trò
const checkAuthAndRole = (roles) => {
    return (req, res, next) => {
        const strtoken = req.cookies.token;
  
        if (!strtoken) {
            return res.redirect('/web/login');
        }

        const token = strtoken.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.redirect('/web/petmanager');
            }

            // Kiểm tra vai trò của người dùng
            if (!roles.includes(user.role)) {
                return res.status(403).json({ message: 'You do not have permission to access this route' });
            }

            req.user = user;
            next(); // Nếu token hợp lệ và vai trò phù hợp, tiếp tục xử lý route
        });
    };
};



module.exports = { checkAuthAndRole };
