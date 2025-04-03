"use client";

import { useParams } from "next/navigation";
import TaskView from "../components/view-task";

export default function AdminPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug || ""; // Ensure it's a string

  const components: Record<string, React.ReactNode> = {
    viewTasks: <TaskView/>,
  };
  
  return components[slug] || <p>Page not found</p>;
}
