import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import UseMousePointer from "@/utils/MouseCursorUtilis";
import { DirectionProvider } from "@/hooks/useDirection";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export const metadata = {
  title: "BeaTSouL",
  description: "Music inspiration for your idols",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Music inspiration for your idols" />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body suppressHydrationWarning={true}>
        <UseMousePointer />
        <ReduxProvider>
          <AppProvider>
            <DirectionProvider>{children}</DirectionProvider>
          </AppProvider>
          <ToastContainer
            position="top-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
