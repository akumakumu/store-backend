<h3>Packages</h3>

```
npm install

-g npm-check-update nodemon
dotenv debug  express mongoose ejs cookie-parser http-errors morgan method-override connect-flash express-session multer bcryptjs jsonwebtoken
```

```
> front-end (views)
admin-lte@^3.2 --save
```

<h3>MongoDB Configure</h3>

```
Collections : 
> banks
> categories
> nominals
> payments
> players
> transactions
> users
> vouchers
```

<h3>.env</h3>

```
MODE=dev
SERVICE_NAME=store-backend
MONGO_URI=YourDatabaseURI
```

<h3>POSTMAN (API)</h3>

```
[Landing Page]
Url : /api/players/landingpage
Method : GET

[Detail Page]
Url : /api/DocumentObjectId/detail
Method : GET

[ Sign Up ]
Url : /api/auth/signup
Method : POST
Body : form-data
image = file
email = text
password = text
phoneNumber = text
username = text
name = text
favorite = text

[ Category ]
Url : /api/players/category
Method : GET

[ Sign In ]
Url : /api/auth/signin
Method : POST
Body : raw - JSON
Query :
{
    "email": "YourEmail",
    "password: "YourPassword"
}

[ Check Out ]
Url : /api/players/checkout
Method : POST
Authorization : Bearer - JWToken
Body : raw - JSON
Query :
{
    "voucher": "VoucherObjectId",
    "nominal": "NominalObjectId",
    "payment": "PaymentObjectId",
    "bank": "BankObjectId",
    "name": "YourName",
    "accountUser": "YourAccount"
}
```

<h3>POSTMAN (CRUD)</h3>

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
Url : /category/edit/DocumentObjectId
Method : GET

[ Update ]
Url : /category/edit/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{ 
    "name": "NewValue"
}

Url : /category/edit/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{ 
    "name": "NewValue"
}

[ Delete ]
Url : /category/delete/DocumentObjectId?_method=DELETE
Method : POST

Url : /category/delete/DocumentObjectId
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
Url : /nominal/edit/DocumentObjectId
Method : GET

[ Update ]
Url : /nominal/edit/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "coinQuantity": YourNumber,
    "coinName": "DesiredCurrency",
    "price": YourPrice
}

Url : /nominal/edit/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{
    "coinQuantity": YourNumber,
    "coinName": "DesiredCurrency",
    "price": YourPrice
}

[ Delete ]
Url : /nominal/delete/DocumentObjectId?_method=DELETE
Method : POST

Url : /nominal/delete/DocumentObjectId
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
    "category": "CategoryObjectId",
    "nominals": ["NominalObjectId", "NominalObjectId"],
    "thumbnail": "UrlThumbnail" // optional
}

[ Read ]
Url : /voucher/edit/DocumentObjectId
Method : GET

[ Update ]
Url : /voucher/edit/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "name": "GameName",
    "category": "CategoryObjectId",
    "nominals": ["NominalObjectId", "NominalObjectId"],
    "thumbnail": "UrlThumbnail" // optional
}

Url : /voucher/edit/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{
    "name": "GameName",
    "category": "CategoryObjectId",
    "nominals": ["NominalObjectId", "NominalObjectId"],
    "thumbnail": "UrlThumbnail" // optional
}

[ Delete ]
Url : /voucher/delete/DocumentObjectId?_method=DELETE
Method : POST

Url : /voucher/delete/DocumentObjectId
Method : DELETE

[ Update - Status ]
Url : /voucher/status/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "status": "Y/N"
}

Url : /voucher/status/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{
    "status": "Y/N"
}
```

<h4>Bank</h4>

```
[ CREATE ]
Url : /bank/create
Method : POST
Body : raw > JSON
Query : 
{
    "name": "YourName",
    "nameBank": "YourBank",
    "noRekening": "YourBankNumber"
}

[ Update ]
Url : /bank/edit/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "name": "YourName",
    "nameBank": "YourBank",
    "noRekening": "YourBankNumber"
}

Url : /bank/edit/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{
    "name": "YourName",
    "nameBank": "YourBank",
    "noRekening": "YourBankNumber"
}

[ Delete ]
Url : /bank/delete/DocumentObjectId?_method=DELETE
Method : POST

Url : /bank/delete/DocumentObjectId
Method : DELETE
```

<h4>Payment</h4>

```
[ CREATE ]
Url : /payment/create
Method : POST
Body : raw > JSON
Query : 
{
    "bank": ["BankObjectId", "BankObjectId"],
    "type": "YourPaymentMethod"
}

[ Update ]
Url : /payment/edit/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "bank": ["BankObjectId", "BankObjectId"],
    "type": "YourPaymentMethod"
}

Url : /payment/edit/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{
    "bank": ["BankObjectId", "BankObjectId"],
    "type": "YourPaymentMethod"
}

[ Delete ]
Url : /payment/delete/DocumentObjectId?_method=DELETE
Method : POST

Url : /payment/delete/DocumentObjectId
Method : DELETE

[ Update - Status ]
Url : /payment/status/DocumentObjectId?_method=PUT
Method : POST
Body : raw > JSON
Query : 
{
    "status": "Y/N"
}

Url : /payment/status/DocumentObjectId
Method : PUT
Body : raw > JSON
Query : 
{
    "status": "Y/N"
}
```

<h4>To be added / just check the controller, i'm tired</h4>