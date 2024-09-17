import Link from "next/link";

export default function StudentInfo() {
    return (
      <div>
        <p> Luka Haasdyk </p>
        <Link href="https://github.com/Luka-Haasdyk/cprg306-assignments" className="underline text-cyan-400 hover:text-cyan-800"> My Github Repository </Link>
      </div>
    );
  }