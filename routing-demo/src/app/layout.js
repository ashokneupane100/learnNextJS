import { Metadata } from "next";

export const metadata = {
  title: {
   
    default: "Next.js Tutorial - Codevolution.",
    template: "%s | Codevolution",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>This is the header</p>
        </header>

        {children}

        <footer style={{ backgroundColor: "green", padding: "1rem" }}>
          <p>This is the footer</p>
        </footer>
      </body>
    </html>
  );
}