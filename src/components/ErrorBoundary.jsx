import React from "react";

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
      error,
      errorInfo,
    });

    if (import.meta.env.PROD) {
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-primary">Oops!</h1>
              <h2 className="text-2xl font-semibold text-foreground">
                Something is Wrong
              </h2>
            </div>

            <p className="text-muted-foreground">
              I encountered an unexpected error. Please try refreshing the
              page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="cosmic-button w-fit mx-auto"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium w-fit mx-auto"
              >
                Go Home
              </a>
            </div>

            {!import.meta.env.PROD && this.state.error && (
              <details className="mt-8 text-left bg-card p-2 rounded-lg border border-border">
                <summary className="cursor-pointer font-semibold text-sm mb-2">
                  Error Details (For Developers Only)
                </summary>
                <pre className="text-xs overflow-auto text-red-500">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
