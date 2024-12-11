import { notFound } from "next/navigation";
import style from "./page.module.css";

// export const dynamicParams = false;
// 이거면 이제 아래 1,2,3 아니면 전부 not found로 가게됨

// 정적 파리미터 생성
// 여기 포함된 페이지를 빌드타임에 미리 만들게 됨
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
  }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`);
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
      }
      return <div>오류가 발생했습니다...</div>
    }

  const book = await response.json();
  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}