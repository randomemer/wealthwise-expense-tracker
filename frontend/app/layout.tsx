import GlobalProvider from "@/components/providers/global";
import { inter } from "@/lib/theme";
import "@/public/index.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Manager",
  description: "Master Your Money, Shape Your Future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <GlobalProvider>
            <CssBaseline />
            {children}
          </GlobalProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
