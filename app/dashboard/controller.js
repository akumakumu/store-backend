const Transaction = require('../transaction/model');
const Voucher = require('../voucher/model');
const Player = require('../player/model');
const Category = require('../category/model');

module.exports = {
    index: async (req, res) => {
        try {

            const transaction = await Transaction.countDocument()
            const voucher = await Voucher.countDocument()
            const player = await Player.countDocument()
            const category = await Category.countDocument()

            // If dashboard view already moved
            // res.render('admin/dashboard/view_dashboard', {
            res.render('index', {
                name: req.session.user.name,
                title: 'Halaman Dashboard',
                count: {
                    transaction,
                    voucher,
                    player,
                    category
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}