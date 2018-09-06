const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;

  res.json(text);
});

app.listen(port, () => console.log(`Running on port ${port}`));






const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
  username: 'd33a14a6-0508-445c-91f0-31e30329692c',
  password: 'QnODSbHk1SZU',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16',
});

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;

  const params = {
    input: { text },
    workspace_id: '457efd58-f0ff-4304-83f6-0df6bf5df17b',
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});
