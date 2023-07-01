module.exports = {
    isLoginAdmin : (req, res, next) => {
        if (req.session.user === null || res.session.user === undefined) {
            req.flash('alertMessage', `Session habis, silahkan login kembali`)
            req.flash('alertStatus', 'danger')
            res.redirect('/')
        }
        else {
            next()
        }
    } 
}