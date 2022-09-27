const express = require('express')
const app = express()

let courses = ["React.js", "React Native", "Node.js", "Elixir"]

app.use(express.json())

// Here: Query Params (Pagination/Filter)
app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query)

    return response.json(courses)
})


// Here: Body Params (insertion/change Objects ->  JSON Format)
app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)

    return response.json([
        // wait ...
    ])
})

// Here: Route Params (Identify a resource edit/delete/search) 
app.put("/courses/:id", (request, response) => {
    const {id} = request.params
    console.log(id)

    return response.json(courses)
})

app.patch("/courses/:id", (request, response) => {
    return response.json([
        // wait ...
    ])
})

app.delete("/courses/:id", (request, response) => {
    return response.json([
        // wait ...
    ])
})

app.listen('3030')