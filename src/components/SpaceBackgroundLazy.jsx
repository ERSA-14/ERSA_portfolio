import { lazy, Suspense } from "react";

const LazySpaceBackground = lazy(() =>
  import("./SpaceBackground").then((module) => ({
    default: module.SpaceBackground,
  }))
);

export const SpaceBackgroundLazy = () => {
  return (
    <Suspense
      fallback={<div className="fixed inset-0 pointer-events-none z-0" />}
    >
      <LazySpaceBackground />
    </Suspense>
  );
};
