import Link from "next/link";

export default function Home() {
  return(
    <main style={{ padding: 20 }}>
        <h1 style={{ fontSize: 60 }}> CPRG306: Web Development 2 - Assignments </h1>
        <Link href="./week-2/" className="underline text-cyan-400 hover:text-cyan-800 block"> Week 2 Assignment </Link>
        <Link href="./week-3/" className="underline text-cyan-400 hover:text-cyan-800 block"> Week 3 Assignment </Link>
        <Link href="./week-4/" className="underline text-cyan-400 hover:text-cyan-800 block"> Week 4 Assignment </Link>
        <Link href="./week-5/" className="underline text-cyan-400 hover:text-cyan-800 block"> Week 5 Assignment </Link>
        <Link href="./week-6/" className="underline text-cyan-400 hover:text-cyan-800 block"> Week 6 Assignment </Link>
        <Link href="./week-7/" className="underline text-cyan-400 hover:text-cyan-800 block"> Week 7 Assignment </Link>
    </main>
  );
}
