export const metadata = {
  title: "Mihir Shirsath | Data Engineer",
  description:
    "Data Engineer skilled in PySpark, AWS, SQL. Building scalable ETL pipelines and data systems.",
  keywords: ["Data Engineer", "PySpark", "AWS", "ETL", "SQL"],
  authors: [{ name: "Mihir Shirsath" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}