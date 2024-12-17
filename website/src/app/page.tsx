import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/tms">TMS</Link>
      <Link href="/oms">OMS</Link>
      <Link href="/wms">WMS</Link>
    </div>
  );
}
