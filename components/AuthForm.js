'use client'

import { useState } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'
import Card from './UI/Card'

export default function AuthForm({ type = 'login' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    // Auth logic will be added when we set up Supabase
    console.log(`${type} with:`, { email, password })
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setMessage(type === 'login' ? 'Login successful!' : 'Account created! Check your email.')
    }, 1000)
  }

  return (
    <Card className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        {type === 'login' ? 'Sign In' : 'Create Account'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Processing...' : (type === 'login' ? 'Sign In' : 'Create Account')}
        </Button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          message.includes('successful') || message.includes('created') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message}
        </div>
      )}
      
      <p className="mt-4 text-center text-sm text-gray-600">
        {type === 'login' ? "Don't have an account? " : "Already have an account? "}
        <a 
          href={type === 'login' ? '/signup' : '/login'} 
          className="text-primary-600 hover:text-primary-500 font-medium"
        >
          {type === 'login' ? 'Sign up' : 'Sign in'}
        </a>
      </p>
    </Card>
  )
}