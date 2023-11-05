import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import { MemberRole } from '@prisma/client'

import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'

export async function POST(req: Request) {
    try {
        const { weight } = await req.json()
        const profile = await currentProfile()

        console.log(weight)

        if (!profile) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const server = await db.weights.create({
            data: {
                userId: profile.id,
                weight: weight,
            },
        })

        return NextResponse.json(server)
    } catch (error) {
        console.log('[SERVERS_POST]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
