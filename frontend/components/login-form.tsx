"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(BACKEND_URL);
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    console.log(BACKEND_URL);
    const handleLogin = async ()=>{
        try{
            console.log("im in handle login");
            console.log(email);
            console.log(password);
            const res = await axios.post(
                `${BACKEND_URL}/auth/login`, 
                {
                email,
                password
                },
                {
                    withCredentials: true
                }
            )
            if (res && res.data && typeof res.data === 'object' && 'route' in res.data && typeof res.data.route === 'string') {
              console.log(res.data);
              router.push(res.data.route);
            }
            } catch(error){
                console.error('login failed :', error);
            }
    }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e)=>{
            e.preventDefault();
            handleLogin();
          }}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                    id="password" 
                    type="password" 
                    required 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
              </Field>
              <Field>
                <Button
                 type="submit"
                 >Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/register">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}