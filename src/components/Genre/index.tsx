import React from 'react'

import { Genres } from '../../entities/Genre/types'
import { GenreProps } from './types'

import { Wrapper, Button } from './styles'

export function Genre(props: GenreProps) {
  const { genres, history } = props

  const handleSelectGenre = (id: number, name?: string) => {
    history.replace({
      pathname: `/dashboard/genre/${id}`,
      state: name,
    })
  }

  return (
    <Wrapper>
      <h4>Gêneros</h4>
      <ul>
        {genres.map((genre: Genres) => (
          <li key={genre.id}>
            <Button
              selected={genre.name === history.location.state}
              onClick={() => handleSelectGenre(genre.id, genre.name)}
              type="button"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
