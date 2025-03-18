
export default function ReportButton({ handleClick}) {

  return (
    <>
      <div className="relative flex items-center justify-center mt-4 rounded custom-report-button" >
        <button onClick={handleClick} className=" px-6 py-2 rounded text-center border-2 border-gray-400 cursor-pointer bg-black 
        text-white">Report</button>
      </div>
    </>
  )
}
