import { useQuery } from '@tanstack/react-query'
import { getHeroesByPageAction } from '../actions/get-heroes-by-page.action'

export const usePaginatedHero = (page: number, limit: number, category = 'all') => {
  
    return useQuery({
      queryKey: ['heroes', {page, limit, category}], //It's mandatory to use the argments page and limit as key 
      queryFn: () => getHeroesByPageAction(+page, +limit, category),
      staleTime: 1000 * 60 * 5,
    })
}
