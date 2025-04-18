"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Upload, X, FileText } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { UploadButton } from "@/utils/uploadthing"
import { useUploadThing } from "@/lib/uploadthing"

interface DisputeResponseFormProps {
  disputeId: string
  assignmentTitle: string
}

export function DisputeResponseForm({ disputeId, assignmentTitle }: DisputeResponseFormProps) {
  const [response, setResponse] = useState("")
  const [evidence, setEvidence] = useState<Array<{ url: string; name: string; type: string }>>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  
  const { startUpload, isUploading } = useUploadThing("evidence")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!response.trim()) {
      toast.error("Please provide a response to the dispute")
      return
    }
    
    try {
      setIsSubmitting(true)
      
      // Prepare the evidence data as a proper JSON object
      const evidenceData = evidence.length > 0 ? 
        evidence.map(file => ({
          url: file.url,
          name: file.name,
          type: file.type
        })) : 
        [];
      
      // Submit response with evidence
      const res = await fetch("/api/disputes/respond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          disputeId,
          response,
          // Pass evidence as a stringified JSON to ensure it's treated as JSON
          evidence: evidenceData
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
      setEvidence([])
      
    } catch (error) {
      console.error("Error submitting response:", error)
      toast.error(error instanceof Error ? error.message : "Failed to submit response")
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeFile = (index: number) => {
    setEvidence(prev => prev.filter((_, i) => i !== index))
  }

  const getFileIcon = (type: string) => {
    if (type.includes('image')) return '🖼️';
    if (type.includes('pdf')) return '📄';
    return '📎';
  };
  
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
            <div className="flex flex-col gap-4">
              <UploadButton
                endpoint="evidence"
                className="bg-red-500"
                onClientUploadComplete={(res) => {
                  // Add the uploaded files to evidence
                  const uploadedFiles = res.map(file => ({
                    url: file.ufsUrl, // The correct URL from uploadthing
                    name: file.name,
                    type: file.type
                  }))
                  setEvidence(prev => [...prev, ...uploadedFiles])
                  toast.success(`Files uploaded successfully!`)
                }}
                onUploadError={(error: Error) => {
                  toast.error(`Error uploading: ${error.message}`)
                }}
              />
              
              {evidence.length > 0 && (
                <div className="mt-4 space-y-2 p-3 border rounded-md bg-muted/30">
                  <h4 className="text-sm font-medium mb-2">Uploaded Files:</h4>
                  {evidence.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-muted">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="text-lg">{getFileIcon(file.type)}</span>
                        <span className="truncate font-medium">{file.name}</span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 rounded-full"
                        onClick={() => removeFile(index)}
                        disabled={isUploading || isSubmitting}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            disabled={isSubmitting || isUploading || !response.trim()}
            className="w-full"
          >
            {(isSubmitting || isUploading) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isUploading ? "Uploading Files..." : isSubmitting ? "Submitting Response..." : "Submit Response"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
} 