const company = {
    name: 'hojo kong',
    address: 'hongkong',
    employee: 1200,
    ceo: {
        name: 'Ujukulu',
        phone: 9083133
    }
}

const stringified = JSON.stringify(company);
const converted = JSON.parse(stringified);