import {
  useForm as useReactHookForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UseFormOptions<T extends FieldValues> = {
  schema: ZodSchema<T>;
} & Omit<UseFormProps<T>, "resolver">;

export function useForm<T extends FieldValues>(
  options: UseFormOptions<T>
): UseFormReturn<T> {
  const { schema, ...formOptions } = options;

  const form = useReactHookForm<T>({
    ...formOptions,
    resolver: zodResolver(schema),
  });

  return form;
}
