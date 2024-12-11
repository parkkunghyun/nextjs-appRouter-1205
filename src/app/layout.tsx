import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";


// 여기에 데이터 패칭은 되지만 캐싱이 없어서 no-store됨
// 즉 동적 페이지가 됨!!
// 그러면 관련된 모든 페이지가 전부 다이나믹페이지가 됨!! -> 그래서 캐시 강제 추가
async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" });

  if (!response.ok) {
    return <footer>제작 @winterlood</footer>
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @winterlood</div>
      <div>총 책의 개수 : {bookCount}</div>
    </footer>
  )
}

// 일단 여기 데이터 패칭이나 동적함수 있는지 확인
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
