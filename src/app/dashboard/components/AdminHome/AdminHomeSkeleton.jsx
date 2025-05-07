export default function AdminHomeSkeleton() {
    return (
      <div className="flex flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 rounded-md bg-muted animate-pulse" />
          <div className="h-4 w-72 rounded-md bg-muted animate-pulse" />
        </div>
  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <div className="h-5 w-24 rounded-md bg-muted animate-pulse" />
                  <div className="h-5 w-5 rounded-md bg-muted animate-pulse" />
                </div>
                <div className="h-8 w-16 rounded-md bg-muted animate-pulse" />
                <div className="h-4 w-32 rounded-md bg-muted animate-pulse" />
              </div>
            </div>
          ))}
        </div>
  
  
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-4">
                <div className="h-6 w-48 rounded-md bg-muted animate-pulse" />
                <div className="h-4 w-64 rounded-md bg-muted animate-pulse" />
                <div className="h-[300px] rounded-md bg-muted animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }