import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { userId, score } = await req.json()

  try {
    const newScore = await prisma.score.create({
      data: {
        score,
        userId,
      },
    })

    return NextResponse.json({ success: true, score: newScore })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit score' }, { status: 500 })
  }
}

