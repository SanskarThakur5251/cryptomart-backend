const prods = [
    {
        "name": "Apple Watch",
        "price": 0.1,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/pngwing.com.png"
    },
    {
        "name": "Ipad Air M1 chip",
        "price": 0.3,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/ipad%20air%20m1%20chip_2.png"
    },
    {
        "name": "MacBook Pro 16″ M3 chip",
        "price": 0.6,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/MacBook%20Pro%2016%E2%80%B3%20M3%20chip_4.png"
    },
    {
        "name": "MacBook Pro 14″ M3 chip",
        "price": 0.65,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/MacBook%20Pro%2014%E2%80%B3%20%20M3%20chip_5.png"
    },
    {
        "name": "MacBook Air 13″ M2 chip",
        "price": 0.7,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/MacBook%20Air%2013%E2%80%B3%20M2%20chip_7.png"
    },
    {
        "name": "MacBook Air 13 m1 chip",
        "price": 0.65,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/MacBook%20Air%2013%20m1%20chip_8.png"
    },
    {
        "name": "MacBook Air 15″ M2 chip",
        "price": 0.65,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/MacBook%20Air%2015%E2%80%B3%20M2%20chip_6.png"
    },
    {
        "name": "I Phone 15 Pro",
        "price": 0.2,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/iphone%2015%20pro_1.png"
    },
    {
        "name": "Ipad Pro M2 chip",
        "price": 0.5,
        "url": "https://raw.githubusercontent.com/PrashanthKumar0/finance-app/master/public/ipad%20pro%20m2%20chip_3.png"
    },

];

export const setup = async () => {
    for (let prod of prods) {
        const res = await fetch('http://localhost:8800/products', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(prod),
        }).then(r => r.json())

        console.log(res);
    }
}