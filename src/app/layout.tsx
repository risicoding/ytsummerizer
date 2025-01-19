import "@/styles/globals.css";
export default function SummerizeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="antialiased dark">{children}</body>
    </html>
  );
}
