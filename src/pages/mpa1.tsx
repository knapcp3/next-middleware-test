import { Inter } from "next/font/google";
import { Common } from "@/Common";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <h1>mpa1</h1>
      </div>

      <Common />
    </>
  );
}
