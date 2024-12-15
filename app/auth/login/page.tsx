'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'react-hot-toast'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthCard } from '@/components/auth/auth-card'
import { ThemeToggle } from '@/components/auth/theme-toggle'
import { validateUser } from '@/data/userData'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/store/slices/authSlice'
import { RootState } from '@/store/store'

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  
      if (isLoggedIn) {
        router.push("/dashboard")
      }
    
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address")
      return
    }

    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }

    if (!validateUser(email, password)) {
      toast.error("Invalid email or password")
      return
    }

    dispatch(login({ email, token: 'dummy-token' }));
    toast.success("Login successful!")
    setTimeout(() => {
      router.push("/dashboard")
    }, 500)
  }

  return (
    <div>
      <ThemeToggle />
      <AuthCard>
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">
              Welcome to <span className="text-purple-600 dark:text-purple-400">Devflo</span>!
            </h1>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-50 dark:bg-gray-700"
              />
            </div>
            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-50 dark:bg-gray-700"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/4 -translate-y-1/2 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
            >
              Log In
            </Button>
          </form>
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="signup" className="text-purple-600 dark:text-purple-400 hover:underline">
              Create a new account
            </Link>
          </p>
        </div>
      </AuthCard>
      <Toaster position="bottom-right" />
    </div>
  )
}
