module.exports = {
    email: {
        notEmpty: {
            errorMessage: "Inserire l'email",
            bail: true,
        },
        isEmail: {
            errorMessage: "Inserire un email valida",
            bail: true,
        },
        trim: true
    },
    name: {
        in: ["body"],
        optional: true,
        isString: {
            errorMessage: "Deve essere una stringa",
            bail: true,
        },
        isLength: {
            errorMessage: 'Il nome deve essere minimo di 3 caratteri e un massimo di 100 caratteri',
            options: { min: 3, max: 100 }
        },
        trim: true
    },
    password: {
        in: ["body"],
        notEmpty: {
            errorMessage: 'Inserire la password.',
            bail: true
        },
        isString: {
            errorMessage: 'Password deve essere una stringa.',
            bail: true
        },
        isLength: {
            errorMessage: 'Password deve essere di almeno 8 caratteri',
            options: {min: 8}
        }
    }
    
}