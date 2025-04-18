"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Upload } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface DisputeResponseFormProps {
  disputeId: string
  assignmentTitle: string
}

export function DisputeResponseForm({ disputeId, assignmentTitle }: DisputeResponseFormProps) {
  const [response, setResponse] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles(prev => [...prev, ...fileArray])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!response.trim()) {
      toast.error("Please provide a response to the dispute")
      return
    }
    
    try {
      setIsSubmitting(true)
      
      // Upload files first if any
      let evidence: { url: string; name: string; type: string }[] = []
      
      if (files.length > 0) {
        setUploading(true)
        
        // Create FormData for file uploads
        const uploadPromises = files.map(async (file) => {
          const formData = new FormData()
          formData.append("file", file)
          
          // Upload to your file storage service
          // Replace with your actual upload endpoint
          const uploadRes = await fetch("/api/upload", {
            method: "POST",
            body: formData
          })
          
          if (!uploadRes.ok) {
            throw new Error(`Failed to upload file: ${file.name}`)
          }
          
          const data = await uploadRes.json()
          return {
            url: data.url,
            name: file.name,
            type: file.type
          }
        })
        
        evidence = await Promise.all(uploadPromises)
        setUploading(false)
      }
      
      // Submit response with evidence
      const res = await fetch("/api/disputes/respond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          disputeId,
          response,
          evidence
        })
      })
      
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error || "Failed to submit response")
      }
      
      toast.success("Your response has been submitted successfully")
      
      // Refresh the page to show the submitted response
      router.refresh()
      
      // Reset form
      setResponse("")
      setFiles([])
      
    } catch (error) {
      console.error("Error submitting response:", error)
      toast.error(error instanceof Error ? error.message : "Failed to submit response")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Respond to Dispute</CardTitle>
        <CardDescription>
          Provide your side of the story for dispute on "{assignmentTitle}"
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Textarea 
              placeholder="Explain your position clearly. Be specific and provide relevant details to support your case."
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              rows={6}
              className="w-full"
              required
            />
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Evidence (Optional)</p>
            <div className="flex items-center gap-2">
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => document.getElementById("file-upload")?.click()}
                disabled={uploading || isSubmitting}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
                disabled={uploading || isSubmitting}
              />
              <span className="text-xs text-muted-foreground">
                Upload any relevant documents, screenshots or evidence
              </span>
            </div>
            
            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm border p-2 rounded">
                    <span className="truncate">{file.name}</span>
                    <span className="text-xs text-muted-foreground">
                      ({Math.round(file.size / 1024)} KB)
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="ml-auto h-6 w-6 p-0"
                      onClick={() => removeFile(index)}
                      disabled={uploading || isSubmitting}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            disabled={isSubmitting || uploading || !response.trim()}
            className="w-full"
          >
            {(isSubmitting || uploading) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {uploading ? "Uploading Files..." : isSubmitting ? "Submitting Response..." : "Submit Response"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
} 