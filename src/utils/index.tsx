import { Suspense } from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-12 w-12 text-purple-500 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l-3.5 3.5L12 8V4a8 8 0 100 16v-4l-3.5-3.5L12 16v4a8 8 0 01-8-8z"
          ></path>
        </svg>
        <p className="text-white text-xl">Loading...</p>
      </div>
    </div>
  );
};

const SuspenseComponent = ({ children }: { children: JSX.Element }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export { Loading, SuspenseComponent };
