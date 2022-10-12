### About TypeScript:

1. A Open Source Language from Microsoft

2. Superset JS

3. Static Typing

### Why use TypeScript?

```JS
const user = {
    name: "Carlos",
    username: "carlosvinimsouza",
    document: "303012"
}

user.document = 37311245
```

° Important to regulate the types datas on JS code. For example:

```TS
class User {
    name: string;
    username: string;
    document: string;
}

const user = User = {
    name: "Carlos",
    username: "carlosvinimsouza",
    document: 303012 // Error because we sent a number!
}
```

### Myths and Trues:

1. TS came to replace JS -> (Myth)

2. Can I use TS with JS on same project ? -> (True)

3. The productivity with TS decline? -> (Myth and True 👀)

4. I need type all variables? -> (Myth)

5. TS assists in development -> (True)
