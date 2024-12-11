
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

// 이렇게 쿼리스트링은 동적페이지임
// 대신에 이건 캐시를 강제로 해서 예전에 물어본거를 바로 줄 수 있게 그나마 최적화하기
export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
  }) {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
    { cache: 'force-cache' });
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const books : BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
