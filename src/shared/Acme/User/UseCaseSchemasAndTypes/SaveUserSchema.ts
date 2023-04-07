import { Static, Type } from '@sinclair/typebox'
import {SaveUserSpecsRequestBodySchema} from "../UserSpecs/UseCaseSchemasAndTypes/SaveUserSpecsSchema";
import {SaveUserContactRequestBodySchema} from "../UserContact/UseCaseSchemasAndTypes/SaveUserContactSchema";

export const SaveUserRequestBodySchema = Type.Object({
  specs: SaveUserSpecsRequestBodySchema,
  contact: SaveUserContactRequestBodySchema,
})

export type SaveUserRequestBodyType = Static<typeof SaveUserRequestBodySchema>
