module.exports = {
    name: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Inserire nome",
            bail: true,
        },
        isString: {
            errorMessage: "Deve essere una stringa",
            bail: true,
        },
        isLength: {
            errorMessage: 'Il nome deve essere minimo di 3 caratteri e un massimo di 45 caratteri',
            options: { min: 3, max: 45 }
        },
        trim: true
    }
    
}