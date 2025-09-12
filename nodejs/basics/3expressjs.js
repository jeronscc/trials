//these are ways to access incoming request data in Express.

//1. req.params

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;  // extract dynamic part from URL
  res.send(`User ID is ${userId}`);
});

// visiting /users/123 sets req.params.id to "123"

//2. req.query

app.get('/books', (req, res) => {
  const author = req.query.author;  // extract ?author= value from query string
  res.send(`Filter by author: ${author}`);
});

// visiting /books?author=JohnDoe sets req.query.author to "JohnDoe"

//3. req.body

app.post('/register', (req, res) => {
  const username = req.body.username;  // get value from request body
  res.send(`Username received: ${username}`);
});

// for JSON { "username": "aname", "password": "pwd123" }, req.body.username returns "aname"