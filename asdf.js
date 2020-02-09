.get((req, res, next) => {
    TodoService.getTodos(req.app.get('db'))
    .then(todos => {
        res.status(200).json(todos)
    })
    .catch(next)
})
.post(jsonBodyParser, (req, res, next) => {
    const newTodo = req.body
    TodoService.insertTodo(
        req.app.get('db'),
        newTodo
    )
    .then(todo => {
        res
            .status(201)
            .json(todo)
    })
    .catch(next)