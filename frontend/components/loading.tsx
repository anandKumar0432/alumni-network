
export default function Loading(){
    
    return (
        <div>
        <main className="pt-20 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary"></div>
            <p className="text-muted-foreground text-sm">
                Loading profile...
            </p>
            </div>
        </main>
        </div>
    )
}