import React, { useState } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface CustomElementProps {
  type: 'button' | 'div'; // Add any additional prop types as needed
  onClick?: () => void;
}

const CustomElement: React.FC<CustomElementProps> = ({ type, onClick, children }:any) => {
  return React.createElement(type, { onClick }, children);
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }:any) => {
  const [hasError, setHasError] = useState(false);

  const handleRetry = () => {
    setHasError(false);
  };

  const handleCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
    setHasError(true);
  };

  if (hasError) {
    return (
      <div>
        <h2>Oops, there is an error!</h2>
        <CustomElement type="button" onClick={handleRetry}>
          Try again?
        </CustomElement>
      </div>
    );
  }

  return (
    <React.ErrorBoundary onError={handleCatch}>
      {children}
    </React.ErrorBoundary>
  );
};

export default ErrorBoundary;
