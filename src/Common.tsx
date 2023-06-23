import Link from "next/link";

export const Common = () => {
  return (
    <ul>
      <li>
        <Link href="/next1">next 1</Link>
      </li>

      <li>
        <Link href="/next2">next 2</Link>
      </li>

      <li>
        <Link href="/mpa1">mpa 1</Link>
      </li>

      <li>
        <Link href="/mpa2">mpa 2</Link>
      </li>
    </ul>
  );
};
