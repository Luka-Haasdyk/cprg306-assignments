import Link from "next/link";

export default function Home() {
  return(
    <main style={{ padding: 20 }}>
        <h1 style={{ fontSize: 60 }}> CPRG306: Web Development 2 - Assignments </h1>
        <Link href="./week-2/" className="underline text-cyan-400 hover:text-cyan-800"> Week 2 Assignment </Link>
    </main>
  );
}
