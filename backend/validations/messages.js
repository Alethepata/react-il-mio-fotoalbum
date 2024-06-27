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
    message: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Inserire il messagio",
            bail: true,
        },
        isString: {
            errorMessage: "Deve essere una stringa",
            bail: true,
        },
        isLength: {
            errorMessage: 'Il messaggio deve essere minimo di 3 caratteri e un massimo di 255 caratteri',
            options: { min: 3, max: 255 }
        },
        trim: true
    }
    
}