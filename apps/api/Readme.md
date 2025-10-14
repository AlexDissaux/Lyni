# Run the api

```bash
nx serve api
```
# Curl
Do a curl request on Get on this URl 'localhost:3000/api/chat' :
```bash
curl --location 'localhost:3000/api/chat'
```


# Generating new modules

To generate a new module, you can use the following command:

```bash
npx nx g @nx/nest:module apps/api/src/app/<module>/<module>.module.ts &&
npx nx g @nx/nest:controller apps/api/src/app/<module>/<module>.controller.ts &&
npx nx g @nx/nest:service apps/api/src/app/<module>/<module>.service.ts

OR

npx @nestjs/cli g module <module>
``` 


# GET /profile
curl http://localhost:3000/api/auth/profile
{"statusCode":401,"message":"Unauthorized"}

# POST /auth/login
curl -X POST http://localhost:3000/api/auth/login -d '{"email": "toto", "password": "toto"}' -H "Content-Type: application/json"
{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."}

# GET /profile using access_token returned from previous step as bearer code
curl http://localhost:3000/api/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidG90byIsImlhdCI6MTc2MDUzOTk4NSwiZXhwIjoxNzYwNTQwMDQ1fQ.8YBiaKtAkorivye68Z4q6V1olB4F_zBoqL9dVEaClcM"
{"sub":1,"username":"john","iat":...,"exp":...}
