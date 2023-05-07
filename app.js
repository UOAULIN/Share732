async function queryByDate(year, month){

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const orders = await Order.find({
        purchaseDate:{
            $gte: startDate, // purchaseDate 大于等于 startDate
            $lt: endDate, // purchaseDate 小于 endDate
        }
    })

    return orders;
}

// 登录密码验证
async function loginUser(identifier, password) {
    // 通过email或username查找用户
    const user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });

    if (!user) {
        console.log('User not found.');
        return false;
    }

    // 验证密码
    const isPasswordValid = await user.verifyPassword(password);
    if (isPasswordValid) {
        console.log('Password is valid.');
        return true;
    } else {
        console.log('Password is invalid.');
        return false;
    }
}