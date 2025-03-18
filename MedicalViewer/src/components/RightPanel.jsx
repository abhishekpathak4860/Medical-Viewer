export default function RightPanel({ boundingBox}) {
  const displayedWidth = 500;
  const scaleFactorX = displayedWidth / 1076;

  return (
 <>

<div>
<div className="relative w-[500px] h-[280px]  custom-rigth-panel overflow-hidden">
      <img src="/cell.png" alt="Cell Image" className="w-[100%] h-[100%]" />
      {boundingBox.map((box, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: box[0] * scaleFactorX,
            top: box[1] * scaleFactorX,
            width: "11px",
            height: "14px", 
            border: "2px solid blue",
            boxSizing: "border-box",

          }}
        />
      ))}
    </div>
    <div className="w-[500px] border-2 border-black flex justify-around custom-patient">
      <h5>Patient Id</h5>
      <h5>Blood</h5>
    </div>
</div>
 </>
  );
}
