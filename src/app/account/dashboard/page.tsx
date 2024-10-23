"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { ArrowLeftCircle, BarChart, Bell, User } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function AccountDashboard() {
  const pathname = usePathname();
  if (!pathname) return null;

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <Link href="/dashboard">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
          </Link>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href="/dashboard/profile">
              <p
                className={
                  pathname === "/dashboard/profile"
                    ? "font-semibold text-primary"
                    : ""
                }
              >
                Profile
              </p>
            </Link>
            <Link href="/dashboard/notifications">
              <p
                className={
                  pathname === "/dashboard/notifications"
                    ? "font-semibold text-primary"
                    : ""
                }
              >
                Notifications
              </p>
            </Link>
            <Link href="/dashboard/statistics">
              <p
                className={
                  pathname === "/dashboard/statistics"
                    ? "font-semibold text-primary"
                    : ""
                }
              >
                Statistics
              </p>
            </Link>
            <Link
              className={clsx(
                pathname !== "/dashboard"
                  ? "flex flex-row items-center gap-1"
                  : "hidden"
              )}
              href="/dashboard"
            >
              <ArrowLeftCircle size={14} />
              <p>Back</p>
            </Link>
          </nav>
          <div className="flex-1 text-gray-900 dark:text-gray-50 font-sans">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <Card className="mx-auto max-w-7xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Dashboard</CardTitle>
                  <CardDescription>
                    Welcome to your dashboard. Here you can view important
                    information and statistics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">Data Examples</h3>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <div className="flex items-center">
                          <User className="w-5 h-5 mr-2" />
                          <span>User Profile</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <Bell className="w-5 h-5 mr-2" />
                          <span>Notifications</span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <BarChart className="w-5 h-5 mr-2" />
                          <span>Statistics</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Button className="mr-4">Save</Button>
                    <Button variant="secondary">Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
