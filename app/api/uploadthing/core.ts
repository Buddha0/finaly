import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getAuth } from "@clerk/nextjs/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
    pdf: { maxFileSize: "8MB", maxFileCount: 3 },
    text: { maxFileSize: "8MB", maxFileCount: 10 },
    video: { maxFileSize: "1GB", maxFileCount: 2 },
  })
   
    .middleware(async (req) => {
     const { userId } = getAuth(req);

     if (!userId) throw new UploadThingError("Unauthorized");

     return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);

      // Return metadata to client-side callback
      return { uploadedBy: metadata.userId };
    }),
    
  // Special route for citizenship ID uploads with stricter limits
  citizenshipUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 2 },
  })
    .middleware(async (req) => {
      const { userId } = getAuth(req);

      if (!userId) throw new UploadThingError("Unauthorized");
 
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Citizenship ID uploaded for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
      
      // Return the file URL to be saved in the database
      return { 
        uploadedBy: metadata.userId,
        citizenshipPhotoUrl: file.ufsUrl
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
