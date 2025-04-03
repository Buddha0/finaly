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
import { Loader2, Upload, CheckCircle2, XCircle } from "lucide-react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);
  const [citizenshipPhotoUrl, setCitizenshipPhotoUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
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

      await SetRole(selectedRole, citizenshipPhotoUrl);
      router.push(`/${selectedRole.toLowerCase()}`);

    } catch (error) {
      console.error("Error completing onboarding:", error);
      toast.error("Failed to complete onboarding");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold text-center">
            {step === 1 ? "Choose Your Role" : "Verify Your Identity"}
          </CardTitle>
          <CardDescription className="text-center text-sm">
            {step === 1
              ? "Select how you want to use our platform"
              : "Upload a clear photo of your citizenship ID for verification"
            }
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-6">
          {step === 1 ? (
            <div className="flex flex-col space-y-4">
              <Button
                onClick={() => selectRole(Role.POSTER)}
                disabled={loading}
                size="lg"
                className="w-full h-16 text-lg"
              >
                I want to post tasks
              </Button>
              <Button
                onClick={() => selectRole(Role.DOER)}
                disabled={loading}
                size="lg"
                variant="outline"
                className="w-full h-16 text-lg"
              >
                I want to complete tasks
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                {citizenshipPhotoUrl ? (
                  <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-50">
                    <Image
                      src={citizenshipPhotoUrl}
                      alt="Citizenship ID"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-2"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => setCitizenshipPhotoUrl(null)}
                      >
                        Change Photo
                      </Button>
                    </div>
                  </div>
                ) : (
               


              
                  <UploadButton
                    endpoint="imageUploader"
                     className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      console.log("Error: ", error);
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
               
              
                )}

                <div className="bg-blue-50 p-4 rounded-lg w-full space-y-2">
                  <h4 className="text-sm font-medium text-blue-900">Important Guidelines:</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      Ensure the ID is clearly visible and well-lit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      All text should be readable
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      Your data will be kept secure and private
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setStep(1);
                    setCitizenshipPhotoUrl(null);
                  }}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={submitCitizenshipPhoto}
                  disabled={loading || !citizenshipPhotoUrl || isUploading}
                  className="flex-1"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Complete"
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
