'use server'

import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { streamText } from "ai";
import {createStreamableValue} from 'ai/rsc'
import { text } from "stream/consumers";

export const Generate=async()=>{

  const streamable=createStreamableValue()
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const result=streamText({
    model:google('gemini-1.5-flash'),
    prompt:'generate a long scary story'
  })


  for await (const part of result.textStream){
    console.log(part)
    streamable.update(part)
  }

  streamable.done()

  return streamable.value


}
