import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {/* suspense-미완성, 사전렌더링할때 클라이언트 컴포넌트를 곧바로 로딩하지 않음
        이 컴포넌트의 비동기작업이 완료될때까지 미완성됨 -> 즉 쿼리스트링을 부르는 useSearchParams가 끝날때까지
      */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
