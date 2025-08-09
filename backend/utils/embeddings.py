from sentence_transformers import SentenceTransformer
from transformers import pipeline

embedder = SentenceTransformer('all-MiniLM-L6-v2')
qa_pipeline = pipeline("text2text-generation", model="google/flan-t5-base")

def create_embeddings(chunks):
    return embedder.encode(chunks).tolist()

def call_llm(context, question):
    prompt = f"Context: {context}\n\nQuestion: {question}\nAnswer:"
    response = qa_pipeline(prompt, max_length=200, do_sample=False)
    return response[0]['generated_text']
