import SecontToolResponseSection from "../../../../../components/response-section/secondTool/secondTool";

export default async function Page({ searchParams }) {
  const raw : string = searchParams?.value ?? "empty";
  const value = decodeURIComponent(raw)

  console.log("The prompt sent to the secondTool route is: " + value);

  // const data = await fetch("");
  // const response = data.json();
  // console.log(response);
  return <SecontToolResponseSection params={value} />;
}
