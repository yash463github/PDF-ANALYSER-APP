from fastapi import APIRouter, UploadFile
from utils.pdf_extractor import extract_text_from_pdf
from utils.embeddings import create_embeddings
from utils.vector_store import store_embeddings

router = APIRouter(prefix="/upload")

@router.post("/")
async def upload_pdf(file: UploadFile):
    text = extract_text_from_pdf(file.file)
    chunks = [text[i:i+1000] for i in range(0, len(text), 1000)]
    embeddings = create_embeddings(chunks)
    store_embeddings(chunks, embeddings)
    return {"status": "PDF processed successfully", "chunks": len(chunks)}
