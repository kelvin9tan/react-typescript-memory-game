import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useTypedSelector } from '../../../hooks'
import { PrimaryAction, SecondaryAction } from './styles'
import AlertModal from '../../../components/AlertModal'
import useClearGameState from '../useClearGameState'
import useCheckGameEnd from '../useCheckGameEnd'
import GameContext from '../GameContext'
import { BackendURL } from '../../../config/BackendURL'

const GameWinMessage: React.FC = () => {
  const { isShowingWinModal, setIsShowingWinModal, hoursText, minutesText, secondsText, difficulty } = useContext(GameContext)
  const { name } = useTypedSelector(({ Name }) => Name)

  const onClearGameState = useClearGameState()
  const history = useHistory()
  useCheckGameEnd()

  const onGoBack = (): void => {
    history.goBack()
    saveScore()
  }

  const onPlayAgain = (): void => {
    setIsShowingWinModal(false)
    onClearGameState()
    saveScore()
  }

  const saveScore = (): void => {
    Axios.post(BackendURL + '/add', {
      name, difficulty, timeSpent : `${hoursText}:${minutesText}:${secondsText}`
    })
  }

  return (
    <AlertModal
      isShowing={isShowingWinModal}
      onCloseModal={onPlayAgain}
      title={`Congratulations ${name}!`}
      message={`You proved that your memory is powerful (${hoursText}:${minutesText}:${secondsText})`}
    >
      <SecondaryAction onClick={onGoBack}>Go Back</SecondaryAction>
      <PrimaryAction onClick={onPlayAgain}>Play Again</PrimaryAction>
    </AlertModal>
  )
}

export default GameWinMessage
