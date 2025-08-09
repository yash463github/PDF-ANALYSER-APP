from fastapi import APIRouter
from pydantic import BaseModel
from utils.vector_store import search_embeddings
from utils.embeddings import call_llm

router = APIRouter(prefix="/query")

class QueryRequest(BaseModel):
    question: str

@router.post("/")
async def query_pdf(req: QueryRequest):
    top_chunks = search_embeddings(req.question)
    context = "\n".join([chunk for chunk, _ in top_chunks])
    answer = call_llm(context, req.question)
    return {"answer": answer, "sources": [s for _, s in top_chunks]}
