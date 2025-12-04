import React, { Component, type ReactNode } from "react";
import "./ErrorBoundary.css";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
    console.error(error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="error-boundary">
            <h2 className="error-boundary__title">Oops... Something went wrong with our charts</h2>
            <pre className="error-boundary__message">
              {this.state.error?.message ?? "Unknown error"}
            </pre>
            <button className="error-boundary__button" onClick={this.handleReset}>
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
