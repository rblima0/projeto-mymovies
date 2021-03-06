import { History } from 'history'
import { GenreState } from '../../store/modules/genre/types'

export type MenuProps = {
  loadGenreRequest(): void
  genre: GenreState
  history: History
}
