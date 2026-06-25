import { cn } from '@/lib/cn';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-md flex-col gap-6 text-center">
        <div className="flex flex-col gap-2">
          <p className="text-label-14 text-gray-900">Vercel</p>
          <h1 className="text-heading-32 font-semibold tracking-tight">
            Sign in to continue
          </h1>
          <p className="text-copy-16 text-gray-900">
            Use your Vercel account to access this application.
          </p>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 items-center justify-center rounded-md bg-gray-1000 px-4',
            'text-button-14 font-medium text-background-100 transition-colors',
            'hover:bg-gray-900 focus-visible:outline focus-visible:outline-2',
            'focus-visible:outline-offset-2 focus-visible:outline-blue-700',
          )}
        >
          Continue with Vercel
        </button>
      </div>
    </main>
  );
}
