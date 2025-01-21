// Include packages needed for this application
// Openai library which provides easy access to OpenAI API in NodeJS projects
const OpenAIApi = require('openai');
// import OpenAI from 'https://deno.land/x/openai@v4.26.0/mod.ts';
// the readline-sync library to read user input from the command line
const readlineSync = require("readline-sync"); 
// We will add the dotenv package to the project. It helps us create the
// environment variable which we will use to store our API key. 
require("dotenv").config(); 

// Use OpenAI Create Completion:
// https://platform.openai.com/docs/api-reference/completions/create

// directly use OpenAI from the openai package and initializing it with the API key.
const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});

// function to summary text using OpenAI API functionality
async function summarizeText(text) {
    try {
        // https://platform.openai.com/docs/api-reference/chat/create
        const response = await openai.chat.completions.create({
            // define openai model API Endpoint https://api.openai.com/v1/completions
            // ID of the model to use. See the model endpoint compatibility table
            // for details on which models work with the Chat API.
            model: "gpt-4",
            // define the system message which helps set the behavior of the assistant
            messages: [
                {
                    // The role of the messages author, in this case system
                    role: "system",
                    // The contents of the system message.
                    content: "You are a helpful assistant."
                },
                {
                    // The role of the messages author, in this case system
                    role: "user",
                    // The contents of the system message.
                    content: `Summarize the following text: ${text}`
                }
            ],
            // Set tokens limit for the request
            // The maximum number of tokens that can be generated in the chat completion.
            max_tokens: 100
        });
        console.log(`Response from OpenAI: ${response}`); // Log the response to understand its structure
        // Extract the content of the last message from the completion
        const lastMessageContent = response.choices[0].message.content.trim();


        return lastMessageContent;
    // show message if openai call have an error
    } catch (error) {
        console.error(error);
        throw new Error('Failed to summarize text');
    }
}

// function to summary text using OpenAI API functionality
async function explainText(text) {
    try {
        // https://platform.openai.com/docs/api-reference/chat/create
        const response = await openai.chat.completions.create({
            // define openai model API Endpoint https://api.openai.com/v1/completions
            // ID of the model to use. See the model endpoint compatibility table
            // for details on which models work with the Chat API.
            model: "gpt-3.5-turbo",
            // define the system message which helps set the behavior of the assistant
            messages: [
                {
                    // The role of the messages author, in this case system
                    role: "system",
                    // The contents of the system message.
                    content: "You are a knowledgeable assistant."
                },
                {
                    // The role of the messages author, in this case system
                    role: "user",
                    // The contents of the system message.
                    content: `Explain the following text: ${text}`
                }
            ],
            // Set tokens limit for the request
            // The maximum number of tokens that can be generated in the chat completion.
            max_tokens: 200
        });
        console.log(`Response from OpenAI: ${response}`); // Log the response to understand its structure
        // Extract the content of the last message from the completion
        const lastMessageContent = response.choices[0].message.content.trim();

        return lastMessageContent;
    // show message if openai call have an error
    } catch (error) {
        console.error(error);
        throw new Error('Failed to summarize text');
    }
}

// function to summary text using OpenAI API functionality
async function analyzeSentiment(text) {
    try {
        // https://platform.openai.com/docs/api-reference/chat/create
        const response = await openai.chat.completions.create({
            // define openai model API Endpoint https://api.openai.com/v1/completions
            // ID of the model to use. See the model endpoint compatibility table
            // for details on which models work with the Chat API.
            model: "gpt-3.5-turbo",
            // define the system message which helps set the behavior of the assistant
            messages: [
                {
                    // The role of the messages author, in this case system
                    role: "system",
                    // The contents of the system message.
                    content: "You are an assistant trained to analyze sentiment."
                },
                {
                    // The role of the messages author, in this case system
                    role: "user",
                    // The contents of the system message.
                    content: `Analyze the sentiment of the following text: ${text}`
                }
            ],
            // Set tokens limit for the request
            // The maximum number of tokens that can be generated in the chat completion.
            max_tokens: 120
        });
        console.log(`Response from OpenAI: ${response}`); // Log the response to understand its structure
        // Extract the content of the last message from the completion
        const lastMessageContent = response.choices[0].message.content.trim();

        return lastMessageContent;
    // show message if openai call have an error
    } catch (error) {
        console.error(error);
        throw new Error('Failed to summarize text');
    }
}

