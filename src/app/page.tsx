import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Tint!
      </div>
      <div>
        No data to retrieve yet.
      </div>
      <div>
        Calls: [getX, getY, getZ]
      </div>
      <div>
        On-Chain Analytics for Aleo
      </div>
    </main>
  )
}
