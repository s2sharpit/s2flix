import styles from "@/app/styles/common.module.css"
import Image from "next/image";
export default async function page({ params }: { params: any }) {
    const { id } = params;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_KEY ?? "",
        "X-RapidAPI-Host": process.env.RAPID_HOST ?? "",
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

  return (
    <div className={styles.container}>
        <h2 className={styles.movie_title}>Netflix \ <span>{main_data.type} </span></h2>
        <div className={styles.cared_section}>
            <div>
                <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
            </div>
            <div>
                <h1>{main_data.title}</h1>
                <p>{main_data.synopsis}</p>
            </div>
        </div>
    </div>
  )
}