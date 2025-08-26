import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center space-y-6"
          >
            <div className="text-6xl">🚨</div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-300 mb-4">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="block w-full px-6 py-3 text-gray-300 hover:text-white transition-colors"
              >
                Go Back
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="text-left bg-gray-800/50 rounded-lg p-4 text-sm">
                <summary className="cursor-pointer text-red-400 font-medium">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-gray-300 overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
