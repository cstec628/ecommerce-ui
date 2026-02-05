import { z } from "zod";
import { FieldConfig } from "@/types/form";

export function generateZodSchema(fields: FieldConfig[]) {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const field of fields) {
    let validator = z.string();

    if (field.type === "email") {
      validator = validator.email("Email không hợp lệ");
    }

    if (field.required) {
      validator = validator.min(1, `${field.label} là bắt buộc`);
    } else {
      validator = validator.optional();
    }

    shape[field.name] = validator;
  }

  return z.object(shape);
}
