module.exports = function () {

    const _ = require("lodash");
    const faker = require("faker");

    return {
        cargas: _.times(50, n => {
            return {
                id: n,
                destino: faker.name.findName(),
                data: faker.date.between('2015-01-01', '2015-12-31')
            }
        }),
        pedidos: _.times(50, n => {
            return {
                id: n,
                cliente: faker.name.findName(),
                data: faker.date.between('2015-01-01', '2015-12-31')
            }
        })
    }

}