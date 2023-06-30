const Nominal = require('./model');

module.exports = {
    index : async (req, res) => {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");

            const alert = { 
                message: alertMessage, 
                status: alertStatus 
            }
            
            const nominal = await Nominal.find()

            // Checking the Alert
            console.log(alert);

            res.render('admin/category/view_category', {
                nominal,
                alert
            })
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/nominal');
        }
    },
    viewCreate : async (req, res) => {
        try {
            res.render('admin/nominal/create');
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/nominal');
        }
    },

    actionCreate : async(req, res) => {
        try {
            const { coinName, coinQuantity, price } = req.body;

            let nominal = await Nominal({ coinName, coinQuantity, price })
            await nominal.save();

            req.flash('alertMessage', "Berhasil tambah nominal")
            req.flash('alertStatus', "success")

            res.redirect('/nominal')
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/nominal');
        }
    },

    viewEdit : async(req, res) => {
        try {
            const { id } = req.params

            const nominal = await Nominal.findOne({ _id : id })
            // To check the category variable on console with GET - remove in future when FE is done
            console.log(nominal)

            res.render('admin/nominal/edit', {
                nominal
            })
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/nominal');
        }
    },

    actionEdit : async(req, res) => {
        try {
            const { id } = req.params;
            const { coinName, coinQuantity, price } = req.body;

            await Nominal.findOneAndUpdate({
                _id : id
            }, {
                coinName, coinQuantity, price
            });

            req.flash('alertMessage', "Berhasil ubah nominal")
            req.flash('alertStatus', "success")

            res.redirect('./nominal')
        }

        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/nominal');
        }
    },

    // actionDelete : async(req, res) => {
    //     try {
    //         const { id } = req.params;

    //         await Category.findOneAndRemove({ _id : id });

    //         req.flash('alertMessage', "Berhasil hapus kategori")
    //         req.flash('alertStatus', "success")

    //         res.redirect('/category')
    //     }
    //     catch (err) {
    //         req.flash('alertMessage', `${err.message}`);
    //         req.flash('alertStatus', 'danger');
            
    //         res.redirect('/category');
    //     }
    // }
}