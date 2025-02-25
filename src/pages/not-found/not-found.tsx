import { FaArrowLeftLong, FaExclamation } from 'react-icons/fa6'
import { Button } from '@heroui/button'
import { useNavigate } from 'react-router-dom'

import { title } from '@/utils/primitives'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex items-center justify-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary-50">
          <div className="flex size-5 items-center justify-center rounded-full border-1 border-primary">
            <FaExclamation className="text-primary" size={12} />
          </div>
        </div>
      </div>
      <h1 className={title()}>Page not found</h1>
      <p>{"The page you are looking for doesn't exist."}</p>
      <div className="flex items-center justify-center gap-4">
        <Button onPress={() => navigate(-1)}>
          <FaArrowLeftLong />
          Go back
        </Button>
        <Button color="primary" onPress={() => navigate('/')}>
          Take me home
        </Button>
      </div>
    </section>
  )
}
