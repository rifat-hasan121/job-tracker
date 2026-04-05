"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create an account to get start tracking your job applications</CardDescription>
        </CardHeader>

        <form>
          <CardContent>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" required placeholder="Jon Doe" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required placeholder="jone@example.com" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" required placeholder="••••••••" />
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  )
}
