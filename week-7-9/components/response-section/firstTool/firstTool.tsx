import ResponseSection from "../responsesection/responseSection";

export default function FirstToolResponseSection({
  params,
}: {
  params: string;
}) {
  return <ResponseSection params={params} />;
}
