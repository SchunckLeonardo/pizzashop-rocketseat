import { Pizza } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="flex items-center gap-2 text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-500">
          Dashboard
        </Link>
        <Pizza className="h-4 w-4" />
      </p>
    </div>
  )
}
