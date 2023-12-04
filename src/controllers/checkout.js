const checkoutModel = require('../models/checkout')
const {response} = require('../helpers/common')
const { sendGmail } = require('../helpers/mailer')

exports.insertCheckout = async(req, res) => {
    const { nama, telepon, alamat, buah, qty, harga, id_pembelian } = req.body
    const data = { nama, telepon, alamat, buah, qty, harga, id_pembelian };
    try {
        let result = await checkoutModel.insert(data)
        console.log('masuk db');
        if(result){
            await sendGmail( data.nama, data.telepon, data.alamat, data.buah, data.qty, data.harga, data.id_pembelian )
            return res.send({status: 200, message: 'success check email'})
        }
        response(res, data, 'success', 200, 'insert data checkout success')
    } catch (error) {
        console.log(error);
        response(res, null, 'failed', 400, 'insert data checkout failed')  
    }
}

exports.insertPrice = async(req, res) => {
    const id = req.params.id;
    const harga = req.body.harga;
    const data = { harga, id };
    try {
        await checkoutModel.inputHarga(data);
        response(res, null, 'success', 200, 'insert data price success')
    } catch (error) {
        console.log(error);
        response(res, null, 'success', 400, 'insert data price failed')
    }
}

exports.getCheckout = async(req,res) => {
    try {
        const {rows} = await checkoutModel.get();
        response(res, rows, 'success', 200, 'Get data checkout success')
    } catch (error) {
        console.log(error);
        response(res, null, 'failed', 400, 'Get data checkout failed')  
    }
}

exports.getCheckoutById = async(req,res) => {
    try {
        const id = req.params.id;
        const {rows} = await checkoutModel.getById(id);
        response(res, rows, 'success', 200, 'Get data checkout by Id success')
    } catch (error) {
        response(res, null, 'failed', 400, 'Get data checkout failed')  
    }
}