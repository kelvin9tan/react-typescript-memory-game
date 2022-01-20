import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const MenuContainer = styled.div`
  border: 2px solid ${({ theme }): string => theme.primaryText};
  border-radius: 5px;
  width: 50%;
  min-width: 400px;
  overflow: hidden;
`

export const AppName = styled.h1`
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }): string => theme.primaryText};
  color: ${({ theme }): string => theme.background};
  padding: 8px 0;
`

export const MenuContent = styled.div`
  padding: 32px 24px;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
`

export const HighScoreButton = styled.div`
  display: flex;
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ theme }): string => theme.cardBackFace};
  color: white;
  padding: 20px 16px;
  justify-content: center;
  border-radius: 5px;
  margin: 0 8px 0 auto;
  width: 50%;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02);
  }
`

export const ScoreTable = styled.table`
  width: 100%;
`

export const ScoreTableContainer = styled.div`
  width: 100%;
  height: 40vh;
  overflow: auto;
`
export const ScoreTd = styled.td`
  text-align: center;
`