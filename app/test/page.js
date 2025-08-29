// Create a test component at app/test/page.js
'use client'

import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function TestPage() {
  const [message, setMessage] = useState('Testing connection...')

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('profiles').select('count')
        if (error) {
          setMessage('Error: ' + error.message)
        } else {
          setMessage('Connection successful!')
        }
      } catch (error) {
        setMessage('Error: ' + error.message)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4">
      <h1>Supabase Connection Test</h1>
      <p>{message}</p>
    </div>
  )
}