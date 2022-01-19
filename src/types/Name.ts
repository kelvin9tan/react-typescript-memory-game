export type NamePayload = {
  name: string
}

export enum NameActionTypes {
  SET_NAME = 'SET_NAME',
}

export type NameAction = {
  type: NameActionTypes.SET_NAME
  payload: NamePayload
}
