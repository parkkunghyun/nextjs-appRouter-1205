

export default async function Page(
    { searchParams }:
        { searchParams: Promise<{ q: string }> }) {

    const { q } = await searchParams;
    return (
        <div>
            {q}
        </div>
    )
 }

// searchParams 가 쿼리 스트링에 있음 searchParams.q에 저장되어있음
 // localhost:3000/search?q=한입ㄷ