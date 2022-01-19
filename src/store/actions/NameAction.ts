import {
  NameActionTypes,
  NameAction,
  NamePayload,
} from '../../types/Name'

export const setName = (
  payload: NamePayload,
): NameAction => ({
  type: NameActionTypes.SET_NAME,
  payload,
})
