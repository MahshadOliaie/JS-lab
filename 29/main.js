

const PRODUCTS = [
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/109428.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال سامسونگ مدل WB30F",
        rate: 3.7,
        price: "13800000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }

            arr.push(str);

            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/366a8fb2faafdeb19d7eaf22ebacac41a7125d13_1686402006.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال کانن EOS R50 RF-S 18-45MM",
        rate: 4,
        price: "38900000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/119891658.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال کانن مدل EOS 90D",
        rate: 3.8,
        price: "47990000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/121821685.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال بدون آینه کانن مدل EOS R",
        rate: 3.3,
        price: "74900000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/801f339294bafd59a4a729e2634a33835ca976eb_1685053013.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال مدل FHD-1080P 30MP",
        rate: 3,
        price: "10350000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/a77d9d5f523117e07c6dfddf086c34b37e339a14_1686400717.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال کانن مدل EOS R5 C Mirrorless Camera Body",
        rate: 4,
        price: "177000000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/6bb91c1462a1404f532a9180e5da6e938a09bb9a_1687260982.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین دیجیتال کانن مدل EOS R6 Body ا Canon EOS R6",
        rate: 3.7,
        price: "99900000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }
    },
    {
        imageUrl: "https://dkstatics-public.digikala.com/digikala-products/616e5bbd966209a40df5e474ff976e236097b1e3_1603276082.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        title: "دوربین عکاسی چاپ سریع فوجی فیلم مدل Instax Mini 11",
        rate: 4.3,
        price: "3200000",
        toman: function () {
            let arr = [];
            let first = "";
            let str = "";
            for (let j = 0; j < this.price.length; j++) {
                if (j < this.price.length % 3) {
                    first += this.price[j];
                } else {
                    if (str.length == 3) {
                        arr.push(str);
                        str = "";
                    }
                    str += this.price[j];


                }
            }
            arr.push(str);
            arr.unshift(first);
            return " تومان" + arr.join(",");
        }

    }
];

let cards = document.querySelectorAll(".card");
let images = document.getElementsByTagName("img");
let titles = document.querySelectorAll(".title");
let rate = document.querySelectorAll(".rate");
let price = document.querySelectorAll(".price");


for (let i = 0; i < cards.length; i++) {
    images[i].setAttribute("src", PRODUCTS[i].imageUrl);
    titles[i].textContent = PRODUCTS[i].title;
    rate[i].textContent = PRODUCTS[i].rate;
    price[i].textContent = PRODUCTS[i].toman();
}

