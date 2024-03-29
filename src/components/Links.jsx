import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { getFundURL } from 'lib/utils'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Links() {
  const iconClassname = 'w-16 h-16'
  const colors = [
    'text-blue-700',
    'text-green-600',
    'text-purple-700',
    'text-orange-700',
  ]
  const hoverColors = [
    'hover:bg-blue-100',
    'hover:bg-green-100',
    'hover:bg-purple-100',
    'hover:bg-orange-100',
  ]
  return (
    <section id="links" className="border-t">
      <Container>
        <div className="relative overflow-hidden py-24 md:rounded-5xl">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 xl:max-w-none xl:grid-cols-2">
            {[
              {
                title: 'Community',
                description:
                  'Meet the people and companies that make up the dropout club community.',
                url: '/community',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Dropout Fund',
                description:
                  'DropoutFund is an early-stage venture capital fund that invests in dropout founders.',
                url: getFundURL(),
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                ),
              },
              {
                title: 'Blog',
                description:
                  'Read the latest from DropoutClub by signing up to read our blog today.',
                url: '/#blog',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                    />
                  </svg>
                ),
              },
              {
                title: 'Apply',
                url: '/apply',
                description:
                  'Ready to join the DropoutClub community? Apply in only a few minutes now.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={iconClassname}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                ),
              },
            ].map((elm, i) => (
              <a
                href={elm.url}
                className={`flex cursor-pointer space-x-6 rounded-2xl bg-gray-100 py-8 px-10 transition-all ${hoverColors[i]}`}
              >
                <div>
                  <p className="font-display text-3xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
                    {elm.title}
                  </p>
                  <p className="mt-2.5 text-xl tracking-tight text-gray-600">
                    {elm.description}
                  </p>
                </div>
                <div
                  className={`flex h-full flex-col items-center justify-center ${colors[i]}`}
                >
                  {elm.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
