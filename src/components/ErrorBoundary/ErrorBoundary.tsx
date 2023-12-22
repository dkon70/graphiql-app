import { Component, ReactNode } from 'react';
import { Button } from '../ui/button';

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error | null;
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, error: error });
    console.error(`ErrorBoundary: ${error}`);
  }

  reloadHandler() {
    window.location.replace('/');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-slate-600 flex-col gap-5">
          <h1 className="text-white text-3xl">
            Oops... something went wrong...
          </h1>
          <Button variant="secondary" onClick={this.reloadHandler}>
            Reload app
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
