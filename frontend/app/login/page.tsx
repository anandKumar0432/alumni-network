import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LoginForm } from "@/components/login-form"
export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex min-h-svh w-full items-center justify-center">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}