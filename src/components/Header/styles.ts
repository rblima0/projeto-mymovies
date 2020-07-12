import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  background-color: ${colors.black100};
  padding: 2rem 1rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.75rem;
  }
`
