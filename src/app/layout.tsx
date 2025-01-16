import Header from "@/components/header";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="dark flex flex-col justify-center items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
