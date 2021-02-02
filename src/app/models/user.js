module.exports = (sequelize, datatypes) => {
    const User = sequelize.define('User', {
        name: datatypes.STRING,
        email: datatypes.STRING,
        password: datatypes.STRING
    });

    return User;
}