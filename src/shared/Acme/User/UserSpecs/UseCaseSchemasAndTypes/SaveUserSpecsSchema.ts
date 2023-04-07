import { Static, Type } from '@sinclair/typebox'

export const SaveUserSpecsRequestBodySchema = Type.Object({
  name: Type.String(),
  middleName: Type.Optional(Type.String()),
  firstName: Type.String(),
  lastName: Type.String(),
  age: Type.Number(),
  birthDate: Type.String(),
})

export type SaveUserSpecsRequestBodyType = Static<typeof SaveUserSpecsRequestBodySchema>
