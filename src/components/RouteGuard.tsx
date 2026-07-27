"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/app/resources";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
	children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();

  const isRouteEnabled = (() => {
    if (!pathname) return false;

    if (pathname in routes) {
      return routes[pathname as keyof typeof routes];
    }

    const dynamicRoutes = ["/blog", "/portfolio", "/work", "/web-design", "/applications"] as const;
    return dynamicRoutes.some((route) => pathname.startsWith(route) && routes[route]);
  })();

  if (!isRouteEnabled) {
		return <NotFound />;
	}

  return <>{children}</>;
};

export { RouteGuard };
