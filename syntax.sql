CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    nama VARCHAR,
    telepon VARCHAR,
    alamat VARCHAR,
    buah VARCHAR,
    qty VARCHAR,
    harga INT
);

SELECT pembayaran.*, product.name, product.brand, product.price, product.photo FROM transaction INNER JOIN product ON transaction.id_product = product.id WHERE transaction.id_customer = '${id}'

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description VARCHAR,
    photo VARCHAR,
    price INT
);

INSERT INTO products

ALTER TABLE checkout ADD price INT DEFAULT 0;