"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { DialogTitle } from "@radix-ui/react-dialog"
import Image from "next/image"

interface TaskFormValues {
  title: string
  description: string
  dueDate: Date
  images: FileList
}

interface TaskFormProps {
  open: boolean
  setIsOpen: (open: boolean) => void
}

export default function TaskForm({ open, setIsOpen }: TaskFormProps) {
 

  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newPreviewUrls = Array.from(files).map((file) => URL.createObjectURL(file))
      setImagePreviewUrls(newPreviewUrls)
    }
  }

  const onSubmit = async (data: TaskFormValues) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
    console.log(data)
    setIsSubmitting(false)
    form.reset()
    setImagePreviewUrls([])
    setIsOpen(false) // Close dialog after submission
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95%] md:max-w-xl rounded-sm max-h-[550px] overflow-hidden overflow-y-scroll">
     
    
        <DialogTitle className="hidden"></DialogTitle>
       

        <Card className="w-full mx-auto border-0 shadow-none">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text text-xl">Create New Task</CardTitle>
            <CardDescription>Add a new task with title, description, due date, and images.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter task title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={() => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                       
                      </FormControl>
                      <FormDescription>
                        Use the toolbar to format your text with bold, headings, lists, and more
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              

                <FormField
                  control={form.control}
                  name="images"
                  render={({ field: { onChange, ...field } }) => (
                    <FormItem>
                      <FormLabel>Images *(Max 6)</FormLabel>
                      <FormControl>
                        <div className="grid gap-4">
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                              handleImageChange(e)
                              onChange(e.target.files)
                            }}
                            {...field}
                          />
                          {imagePreviewUrls.length > 0 && (
                            <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                              {imagePreviewUrls.map((url, index) => (
                                <div key={index} className="relative aspect-square rounded-lg overflow-hidden border">
                                  <Image
                                    src={url || "/placeholder.svg"}
                                    alt={`Preview ${index + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormDescription>Upload one or multiple images for your task</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  {isSubmitting ? "Creating Task..." : "Create Task"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

