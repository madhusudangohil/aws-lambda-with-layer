let awslayer = require("aws-lambda-layer");

exports.handler = async (event, context) => {
  let c = awslayer.add(event.number1, event.number2);
  let d = awslayer.substract(event.number1, event.number2);
  console.log(c);
  console.log(d);
  let response = {
    statusCode: 200
  };
  return response;
};
