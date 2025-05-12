export default function ResponseSection({params}:{params:string}) {
  
  return (
    <div className="mx-auto bg-gray-200 w-fit h-fit place-items-center rounded-md p-5 box-border min-w-250 min-h-80 my-4">
      <div className="my-30 italic underline place-items-center text-justify"><h4 className="text-xl">This is the response section</h4>
      <p className="mt-20">{params}</p>
      </div>
    </div>
  );
}
