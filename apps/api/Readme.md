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
npx nx g @nx/nest:module apps/api/src/<module_folder>/<module_name>.module.ts 
``` 