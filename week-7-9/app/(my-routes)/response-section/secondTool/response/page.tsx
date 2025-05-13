import SecontToolResponseSection from "../../../../../components/response-section/secondTool/secondTool";

export default async function Page({ searchParams }) {
  const raw: string = searchParams?.value ?? "empty";
  const value = decodeURIComponent(raw);
  return <SecontToolResponseSection params={value} />;
}
