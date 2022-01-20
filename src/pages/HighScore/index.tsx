import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import {
  Container,
  MenuContainer,
  MenuContent,
  AppName,
  HighScoreButton,
  ButtonContainer,
  ScoreTableContainer,
  ScoreTable,
  ScoreTd,
} from './styles'
import { BackendURL } from '../../config/BackendURL'

const HighScore: React.FC = () => {
  const history = useHistory()
  const [scores, setScores] = useState([])

  useEffect(() => {
    const init = async () => {
      let result = await Axios.get(BackendURL + '/get')
      if(result) setScores(result.data)
    }
    init()
  }, [])

  const onGamePlay = (): void => {
    history.push('/')
  }

  type Scores = {
    name: string,
    difficulty: string,
    timespent: string,
    created: string
  }

  return (
    <Container>
      <MenuContainer>
        <AppName>Game High Score</AppName>

        <MenuContent>
          <ScoreTableContainer>
            <ScoreTable>
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Difficulty
                  </th>
                  <th>
                    Time spent
                  </th>
                  <th>
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.map((s: Scores) => (
                  <tr>
                    <ScoreTd>
                      {s.name}
                    </ScoreTd>
                    <ScoreTd>
                      {s.difficulty}
                    </ScoreTd>
                    <ScoreTd>
                      {s.timespent}
                    </ScoreTd>
                    <ScoreTd>
                      {s.created}
                    </ScoreTd>
                  </tr>
                ))}
              </tbody>
            </ScoreTable>
          </ScoreTableContainer>

          <ButtonContainer>
            <HighScoreButton onClick={onGamePlay}>Game Play</HighScoreButton>
          </ButtonContainer>
        </MenuContent>
      </MenuContainer>
    </Container>
  )
}

export default HighScore
