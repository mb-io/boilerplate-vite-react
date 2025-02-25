import { jsonPlaceholderService } from '@/services/json-placeholder-service/json-placeholder-service'
import { useQuery } from '@tanstack/react-query'

export const useJsonPlaceholder = () => {
  const service = jsonPlaceholderService()

  return useQuery({
    queryKey: ['json-placeholder'],
    queryFn: async () => await service.fetch(),
    enabled: true
  })
}
