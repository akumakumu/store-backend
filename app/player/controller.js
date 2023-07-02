const Player = require('./model')
const Voucher = require('../voucher/model')
const Category = require('../category/model')
const Bank = require('../bank/model')
const Payment = require('../payment/model')
const Nominal = require('../nominal/model')
const Transaction = require('../transaction/model')

module.exports = {
    landingPage: async(req, res) => {
        try {
            const voucher = await Voucher.find()
            .select('_id name status category thumbnail')
            .populate('category')

            res.status(200).json({ data: voucher })

        } catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    },

    detailPage: async(req, res) => {
        try {
            const { id } = req. params

            const voucher = await Voucher.findOne({ _id : id })
            .populate('category')
            .populate('nominals')
            .populate('user', '_id name phoneNumber')

            if(!voucher) {
                return res.status(404).json({ message: "Voucher tidak ditemukan" })
            }

            res.status(200).json({ data: voucher })

        } catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    },

    category : async (req, res) => {
        try {
            const category = await Category.find();

            res.status(200).json({ data: category })
        }
        catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    },

    checkOut: async (req, res) => {
        try {
            const { accountUser, name, nominal, voucher, payment, bank } = req.body

            // Voucher
            const res_voucher = await Voucher.findOne({ _id : voucher })
            .select('name category _id thumbnail user')
            .populate('category')
            .populate('user')

            if (!res_voucher) return res.status(404).json({ message: 'Voucher tidak ditemukan' })

            // Nominal
            const res_nominal = await Nominal.findOne({ _id : nominal })

            if (!res_nominal) return res.status(404).json({ message: 'Nominal tidak ditemukan' })

            // Payment
            const res_payment = await Payment.findOne({ _id : payment })

            if (!res_payment) return res.status(404).json({ message: 'Metode Pembayaran tidak ditemukan' })

            // Bank
            const res_bank = await Bank.findOne({ _id : bank })

            if (!res_bank) return res.status(404).json({ message: 'Metode Pembayaran tidak ditemukan' })

            // Pajak 10%
            let tax = 0.1 * res_nominal._doc.price;

            // Harga Akhir
            let value = res_nominal._doc.price - tax;

            // Payload Transaction
            const payload = {
                historyVoucherTopUp : {
                    gameName : res_voucher._doc.name,
                    category : res_voucher._doc.category ? res_voucher._doc.category.name : '',
                    thumbnail : res_voucher._doc.thumbnail,
                    coinName : res_nominal._doc.coinName,
                    coinQuantity : res_nominal._doc.coinQuantity,
                    price : res_nominal._doc.price
                },

                historyPayment : {
                    name: res_bank._doc.name,
                    type: res_payment._doc.type,
                    bankName: res_bank._doc.bankName,
                    noRekening: res_bank._doc.noRekening
                },

                name : name,

                accountUser : accountUser,

                tax : tax,

                value : value,

                player : req.player._id,

                historyUser : {
                    name: res_voucher._doc.user?.name,
                    phoneNumber: res_voucher._doc.user?.phoneNumber
                },

                category : res_voucher._doc.user?.category,

                user : res_voucher._doc.user?._id
            }

            // Saving
            const transaction = new Transaction(payload)

            await transaction.save()

            // Check Payload
            res.status(201).json({
                data: transaction
            })
        }   
        catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    },

    history : async (req, res) => {
        try {
            const { status = '' } = req.query;

            let criteria = {}

            if (status.length) {
                criteria = {
                    ...criteria,
                    status : { $regex : `${status}`, $options: 'i' }
                }
            }

            if (req.player._id) {
                criteria = {
                    ...criteria,
                    player : req.player._id
                }
            }

            const history = await Transaction.find(criteria)

            // Menampilkan Jumlah Value Keseluruhan Transaksi
            let total = await Transaction.aggregate([
                {
                    $match : criteria
                },
                {
                    $group : {
                        _id: null,
                        value: {
                            $sum: "$value"
                        }
                    }
                }
            ])

            res.status(200).json({
                data: history,
                total: total.length ? total[0].value : 0
            })
        }
        catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    },

    historyDetail : async (req, res) => {
        try {
            const { id } = req.params

            const history = await Transaction.findOne({ _id : id })

            if (!history) return res.status(404).json({ message: "History tidak ditemukan" })

            res.status(200).json({ data: history })
        }
        catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    },

    dashboard : async (req, res) => {
        try {
            const count = await Transaction.aggregate([
                { $match: { player: req.player._id } },
                { $group: {
                    _id: '$category',
                    value:{ $sum: '$value' }
                } }
            ])

            // Still Bugged, $Category still read null
            // const category = await Category.find({})

            // category.forEach(element => {
            //     count.forEach(data=> {
            //         if(data._id.toString() === element._id.toString()) {
            //             data.name = element.name
            //         }
            //     })
            // })

            const history = await Transaction.find({ player: req.player._id })
            .populate('category')
            .sort({ 'updatedAt' : -1 })

            res.status(200).json({
                data : history,
                count: count
            })
        }
        catch (err) {
            res.status(500).json({ message: err.message || `Internal server error`})
        }
    }
}