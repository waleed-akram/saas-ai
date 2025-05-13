import FirstToolResponseSection from "../../../../../components/response-section/firstTool/firstTool";

export default async function Page({ searchParams }) {
  const raw: string = searchParams?.value ?? "empty";
  const value = decodeURIComponent(raw);
  return <FirstToolResponseSection params={value} />;
}
