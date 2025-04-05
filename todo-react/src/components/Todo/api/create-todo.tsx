import { z } from "zod";

export const schema = z.object({
  title: z.string().nonempty(),
  memo: z.string().optional(),
});

export type TodoData = z.infer<typeof schema>;
