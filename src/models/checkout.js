const pool = require('../configs/db')

const insert = (data) => {
    const { nama, telepon, alamat, buah, qty, harga, id_pembelian } = data
    return pool.query(`INSERT INTO customer(nama, telepon, alamat, buah, qty, harga, id_pembelian)VALUES('${nama}', '${telepon}', '${alamat}', '${buah}', '${qty}', ${harga}, '${id_pembelian}')`)
}

const inputHarga = (data) => {
    const { harga, id_pembelian } = data;
    return pool.query(`UPDATE customer SET harga = ${harga} WHERE id_pembelian = '${id_pembelian}'`)
}

const get = () => {
    return pool.query(`SELECT * FROM customer`)
}

const getById = (id) => {
    return pool.query(`SELECT * FROM customer WHERE id = (${id})'`)
}

module.exports = {
    insert,
    get,
    getById,
    inputHarga
}