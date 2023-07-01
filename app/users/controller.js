const User = require('./model');
const bcrypt = require('bcryptjs');

module.exports = {
    viewSignIn : async (req, res) => {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");

            const alert = { 
                message: alertMessage, 
                status: alertStatus 
            }

            res.render('admin/users/view_signin', {
                alert
            }) 

            // Bugged, redirect got looped
            // if (req.session.user === null || res.session.user === undefined) {
            //     res.render('admin/users/view_signin', {
            //         alert
            //     }) 
            // }
            // else {
            //     res.redirect('/dashboard')
            // }
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/');
        }
    },

    actionSignIn: async (req, res) => {
        try {
            const { email, password } = req.body;
            const check = await User.findOne({ email: email });

            if (check) {
                if(check.status === 'Y') {
                    req.session.user = {
                        id: check._id,
                        email: check.email,
                        status: check.status,
                        name: check.name
                    }

                    const checkPassword = await bcrypt.compare(password, check.password)

                    if (checkPassword) {
                        res.redirect('/dashboard')
                    }
                    else {
                        req.flash('alertMessage', `Kata sandi salah`);
                        req.flash('alertStatus', 'danger');
            
                        res.redirect('/');
                    }
                }
                else {
                    req.flash('alertMessage', `Status tidak aktif`);
                    req.flash('alertStatus', 'danger');
            
                    res.redirect('/');
                }
            }
            else {
                req.flash('alertMessage', `Email yang anda masukan salah`);
                req.flash('alertStatus', 'danger');
            
                res.redirect('/');
            }
        }
        catch (err) {
            req.flash('alertMessage', `${err.message}`);
            req.flash('alertStatus', 'danger');
            
            res.redirect('/');
        }
    }
}