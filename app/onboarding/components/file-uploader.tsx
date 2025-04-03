"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Loader2 } from "lucide-react";

interface FileUploaderProps {
  startUpload: (files: File[]) => Promise<{ url: string }[]>;
  isUploading: boolean;
}

export function FileUploader({ startUpload, isUploading }: FileUploaderProps) {
  // Callback for when files are dropped/selected
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        startUpload(acceptedFiles);
      }
    },
    [startUpload]
  );

  // Setup dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    maxFiles: 1,
    maxSize: 4 * 1024 * 1024, // 4MB (matches server constraint)
  });

  return (
    <div 
      {...getRootProps()} 
      className={`
        w-full h-48 border-2 border-dashed rounded-md 
        flex flex-col items-center justify-center cursor-pointer 
        transition-colors duration-200
        ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:bg-gray-50'}
        ${isUploading ? 'pointer-events-none opacity-70' : ''}
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center justify-center p-4 text-center">
        {isUploading ? (
          <>
            <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
            <p className="text-sm text-gray-500">Uploading...</p>
          </>
        ) : (
          <>
            <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              {isDragActive ? "Drop the file here" : "Drag & drop or click to upload"}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PNG, JPG, or JPEG (max 4MB)
            </p>
          </>
        )}
      </div>
    </div>
  );
} 