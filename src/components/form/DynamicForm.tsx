"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FieldConfig } from "@/types/form";
import { generateZodSchema } from "./generateZodSchema";
import { Form } from "lucide-react";
import { FormFieldRenderer } from "./FormFieldRenderer";

interface Props {
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
}

export function DynamicForm({ fields, onSubmit }: Props) {
  const schema = generateZodSchema(fields);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: "" }),
      {},
    ),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field) => (
          <FormFieldRenderer
            key={field.name}
            field={field}
            control={form.control}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
