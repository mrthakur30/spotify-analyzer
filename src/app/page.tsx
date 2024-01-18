'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const token = localStorage.getItem('access-token');
  
  if(token){
     router.push('/dashboard')
  }else{
     router.push('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
    </main>
  )
}
