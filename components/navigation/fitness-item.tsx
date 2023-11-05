'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ActionTooltip } from '@/components/action-tooltip'
import { Dumbbell } from 'lucide-react'
import { useModal } from '@/hooks/use-modal-store'

interface FitnessItem {
    id: string
    imageUrl: string
    name: string
}

export const FitnessItem = ({ id, imageUrl, name }: FitnessItem) => {
    const { onOpen } = useModal()

    return (
        <ActionTooltip side='right' align='center' label={name}>
            <button className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-transparent border-0'>
                <Dumbbell onClick={() => onOpen('fitnessProfile')} />
            </button>
        </ActionTooltip>
    )
}
