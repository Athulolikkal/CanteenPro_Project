import React, { ReactNode } from 'react'
import ErrorBoundaryPage from './ErrorBoundaryPage'
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary'


const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorBoundaryPage error={error} resetErrorBoundary={resetErrorBoundary}></ErrorBoundaryPage>
  )
}

interface ErrorBoundaryHandleProps {
  children: ReactNode;
}

const ErrorBoundaryHandle: React.FC<ErrorBoundaryHandleProps> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundaryHandle