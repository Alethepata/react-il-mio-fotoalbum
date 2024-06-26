module.exports = {
    title: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Inserire titolo",
            bail: true,
        },
        isString: {
            errorMessage: "Deve essere una stringa",
            bail: true,
        },
        isLength: {
            errorMessage: 'Il titolo deve essere minimo di 3 caratteri e un massimo di 45 caratteri',
            options: { min: 3, max: 45 }
        },
        trim: true
    },
    description: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Inserire il contenuto",
            bail: true,
        },
        isString: {
            errorMessage: "Deve essere una stringa",
            bail: true,
        },
        isLength: {
            errorMessage: 'Il contenuto deve essere minimo di 3 caratteri e un massimo di 5 caratteri',
            options: {
                min: 3, max: 255
            },
            trim: true
        }
    },
    image: {
        in: ["file"],
        notEmpty: {
            errorMessage: "Inserire l'immagine",
            bail: true,
        },
        isString: {
            errorMessage: "Deve essere una stringa",
            bail: true,
        },
        trim: true
    },
    isVisible: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Inserire la visibilità",
            bail: true,
        },
        isBoolean: {
            errorMessage: "La visibilità deve essere un valore booleano",
            bail: true,
        },
        toBoolean: true
    },
    categories: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Inserire le categorie",
            bail: true,
        },
        isArray: {
            errorMessage: "Le categorie devono essere un array",
            bail: true,
        },
        customSanitizer: {
            options: (ids) => ids.map(id => ({id: parseInt(id)}))
        }
    },
    
}