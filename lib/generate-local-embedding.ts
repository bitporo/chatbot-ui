// import { pipeline } from "@xenova/transformers"

// export async function generateLocalEmbedding(content: string) {
//   const generateEmbedding = await pipeline(
//     "feature-extraction",
//     "Xenova/all-MiniLM-L6-v2"
//   )

//   const output = await generateEmbedding(content, {
//     pooling: "mean",
//     normalize: true
//   })

//   const embedding = Array.from(output.data)

//   return embedding
// }

import { OllamaEmbeddings } from "@langchain/ollama";
export async function generateLocalEmbedding(content: string) {
  const ollamaEmbedding = new OllamaEmbeddings({
    model: 'quentinz/bge-large-zh-v1.5'
  })
  const vectorContent = await ollamaEmbedding.embedQuery(content)
  return vectorContent
}