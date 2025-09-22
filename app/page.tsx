import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
              Real-time
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                Collaborative
              </span>
              <br />
              Note Sharing
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty max-w-2xl mx-auto">
              Create, edit, and share notes with your team in real-time. See changes as they happen, collaborate
              seamlessly, and never lose your ideas.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <Link href="/auth/signup">Get Started Free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
            >
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Editing</h3>
              <p className="text-slate-400">
                See changes instantly as your team edits. Live cursors and presence indicators keep everyone in sync.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Sharing</h3>
              <p className="text-slate-400">
                Control who can view and edit your notes with granular permissions and secure sharing links.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Auto-save</h3>
              <p className="text-slate-400">
                Never lose your work. Changes are automatically saved as you type, with full version history.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-slate-500 text-sm">
            <p>Start collaborating today • No credit card required</p>
          </div>
        </div>
      </div>
    </div>
  )
}
