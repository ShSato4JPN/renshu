import { z } from "zod";

export const schema = z.object({
  title: z.string().nonempty(),
  memo: z.string().optional(),
});

export type UpdateData = z.infer<typeof schema>;
