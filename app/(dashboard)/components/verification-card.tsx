"use client"

import { getUserVerificationStatus, uploadCitizenshipDocument } from "@/actions/upload-citizenship"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadButton } from "@/utils/uploadthing"
import { useUser } from "@clerk/nextjs"
import { AlertTriangle, CheckCircle, ChevronLeft, ChevronRight, FileWarning, Loader2, Upload } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"

// Define interfaces for the verification result data
interface VerificationData {
  hasDocument: boolean;
  verificationStatus: string | null;
  documentUrls: string[];
  rejectionReason?: string | null;
}

interface VerificationResult {
  success: boolean;
  data?: VerificationData;
  error?: string;
}

export function VerificationCard() {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [verificationStatus, setVerificationStatus] = useState<string | null>("pending")
  const [documentUrls, setDocumentUrls] = useState<string[]>([])
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [result, setResult] = useState<VerificationResult | null>(null)
  
  // Fetch current verification status
  const fetchVerificationStatus = useCallback(async () => {
    if (!user?.id) return
    
    try {
      setIsLoading(true)
      const result = await getUserVerificationStatus(user.id)
      
      if (result.success && result.data) {
        setVerificationStatus(result.data.verificationStatus)
        setDocumentUrls(result.data.documentUrls || [])
        setResult(result)
      }
    } catch (error: unknown) {
      console.error("Error fetching verification status:", error)
    } finally {
      setIsLoading(false)
    }
  }, [user?.id])
  
  // Load verification status on component mount
  useEffect(() => {
    fetchVerificationStatus()
  }, [fetchVerificationStatus])
  
  // Upload document handler
  const handleUploadComplete = async (res: { key: string; name: string; url: string; citizenshipPhotoUrl?: string }[]) => {
    if (!user?.id || !res || res.length === 0) return
    
    try {

      
      // If multiple files are selected, they should replace existing ones
      const replaceExisting = res.length > 1;
      
      // Process all files one by one
      for (let i = 0; i < res.length; i++) {
        const file = res[i];
        // Use citizenshipPhotoUrl from response if available, otherwise fall back to url
        const documentUrl = file.citizenshipPhotoUrl || file.url
        
        const result = await uploadCitizenshipDocument({
          userId: user.id,
          documentUrl,
          // Only set replaceExisting to true for the first file
          // The rest will append normally
          replaceExisting: replaceExisting && i === 0
        })
        
        if (!result.success) {
          toast.error(result.error || "Failed to upload a document")
        }
      }
      
      // Fetch updated status to get all documents after all uploads complete
      await fetchVerificationStatus()
      toast.success("Documents uploaded successfully")
      
    } catch (error: unknown) {
      console.error("Error handling upload:", error)
      toast.error("An error occurred while uploading documents")
    } 
  }
  
  // Navigate through photos
  const nextPhoto = () => {
    if (documentUrls.length > 1) {
      setCurrentPhotoIndex((prev) => (prev + 1) % documentUrls.length)
    }
  }
  
  const prevPhoto = () => {
    if (documentUrls.length > 1) {
      setCurrentPhotoIndex((prev) => (prev - 1 + documentUrls.length) % documentUrls.length)
    }
  }
  
  // Render status message based on verification status
  const renderStatusMessage = () => {
    if (isLoading) {
      return (
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Checking verification status...</span>
        </div>
      )
    }
    
    switch(verificationStatus) {
      case "verified":
        return (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-600">Verified</AlertTitle>
            <AlertDescription>
              Your account has been verified. You can now access all features.
            </AlertDescription>
          </Alert>
        )
      case "rejected":
        return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Verification Rejected</AlertTitle>
            <AlertDescription>
              Your verification was rejected. 
              {documentUrls.length > 0 ? " Please upload clearer documents." : " Please upload your documents."}
              {documentUrls.length > 0 && result?.data?.rejectionReason && (
                <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm">
                  <span className="font-semibold">Reason: </span>
                  {result.data.rejectionReason}
                </div>
              )}
            </AlertDescription>
          </Alert>
        )
      case "pending":
        return documentUrls.length > 0 ? (
          <Alert className="bg-yellow-50 border-yellow-200">
            <FileWarning className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-600">Pending Verification</AlertTitle>
            <AlertDescription>
           
              {documentUrls.length < 3 && (
                <p className="text-xs mt-1">
                  You can upload up to {3 - documentUrls.length} more document{documentUrls.length < 2 ? 's' : ''}.
                </p>
              )}
            </AlertDescription>
          </Alert>
        ) : (
          <Alert variant="default">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Verification Required</AlertTitle>
            <AlertDescription>
              Please upload your citizenship documents to verify your identity.
            </AlertDescription>
          </Alert>
        )
      default:
        return (
          <Alert variant="default">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Verification Required</AlertTitle>
            <AlertDescription>
              Please upload your citizenship documents to verify your identity.
            </AlertDescription>
          </Alert>
        )
    }
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Identity Verification</CardTitle>
        <CardDescription>
          To ensure security and trust, we require all users to verify their identity
          by uploading government-issued citizenship documents.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {renderStatusMessage()}
        
        {documentUrls.length > 0 && (
          <>
            <div className="aspect-video relative rounded-md overflow-hidden border">
              <Image 
                src={documentUrls[currentPhotoIndex]} 
                alt="Your citizenship document" 
                fill 
                className="object-cover"
              />
              
              {documentUrls.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90"
                    onClick={prevPhoto}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full bg-white/70 hover:bg-white/90" 
                    onClick={nextPhoto}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            
            {documentUrls.length > 1 && (
              <div className="flex justify-center space-x-1">
                {documentUrls.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`h-2 w-2 rounded-full ${
                      index === currentPhotoIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {verificationStatus !== "verified" && (documentUrls.length < 3 || verificationStatus === "rejected") && (
          <UploadButton
            endpoint="citizenshipUploader"
            className="bg-red-500"
            onClientUploadComplete={handleUploadComplete}
            onUploadError={(error: Error) => {
              toast.error(`Error uploading: ${error.message}`)
            }}
            content={{
              button({ isUploading }) {
                if (isUploading) {
                  return (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  )
                }
                return (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    {documentUrls.length > 0 ? "Upload Additional Document" : "Upload Document"}
                  </>
                )
              }
            }}
          />
        )}
      </CardFooter>
    </Card>
  )
}