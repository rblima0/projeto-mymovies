import styled from 'styled-components'

import { colors } from '../../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  width: 48%;
  margin: 1%;
  padding: 1rem;
  background-color: ${colors.black300};
  box-shadow: 0 6px 11.31px 1.69px rgba(0, 0, 0, 0.3);

  @media (max-width: 1130px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin: 10px 15px;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`