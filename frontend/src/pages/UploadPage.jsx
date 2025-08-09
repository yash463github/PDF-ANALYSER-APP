import React from "react";
import UploadArea from "../components/UploadArea";
import { uploadPDF } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();

  const handleUpload = async (file) => {
    await uploadPDF(file);
    navigate("/chat");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <UploadArea onUpload={handleUpload} />
    </div>
  );
}
