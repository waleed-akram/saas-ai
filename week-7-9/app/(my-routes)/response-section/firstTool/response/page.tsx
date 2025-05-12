import FirstToolResponseSection from "../../../../../components/response-section/firstTool/firstTool";

export default async function Page({searchParams}){
  const raw : string = searchParams?.value ?? "empty"
  const value = decodeURIComponent(raw);
  
    console.log("The prompt sent to the firstTool route is: " + value)
  
    // const data = await fetch("");
    // const response = data.json();
    // console.log(response)
    return <FirstToolResponseSection params={value}/> 
}
