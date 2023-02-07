import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: String(process.env['OPENAI_API_KEY']),
});

const openai = new OpenAIApi(configuration);

const response = await openai.createImage({
  prompt: '3d render of superman fighting with Batman in space',
  n: 2,
  size: '1024x1024',
});

// console.log(response);
console.log(JSON.stringify(response.data, null, 2));
