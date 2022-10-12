### Questions and Answers about HTTP Methods:

**Which HTTP Methods can we use?**

```
(Note, it's up is our C.R.U.D)

2. POST   -> Create
1. GET    -> Read
4. PUT    -> Update
3. DELETE -> Delete

(And a specific method)

5. PATCH  -> Partial Update
```

**Which HTTP Codes exists?**

```
1. 1xx -> Informative

2. 2xx -> Confirmation (More known)
    200 - Request Successful
    201 - Created

3. 3xx -> Redirect (More known)
    301 - Moved Partially
    302 - Moved

4. 4xx -> Client Error (More known)
    400 - Bad Request
    401 - Unauthorized
    403 - Forbidden
    404 - Not Found
    422 - Unprocessable Entity

5. 5xx -> Server Error
    500 - Internal Server Error
    502 - Bad Gateway
```

**Best Practices API Rest**

```
1. The correct use of HTTP Methods

2. The correct use of status in response return

3. Standard Nomenclature:
    3.1. Search Users        -> GET
    3.2. Search Users by id  -> GET
    3.3. Search Address User -> GET
    3.4. Delete an User      -> DELETE
    3.5. Status Update User  -> PATCH
```
