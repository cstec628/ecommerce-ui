export type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "textarea"
  | "select"
  | "checkbox";

export interface FieldConfig {
  name: string;
  label?: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value: string }[];
  disabled?: boolean;
}
