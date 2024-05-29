import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "jUq5qptBvlOXYvNdEeXqMq7X02MVhwPWkNhZfARg", // This is your trial API key
});

export const getGPTResponse = async (message) => {
    try{
    const response = await cohere.generate({
      model: "command",
      prompt: message,
      maxTokens: 300,
      temperature: 0.9,
      k: 0,
      stopSequences: [],
      returnLikelihoods: "NONE"
    });
    console.log(`Prediction: ${response.generations[0].text}`);
    return response.generations[0].text;
  }catch(e){
    console.log(e);
  }
}