import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const ContentImage = styled.div`
  a:hover {
    img {
      opacity: 70%;
    }
  }

  @media (max-width: 470px) {
    display: flex;
    justify-content: center;
  }
`

export const ContentInfo = styled.div`
  padding: 0.5rem;

  a {
    text-decoration: none;

    h3 {
      font-size: 16px;
      padding-bottom: 10px;
      color: ${colors.white};
    }
  }

  a:hover {
    h3 {
      color: ${colors.primary200};
    }
  }

  span {
    background-color: ${colors.primary100};
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 20px;
    padding: 0.4em 0.5em 0.2em 0.4em;
    margin-bottom: 0.3em;
    margin-right: 0.2em;
    display: inline-block;
  }

  p {
    padding: 1em 0;
    font-size: 12px;
    line-height: 16px;
  }
`