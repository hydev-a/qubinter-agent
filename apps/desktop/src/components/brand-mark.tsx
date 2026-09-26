import { cn } from '@/lib/utils'
const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

// The Qubinter mark stays legible on both light and dark app surfaces.
export function BrandMark({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={cn('inline-flex size-14 shrink-0 items-center justify-center', className)} {...props}>
      <img alt="" className="size-full rounded-lg object-contain" src={assetPath('qubinter-icon.png')} />
    </span>
  )
}
