# 📄 PDF Q&A Web Application using Any LLM 

## 🚀 Overview
This project is a **Retrieval-Augmented Generation (RAG)**-based web application that allows users to **upload a PDF** and **ask natural language questions** about its content.  
It works with **any LLM**, such as Hugging Face's `flan-t5-base`, without requiring paid APIs like OpenAI.

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router

**Backend**
- FastAPI (Python)
- FAISS (Vector Database)
- Sentence Transformers (`all-MiniLM-L6-v2`) for embeddings
- Hugging Face Transformers (`flan-t5-base`) for text generation

**PDF Processing**
- `pdfplumber` for text extraction

---

## 📂 Project Structure
