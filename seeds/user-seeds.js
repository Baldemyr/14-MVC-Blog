const { User } = require('../models');

const userData = [
    {
        username: "Andrew_cryer",
        github: "baldemyr",
        email: "son_of_loki@hotmail.com",
        password: "p@ssword1"
    },
    {
        username: "Joanne_baxter",
        github: "joanneb",
        email: "joanneb@hotmail.com",
        password: "p@ssword2"
    },
    {
        username: "Richard_cryer",
        github: "Richardc",
        email: "Richard_C@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Roy_cryer",
        github: "Royc",
        email: "cryerr@hotmail.com",
        password: "p@ssword4"
    },
    {
        username: "Chris_baxter",
        github: "ChrissyB",
        email: "chrisb24@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Erin_booglesmith",
        github: "Erinbooginator",
        email: "erinboogle@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;