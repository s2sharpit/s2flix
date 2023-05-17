import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
import Link from "next/link";

export default async function Movie({searchParams}: {searchParams: {page: string}}) {
  // await new Promise(resolve => setTimeout(resolve, 2000))
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY ?? "",
      "X-RapidAPI-Host": process.env.RAPID_HOST ?? "",
    },
  };
  
  const total = 177;
  const dataPerPage = 8;
  
  const totalPages = Math.ceil(total / dataPerPage);
  
  let curPage = 1;
  
  if (Number(searchParams.page) >= 1) {
    curPage = Number(searchParams.page);
  }
  
  let offset = (curPage - 1) * dataPerPage;
  
  const url = `${process.env.RAPID_URL}query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=20&lang=en` ?? "";

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  let pageNo = [];

  for (let i = curPage - 3; i <= curPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    
    pageNo.push(i);
  }

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movie</h1>
        <div className={styles.card_section}>
          {main_data.map((curElem: any) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
      <div className={styles.container} style={{ display: 'flex', gap: '2rem', justifyContent: 'center',}}>
        {curPage > 1 && (
          <>
          <Link href={`/movie?page=${curPage-1}`}>{'<<'}</Link>
          </>
        )}
        {pageNo.map(page => <Link key={page} href={`/movie?page=${page}`} className={page === curPage ? styles.activeLink : ""}>{page}</Link>)}
        {curPage < totalPages && (
          <>
          <Link href={`/movie?page=${curPage+1}`}>{'>>'}</Link>
          </>
        )}
      </div>
    </section>
  );
}