import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

export function LinkButton({ active, href, className, cta, ...props }) {
  className = clsx(
    'whitespace-pre inline-flex justify-center ml-2 py-1.5 px-3.5 rounded-md text-base uppercase font-medium tracking-wide focus:outline-none',
    !cta && active
      ? 'bg-gray-100 text-gray-700'
      : 'text-gray-500 hover:text-gray-700',
    cta
      ? 'bg-gray-800 text-gray-100 hover:text-gray-100 hover:bg-gray-900'
      : 'text-gray-500 hover:text-gray-700',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
export function Header({ nav, active }) {
  const keys = Object.keys(nav)
  const [activeLabel, setActiveLabel] = useState(
    active && keys.includes(active) ? active : keys[0]
  )
  return (
    <header
      className="relative sticky top-0 z-50 border-b py-6"
      style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="lg:grow lg:basis-0">
          <Logo className="h-10 w-auto text-slate-900 sm:h-12" />
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {Object.keys(nav).map((label) => (
            <LinkButton
              href={nav[label]}
              onClick={() => setActiveLabel(label)}
              active={activeLabel === label}
              cta={label.toLowerCase() === 'apply'}
            >
              {label}
            </LinkButton>
          ))}
        </div>
      </Container>
    </header>
  )
}
