import { z } from "zod";

export const createTodoInputSchema = z.object({
  title: z.string().nonempty({ message: "not empty" }),
  description: z.string().nonempty({ message: "not empty" }),
});

export type CreateTodoInput = z.infer<typeof createTodoInputSchema>;
