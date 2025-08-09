import React from "react";

export default function UploadArea({ onUpload }) {
  return (
    <div className="p-6 border rounded-xl text-center">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    </div>
  );
}
