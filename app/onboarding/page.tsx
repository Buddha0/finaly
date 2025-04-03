"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SetRole from "../../actions/set-role";
import { Role } from "@prisma/client";
import { useIsClient } from "../hooks/useIsClient";
import { CardContent, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import { UploadButton } from "@/utils/uploadthing";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);
  const [citizenshipPhotoUrl, setCitizenshipPhotoUrl] = useState<string | null>(null);
  const router = useRouter();
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  async function selectRole(role: Role) {
    setSelectedRole(role);
    setStep(2);
  }

  async function submitCitizenshipPhoto() {
    try {
      setLoading(true);
      
      if (!selectedRole) {
        throw new Error("Role is not selected");
      }
      
      if (!citizenshipPhotoUrl) {
        toast.error("Please upload your citizenship photo");
        return;
      }
      
      // Pass citizenship photo URL along with role
      await SetRole(selectedRole, citizenshipPhotoUrl);
      
      // Redirect to the dashboard
      router.push(`/${selectedRole.toLowerCase()}`);
      
    } catch (error) {
      console.error("Error completing onboarding:", error);
      toast.error("Failed to complete onboarding");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {step === 1 ? "Choose Your Role" : "Verify Your Identity"}
          </CardTitle>
          <CardDescription className="text-center">
            {step === 1 
              ? "Select how you want to use our platform" 
              : "Upload a photo of your citizenship ID for verification"
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {step === 1 ? (
            <div className="flex flex-col space-y-4">
              <Button
                onClick={() => selectRole(Role.POSTER)}
                disabled={loading}
                size="lg"
                className="w-full"
              >
                I want to post tasks
              </Button>
              <Button
                onClick={() => selectRole(Role.DOER)}
                disabled={loading}
                size="lg"
                variant="outline"
                className="w-full"
              >
                I want to complete tasks
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                {citizenshipPhotoUrl ? (
                  <div className="relative w-full h-48 rounded-md overflow-hidden border border-gray-300">
                    <Image 
                      src={citizenshipPhotoUrl} 
                      alt="Citizenship ID" 
                      fill 
                      style={{ objectFit: 'contain' }} 
                    />
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="absolute bottom-2 right-2 bg-white/80"
                      onClick={() => setCitizenshipPhotoUrl(null)}
                    >
                      Change
                    </Button>
                  </div>
                ) : (
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res.length > 0) {
                        setCitizenshipPhotoUrl(res[0].url);
                        toast.success("Photo uploaded successfully!");
                      }
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`Error uploading file: ${error.message}`);
                    }}
                  />
                )}
                
                <div className="text-xs text-gray-500 text-center">
                  <p>Your ID will be verified by our admin team</p>
                  <p>Your data will be kept secure and private</p>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setStep(1);
                    setCitizenshipPhotoUrl(null);
                  }}
                  className="w-full"
                >
                  Back
                </Button>
                <Button 
                  type="button"
                  onClick={submitCitizenshipPhoto}
                  disabled={loading || !citizenshipPhotoUrl}
                  className="w-full"
                >
                  {loading ? "Saving..." : "Complete"}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
