import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { ThemePayload } from '../types/Theme'
import { GameConfigPayload } from '../types/GameConfig'
import { NamePayload } from '../types/Name'

interface RootState {
  Theme: ThemePayload
  GameConfig: GameConfigPayload
  Name: NamePayload
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
