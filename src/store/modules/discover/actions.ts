import { action } from 'typesafe-actions'
import { DiscoverTypes, DiscoverData } from './types'

export const loadDiscoverRequest = (page?: number) =>
  action(DiscoverTypes.LOAD_DISCOVER_REQUEST, {
    page,
  })

export const loadDiscoverSuccess = (data: DiscoverData) =>
  action(DiscoverTypes.LOAD_DISCOVER_SUCCESS, data)

export const loadDiscoverFailure = () =>
  action(DiscoverTypes.LOAD_DISCOVER_FAILURE)
