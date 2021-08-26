const user = {
    name: 'Aamir',
    id: 11,
    job : 'no'
}

const shop = {
    name: 'Alia shop',
    address: 'Mumbai street',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhutt',
        profession: 'actor'
    },
    isExpensive: true
}

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const convertedShop = JSON.parse(shopStringified);
console.log(convertedShop);

const stuInfo = JSON.stringify({
    name: 'james',
    roll: 3
})
console.log(stuInfo.name);