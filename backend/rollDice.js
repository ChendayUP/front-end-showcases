var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var bodyParser = require('body-parser')
// 使用 GraphQL schema language 构造一个 schema
var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);
 
// root 为每个端点入口 API 提供一个解析器
var root = {
  rollDice: ({numDice, numSides}) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};


 
var app = express();
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  console.log('request:', req.body);
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');