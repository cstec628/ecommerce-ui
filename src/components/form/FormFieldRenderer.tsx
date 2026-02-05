"use client";

import { Control } from "react-hook-form";
import { FieldConfig } from "@/types/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  field: FieldConfig;
  control: Control<any>;
}

export function FormFieldRenderer({ field, control }: Props) {
  return (
    <FormField
      name={field.name}
      control={control}
      render={({ field: rhf }) => (
        <FormItem>
          <FormLabel>{field.label}</FormLabel>
          <FormControl>
            {field.type === "textarea" && <Textarea {...rhf} />}

            {field.type === "select" && (
              <Select value={rhf.value} onValueChange={rhf.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {!["textarea", "select"].includes(field.type) && (
              <Input type={field.type} {...rhf} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
