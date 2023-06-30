const Payment = require('./model');
const Bank = require('../bank/model');

module.exports = {
    index : async (req, res) => {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");

            const alert = { 
                message: alertMessage, 
                status: alertStatus 
            }
            
            const payment = await Payment.find()

            // Checking the Alert
            console.log(payment);
            console.log(alert);

            res.render('admin/category/view_payment', {
                payment,
                alert
            })
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/payment');
        }
    },
    viewCreate : async (req, res) => {
        try {
            const bank = await Bank.find();

            res.render('admin/payment/create', {
                bank
            });
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/payment');
        }
    },

    actionCreate : async(req, res) => {
        try {
            const { banks, type } = req.body;

            let payment = await Payment({ banks, type })
            await payment.save();

            req.flash('alertMessage', "Berhasil tambah pembayaran")
            req.flash('alertStatus', "success")

            res.redirect('/payment')
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/payment');
        }
    },

    // viewEdit : async(req, res) => {
    //     try {
    //         const { id } = req.params

    //         const nominal = await Nominal.findOne({ _id : id })
    //         // To check the category variable on console with GET - remove in future when FE is done
    //         console.log(nominal)

    //         res.render('admin/nominal/edit', {
    //             nominal
    //         })
    //     }
    //     catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
            
    //         res.redirect('/nominal');
    //     }
    // },

    // actionEdit : async(req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const { coinName, coinQuantity, price } = req.body;

    //         await Nominal.findOneAndUpdate({
    //             _id : id
    //         }, {
    //             coinName, coinQuantity, price
    //         });

    //         req.flash('alertMessage', "Berhasil ubah nominal")
    //         req.flash('alertStatus', "success")

    //         res.redirect('./nominal')
    //     }

    //     catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
            
    //         res.redirect('/nominal');
    //     }
    // },

    // actionDelete : async(req, res) => {
    //     try {
    //         const { id } = req.params;

    //         await Nominal.findOneAndRemove({ _id : id });

    //         req.flash('alertMessage', "Berhasil hapus nominal")
    //         req.flash('alertStatus', "success")

    //         res.redirect('/nominal')
    //     }
    //     catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
            
    //         res.redirect('/nominal');
    //     }
    // }
}