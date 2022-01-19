import {
  NameActionTypes,
  NameAction,
  NamePayload,
} from '../../types/Name'

const initialState = {
  name: '',
}

export default (
  state = initialState,
  action: NameAction,
): NamePayload => {
  const { type, payload } = action

  switch (type) {
    case NameActionTypes.SET_NAME:
      return { ...state, ...payload }
    default:
      return state
  }
}