// function to summary text using OpenAI API functionality
async function continueWriting(text) {
    try {
        // https://platform.openai.com/docs/api-reference/chat/create
        const response = await openai.chat.completions.create({
            // define openai model API Endpoint https://api.openai.com/v1/completions
            // ID of the model to use. See the model endpoint compatibility table
            // for details on which models work with the Chat API.
            model: "gpt-3.5-turbo",
            // define the system message which helps set the behavior of the assistant
            messages: [
                {
                    // The role of the messages author, in this case system
                    role: "system",
                    // The contents of the system message.
                    content: "You are a creative assistant that continues the story."
                },
                {
                    // The role of the messages author, in this case system
                    role: "user",
                    // The contents of the system message.
                    content: `Continue writing the following text: ${text}`
                }
            ],
            // Set tokens limit for the request
            // The maximum number of tokens that can be generated in the chat completion.
            max_tokens: 200
        });
        console.log(`Response from OpenAI: ${response}`); // Log the response to understand its structure
        // Extract the content of the last message from the completion
        const lastMessageContent = response.choices[0].message.content.trim();

        return lastMessageContent;
    // show message if openai call have an error
    } catch (error) {
        console.error(error);
        throw new Error('Failed to summarize text');
    }
}

// function to summary text using OpenAI API functionality
async function extractActionItem(text) {
    try {
        // https://platform.openai.com/docs/api-reference/chat/create
        const response = await openai.chat.completions.create({
            // define openai model API Endpoint https://api.openai.com/v1/completions
            // ID of the model to use. See the model endpoint compatibility table
            // for details on which models work with the Chat API.
            model: "gpt-3.5-turbo",
            // define the system message which helps set the behavior of the assistant
            messages: [
                {
                    // The role of the messages author, in this case system
                    role: "system",
                    // The contents of the system message.
                    content: "You are an assistant that identifies action items in the text."
                },
                {
                    // The role of the messages author, in this case system
                    role: "user",
                    // The contents of the system message.
                    content: `Extract action items from the following text: ${text}`
                }
            ],
            // Set tokens limit for the request
            // The maximum number of tokens that can be generated in the chat completion.
            max_tokens: 200
        });
        console.log(`Response from OpenAI: ${response}`); // Log the response to understand its structure
        // Extract the content of the last message from the completion
        const lastMessageContent = response.choices[0].message.content.trim();

        return lastMessageContent;
    // show message if openai call have an error
    } catch (error) {
        console.error(error);
        throw new Error('Failed to summarize text');
    }
}

// function to summary text using OpenAI API functionality
async function classifyContent(text) {
    try {
        // https://platform.openai.com/docs/api-reference/chat/create
        const response = await openai.chat.completions.create({
            // define openai model API Endpoint https://api.openai.com/v1/completions
            // ID of the model to use. See the model endpoint compatibility table
            // for details on which models work with the Chat API.
            model: "gpt-3.5-turbo",
            // define the system message which helps set the behavior of the assistant
            messages: [
                {
                    // The role of the messages author, in this case system
                    role: "system",
                    // The contents of the system message.
                    content: `You are a smart classifier. Categorize the text into the following categories: ${categoriesList}.`
                },
                {
                    // The role of the messages author, in this case system
                    role: "user",
                    // The contents of the system message.
                    content: `Classify the following text: ${text}`
                }
            ],
            // Set tokens limit for the request
            // The maximum number of tokens that can be generated in the chat completion.
            max_tokens: 120
        });
        console.log(`Response from OpenAI: ${response}`); // Log the response to understand its structure
        // Extract the content of the last message from the completion
        const lastMessageContent = response.choices[0].message.content.trim();

        return lastMessageContent;
    // show message if openai call have an error
    } catch (error) {
        console.error(error);
        throw new Error('Failed to summarize text');
    }
}

// export function summarizeText that call OpenAI
module.exports = {
    summarizeText,
    explainText,
    analyzeSentiment,
    continueWriting,
    extractActionItem,
    classifyContent
};