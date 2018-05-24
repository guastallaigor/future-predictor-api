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
    "name": "Igor",
    "id": "33df5297-4889-4579-9739-7d70c3453316",
    "result": "happy",
    "description": "You will be happy in 10 years!",
    "percentage": 50
  }
```

It stores the data on a PostgreSQL database.

Also has other HTTP Request Methods, such as GET and DELETE to GET all your predictions or to DELETE one.

## API Information Table

Method | Request URL | QueryString | Body
--- | --- | --- | ---
GET | api/v1/future | Optional, but you can pass `?id=` | -
POST | api/v1/future | - | { name: 'Name' } | -
DELETE | api/v1/future/:id | - | -

## Warning

This project is currently under development so has a lot of bugs.

## Development

You will need Docker. Clone this repository and then run `docker-compose up --build`.

By default it runs on `port:3000`.

## License

Apache 2.0 © [guastallaigor](https://github.com/guastallaigor)
