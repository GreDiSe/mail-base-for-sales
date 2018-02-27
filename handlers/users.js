const User = require('../models/user').User;
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports.returnAllUsers = (req, res) => {
    jwt.verify(req.headers.token, 'secretKey', (err, decoded) => {
        if(err) {
            if(err.name === 'TokenExpiredError') {
                decoded = jwt.decode(req.headers.token);
                const person = decoded.person;

                jwt.sign({person}, 'secretKey', {expiresIn: '1h'}, (err, token) => {
                    err && errorHandler(res, err, 500);
                    res.set('token', token);
                    res.sendStatus(403);
                })
            }

            else errorHandler(res, err, 500);
        }

        else if(decoded.person.role === 'admin')
        {
            User.find({}, (err, list) => {
                if (err) {
                    errorHandler(res, err)
                } else {
                    res.send(list);
                }
            });
        } else {
            errorHandler(res, err, 401);
        }

    });

};

module.exports.login = (req, res) => {
    const { email, password } = req.body;

    if(validateEmailAndPassword(req)){
        errorHandler(res, 'Validate error')
    } else {
        User.findOne({email})
            .then(
                person => {
                    bcrypt.compare(password, person.password, (err,resultCompare) => {
                        err && errorHandler(res, err, 500);
                        !resultCompare && errorHandler(res, err, 401);
                    });
                    return person;
                })
            .then(person => {
                jwt.sign({person}, 'secretKey', { expiresIn: '1h' }, (err, token) => {
                    err && errorHandler(res, err, 500);
                    res.set('token', token);
                    res.sendStatus(200);
                });
            })
            .catch(err => {
                errorHandler(res, err, 401)
            })
    }
};

module.exports.registration = (req, res) => {
    const { email, password, name, surname } = req.body;

    if(validateEmailAndPassword(req)){
        errorHandler(res, 'Validate error')
    } else {
        returnHashedPassword(password)
            .then(hashedPassword => {
                const user = new User({
                    email,
                    password: hashedPassword,
                    name,
                    surname,
                    date_crated: new Date()
                });
                user.save(err => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(400);
                    } else {
                        res.sendStatus(200);
                    }
                });
            })
            .catch(err => errorHandler(res, err))
    }
};

const errorHandler = ( res, err, status = 400 ) => {
    console.error( err );
    res.sendStatus( status );
};

const validateEmailAndPassword = ( req ) => {
    req.check('email', 'Password is invalid').exists();
    req.check('password', 'Password is invalid').exists().isLength( {min: 4, max: 16} );

    return req.validationErrors();
};

const returnHashedPassword = ( password ) => {
    return new Promise( ( resolve, reject ) => {
        bcrypt.genSalt(10, ( err, salt ) => {
            if ( err ){
                return reject(err);

            } else {
                bcrypt.hash( password, salt, null, (err, hash) => {
                    if( err ) return reject( err );
                    resolve( hash )
                })
            }
        })
    })
};