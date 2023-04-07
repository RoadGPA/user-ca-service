import { Static, Type } from '@sinclair/typebox'

export const SaveUserContactRequestBodySchema = Type.Object({
  cellphone: Type.String(),
  email: Type.String({ format: 'email' }),
})

export type SaveUserContactRequestBodyType = Static<typeof SaveUserContactRequestBodySchema>
