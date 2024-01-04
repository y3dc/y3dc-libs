# SSO SERVICE

## TODO

- [ ] **async** controller func - check yt - asyncErrorHandler
- [ ] check `const userRepository = AppDataSource.getRepository(User)`
- [ ] // TODO: format response { data: ..., message: ..., error: ..., status: ... }
- [ ] base module / tool gen code

## NOTE

- store token to used when logout

## API

### RestFul

#### Register

```json
POST: /auth/register
{
    "username": "admin",
    "password": "123456"
}
```

#### Login

```json
POST: /auth/login
{
    "username": "admin",
    "password": "123456"
}
```

### gRPC

#### Verify token
