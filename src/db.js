const mongoose = require('mongoose');

(async () => {
    const db = await mongoose.connect('mongodb://localhost/concesionario', {useNewUrlParser: true, useUnifiedTopology: true})
                .then(db => console.log("DB connected"))
                .catch(err => console.log(err));
})();
