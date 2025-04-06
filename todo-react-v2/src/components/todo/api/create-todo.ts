import {z} from 'zod'

export const schema = z.object({
  title: z.string().nonempty({message: "タイトルが入力されていません"}),
  description: z.string().optional(),
  expire: z.string().nonempty({message: "有効期限が入力されていません"}),
})

export type CreateTodoData = z.infer<typeof schema>