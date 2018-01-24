# fast-webapp-builder-startkit

This is a startkit to use the fast-webapp-builder framework. This app include 4 app model A,B,C,D.
A has reference to B and C. D need authentication to do the CRUD operations.

A model

```
const model = {
    name: 'entA',
    schema: [
        { title: {type: 'string', required: true} },
        { value: {type: 'number', required: true} },
        { B: { type: 'ObjectId', ref: 'entB' } },
        { C: [{ type: 'ObjectId', ref: 'entC' }] }
    ],
    list: {
        title:'title',
        desc:'value'
    },
    title:'EntA',
    callback:{
        before_save:(objs)=>{
            for(let i=0;i<objs.length;i++) {
                objs[i].title = objs[i].title+'-x'
            }
        }
    }
}
```

B model

```
const model = {
    name: 'entB',
    schema: [
        { title: {type: 'string', required: true} },
        { value: {type: 'number', required: true} }

    ],
    list: {
        title:'title',
        desc:'value'
    },
    title:'EntB'
}

module.exports = model;
```

C model

```
const model = {
    name: 'entC',
    schema: [
        { title: {type: 'string', required: true} },
        { value: {type: 'number', required: true} }

    ],
    list: {
        title:'title',
        desc:'value'
    },
    title:'EntC'
}

module.exports = model;
```


D model

```
const model = {
    name: 'entD',
    schema: [
        { title: {type: 'string', required: true} },
        { value: {type: 'number', required: true} }

    ],
    list: {
        title:'title',
        desc:'value'
    },
    title:'EntD',
    auth:{
        save:['admin'],
        list:[],
        update:['admin'],
        get:[],
        delete:['admin']
    }
}

module.exports = model;
````

the code of app.js to start the app
```
const server = require("fast-webapp-builder")
const path = require("path")
server({
    'databaseURI':'mongodb://localhost:27017/test', 
    'port':3002,
    'secret': 'thisIsTopSecret',
    'dayForTokenExpiration' : 7,
    'auth':true,
    'role':[{name:'admin', desc:'admin'},{name:'user', desc:'user'}],//the role of this app
    'models':[
        path.join(__dirname, 'a.model.js'),
        path.join(__dirname, 'b.model.js'),
        path.join(__dirname, 'c.model.js'),
        path.join(__dirname, 'd.model.js')
    ] // include the models
})
```

