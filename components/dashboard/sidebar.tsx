'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Home, Briefcase, Users, Settings, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/slices/authSlice';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Briefcase, label: 'Projects', href: '/auth/login' },
  { icon: Users, label: 'Team', href: '/auth/signup' },
]

export function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()
  const [showLabel, setShowLabel] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout()); 
    localStorage.removeItem('token');
    location.href = '/auth/login';
  };
  
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (expanded) {
      timer = setTimeout(() => {
        setShowLabel(true);
      }, 100);
    } else {
      setShowLabel(false);
    }
    return () => clearTimeout(timer); // Cleanup timeout
  }, [expanded]);


  return (
    <motion.div
      className={cn(
        "flex flex-col bg-gradient-to-b from-purple-100 to-purple-200 dark:bg-gradient-to-b dark:from-purple-600 dark:to-purple-500 h-screen p-4 shadow-lg",
        expanded ? "w-64" : "w-20"
      )}
      animate={{ width: expanded ? 256 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-end mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center p-2 rounded-lg transition-colors",
                  "hover:bg-white dark:hover:bg-gray-700",
                  pathname === item.href && "bg-white dark:bg-gray-700"
                )}
              >
                <item.icon className="w-6 h-6 text-gray-600  dark:text-white" />
                {expanded && showLabel && (
                    <span className="ml-3 text-gray-700 dark:text-gray-200">
                    {item.label}
                    </span>
                )}
              </Link>
            </li>
          ))}
          <li >
              <Button
                onClick={() => handleLogout()}
                className={cn(
                  "flex items-center p-2 rounded-lg transition-colors",
                  "hover:bg-white dark:hover:bg-gray-700",
                   "bg-purple-5 0 dark:bg-purple-600"
                )}
              >
                <LogOut className="w-6 h-6 text-gray-600  dark:text-white" />
                {expanded && showLabel && (
                    <span className="ml-3 text-gray-700 dark:text-gray-200">
                      LogOut
                    </span>
                )}
              </Button>
            </li>
        </ul>
      </nav>
    </motion.div>
  )
}

