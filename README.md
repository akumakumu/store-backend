<h3>Packages</h3>

```
npm install

-g npm-check-update nodemon
dotenv debug  express mongoose ejs cookie-parser http-errors morgan method-override connect-flash express-session
```

```
> front-end (views)
admin-lte@^3.2 --save
```

<h3>MongoDB Configure</h3>

```
Collections : 
> categories
> nominals
```

<h3>.env</h3>

```
MODE=dev
SERVICE_NAME=store-backend
MONGO_URI=YourDatabaseURI
```

<h3>POSTMAN</h3>

<h4>Category</h4>

```
[ CREATE ]
Url : /category/create
Method : POST
Body : raw > JSON
Query : 
{ 
    "name": "YourValue" 
}

[ Read ]
Url : /category/edit/DocumentObjectID
Method : GET

[ Update ]
Url : /category/edit/DocumentObjectID?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{ 
    "name": "NewValue"
}

Url : /category/edit/DocumentObjectID
Method : PUT
Body : raw > JSON
Query : 
{ 
    "name": "NewValue"
}

[ Delete ]
Url : /category/delete/DocumentObjectID?_method=DELETE
Method : POST

Url : /category/delete/DocumentObjectID
Method : DELETE
```

<h4>Nominal</h4>

```
[ CREATE ]
Url : /nominal/create
Method : POST
Body : raw > JSON
Query : 
{
    "coinQuantity": YourNumber,
    "coinName": "DesiredCurrency",
    "price": YourPrice
}

[ Read ]
Url : /nominal/edit/DocumentObjectID
Method : GET

[ Update ]
Url : /nominal/edit/DocumentObjectID?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "coinQuantity": YourNumber,
    "coinName": "DesiredCurrency",
    "price": YourPrice
}

Url : /nominal/edit/DocumentObjectID
Method : PUT
Body : raw > JSON
Query : 
{
    "coinQuantity": YourNumber,
    "coinName": "DesiredCurrency",
    "price": YourPrice
}

[ Delete ]
Url : /nominal/delete/DocumentObjectID?_method=DELETE
Method : POST

Url : /nominal/delete/DocumentObjectID
Method : DELETE
```

<h4>Voucher</h4>

```
[ CREATE ]
Url : /voucher/create
Method : POST
Body : raw > JSON
Query : 
{
    "name": "GameName",
    "status": "Y/N",
    "thumbnail": "LinkThumbnail",
    "category": ,
    "nominals: ,
    "user": 
}
```