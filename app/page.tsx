import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to IQ Test App</h1>
      <Link href="/test">
        <Button size="lg">Start IQ Test</Button>
      </Link>
    </div>
  )
}

