import faiss
import numpy as np
import os
from sentence_transformers import SentenceTransformer

DB_PATH = "vectorstore/index.faiss"
CHUNKS_PATH = "vectorstore/chunks.npy"

embedder = SentenceTransformer('all-MiniLM-L6-v2')

def store_embeddings(chunks, embeddings):
    os.makedirs("vectorstore", exist_ok=True)
    vectors = np.array(embeddings).astype("float32")
    index = faiss.IndexFlatL2(vectors.shape[1])
    index.add(vectors)
    faiss.write_index(index, DB_PATH)
    np.save(CHUNKS_PATH, chunks)

def search_embeddings(query):
    query_vector = embedder.encode([query])[0].astype("float32")

    index = faiss.read_index(DB_PATH)
    chunks = np.load(CHUNKS_PATH, allow_pickle=True)
    D, I = index.search(np.expand_dims(query_vector, axis=0), k=3)
    return [(chunks[i], f"chunk-{i}") for i in I[0]]
