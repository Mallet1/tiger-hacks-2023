import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'

import { NavigationAction } from './navigation-action'
import { NavigationItem } from './navigation-item'
import { Dumbbell } from 'lucide-react'
import { FitnessItem } from './fitness-item'

export const NavigationSidebar = async () => {
  const profile = await currentProfile()

  if (!profile) {
    return redirect('/')
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  })

  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3'>
      <NavigationAction />
      <Separator className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto' />
      <ScrollArea className='flex-1 w-full'>
        {servers.map((server) => {
          console.log(server)

          return (
            <div key={server.id} className='mb-4'>
              <NavigationItem
                id={server.id}
                name={server.name}
                imageUrl={server.imageUrl}
              />
            </div>
          )
        })}
      </ScrollArea>
      <div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
        <FitnessItem
          id={'fitness'}
          name={'Fitness'}
          imageUrl={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kdW1iYmVsbCI+PHBhdGggZD0ibTYuNSA2LjUgMTEgMTEiLz48cGF0aCBkPSJtMjEgMjEtMS0xIi8+PHBhdGggZD0ibTMgMyAxIDEiLz48cGF0aCBkPSJtMTggMjIgNC00Ii8+PHBhdGggZD0ibTIgNiA0LTQiLz48cGF0aCBkPSJtMyAxMCA3LTciLz48cGF0aCBkPSJtMTQgMjEgNy03Ii8+PC9zdmc+'
          }
        />
        <ModeToggle />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: 'h-[48px] w-[48px]',
            },
          }}
        />
      </div>
    </div>
  )
}
