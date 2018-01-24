const server = require("fast-webapp-builder")
const path = require("path")
server({
    'databaseURI':'mongodb://localhost:27017/test',
    'port':3002,
    'secret': 'thisIsTopSecret',
    'dayForTokenExpiration' : 7,
    'auth':true,
    'role':[{name:'admin', desc:'admin'},{name:'user', desc:'user'}],
    'models':[
        path.join(__dirname, 'a.model.js'),
        path.join(__dirname, 'b.model.js'),
        path.join(__dirname, 'c.model.js'),
        path.join(__dirname, 'd.model.js')
    ]
})