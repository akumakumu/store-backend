<h3>Packages</h3>

```
npm install

-g npm-check-update nodemon
dotenv debug  express mongoose ejs cookie-parser http-errors morgan
```

<h3>MongoDB Configure</h3>

```
Collections : categories
```

<h3>.env</h3>

```
MODE=dev
SERVICE_NAME=store-backend
MONGO_URI=YourDatabaseURI
```

<h3>POSTMAN</h3>

```
> Category

[ CREATE ]
Url : /category/create
Method : POST
Body : raw > JSON
Query : { "name": "YourValue" }

[ Read ]
Url : /category/edit/DocumentObjectID
Method : GET

[ Update ]
Url : /category/edit/DocumentObjectID?_method=PUT
Method : POST
Body : raw > JSON
Query : { "name": "NewValue" }

Url : /category/edit/DocumentObjectID
Method : PUT
Body : raw > JSON
Query : { "name": "NewValue" }
```