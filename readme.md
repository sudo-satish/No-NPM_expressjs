## REST API, no NPM

This application has express.js like structure with less code and no dependency.

### Features
- Router
- Controllers
- Models

### Highlights
- No NPM
- No package.json
- No nodu_modules
### Menu Items
- CRUD

### Cart
- CRUD

### Order
- CRUD

### Stripe
- Integrate stripe API

### Mailgun
- Integrate mailgun API

## TODO
- File System wrapper
- User model
- Encrypt password

### Authentication
- login {create token} | update model
- logout {destroy token} | update model

### middleware
- Auth middleware

## API Specification
```
curl -X GET \
  'http://localhost:3000/account/user/?kwy=value' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 022b951b-3143-4842-9cb9-248c45a205ac' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "satish",
	"email": "satishkumr001@gmail.com",
	"password": "password",
	"address": "My address"
}'
```