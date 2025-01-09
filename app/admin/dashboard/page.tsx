'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAuth } from '@/hooks/useAuth'

interface User {
  id: string
  name: string
  email: string
  scores: { score: number, createdAt: string }[]
}

export default function AdminDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/')
    }
  }, [loading, user, router])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/admin/users')
      const data = await response.json()
      if (data.success) {
        setUsers(data.users)
      }
    }

    if (user && user.role === 'ADMIN') {
      fetchUsers()
    }
  }, [user])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user || user.role !== 'ADMIN') {
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Users: {users.length}</p>
          <p>Total Tests Taken: {users.reduce((acc, user) => acc + user.scores.length, 0)}</p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Tests Taken</TableHead>
                <TableHead>Average Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.scores.length}</TableCell>
                  <TableCell>
                    {user.scores.length > 0
                      ? (user.scores.reduce((acc, score) => acc + score.score, 0) / user.scores.length).toFixed(2)
                      : 'N/A'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

