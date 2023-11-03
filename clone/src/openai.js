const { Configuration, OpenAIApi } = require("openai");
// Add an API key to the line below.
const configuration = new Configuration({ apiKey: "apiKey" });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.7, // The creativitiy of the response.
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    // Return the first choice of responses.
    return res.data.choices[0].text;
}