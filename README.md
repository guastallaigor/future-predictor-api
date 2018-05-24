<div align="center">
  <img src="./util/logo.jpeg" width="128px">
  <h1>Future Predictor API</h1>
</div>

<p align="center">
  Future Predictor API is a <a href="https://github.com/nestjs/nest">Nestjs</a> fun API that predicts your future and gives you a percentage chance of success.
</p>

## How it works?

You send a POST HTTP request to (default) `localhost:3000/api/v1/future` with a JSON on the body that has a name key. Example:

```javascript
  const params = {
    name: 'Igor Guastalla'
  }

  this
    .$http
    .post('http://localhost:3000/api/v1/future', params)
```

You should get a JSON like this:

```javascript
  {
    "name": "Igor Guastalla",
    "percentage": 50,
    "result": "happy",
    "description": "You will be happy next year!"
  }
```

It stores the data on a PostgreSQL database.

Also has other HTTP Request Methods, such as GET and DELETE to GET all your predictions or delete one.

## Warning

This project is currently under development so has a lot of bugs.

## License

Apache 2.0 © [guastallaigor](https://github.com/guastallaigor)
