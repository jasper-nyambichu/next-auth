'use client'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <button className="text-primary-600 hover:text-primary-500">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-5 sm:p-6 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Welcome to your dashboard!
          </h2>
          <p className="text-gray-600">
            This is a protected page that only authenticated users can access.
          </p>
        </div>
      </main>
    </div>
  )
}