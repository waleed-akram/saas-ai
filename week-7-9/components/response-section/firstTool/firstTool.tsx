import ResponseSection from "../responsesection/responseSection";

export default function FirstToolResponseSection({
  params,
}: {
  params: string;
}) {
  return (
    <div>
      <ResponseSection params={params} sentFrom={"chatbuddy"} />
    </div>
  );
}
