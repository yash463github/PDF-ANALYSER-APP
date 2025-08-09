const API_BASE = "http://localhost:8000";

export async function uploadPDF(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${API_BASE}/upload/`, {
    method: "POST",
    body: formData,
  });
  return await res.json();
}

export async function askQuestion(question) {
  const res = await fetch(`${API_BASE}/query/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  return await res.json();
}
