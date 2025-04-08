import {z} from 'zod'

export const schema = z.object({
  title: z.string().nonempty({message: "タイトルを入力してください"}),
  description: z.string().optional(),
  expire: z.string().nonempty({message: "期限を入力してください"}),
})

export type UpdateTodoData = z.infer<typeof schema>