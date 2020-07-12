import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.875rem;

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 30px;
      margin: 0 0.313rem;
      padding: 0.313rem;
      text-align: center;
      cursor: pointer;
      background-color: ${colors.primary100};

      button {
        border: 0;
        color: ${colors.white};
        background-color: transparent;
        font-weight: 700;
      }
    }

    li:hover {
      background-color: ${colors.primary};
    }
  }
`
