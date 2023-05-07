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