import {z} from 'zod'

export const schema = z.object({
  title: z.string().nonempty(),
  description:z.string().optional(),
  expire: z.string().nonempty(),
})

export type UpdateTodoDta = z.infer<typeof schema>
