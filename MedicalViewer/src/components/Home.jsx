import Table from "./Table";
import RightPanel from "./RightPanel";
import CentralPanel from "./CentralPanel";
import ReportButton from "./ReportButton";
import { useEffect, useState } from "react";
import GetYourReport from "./GetYourReport";
import DateComponent from "./DateComponent";
import Footer from "./Footer";

export default function Home() {
  const [boundingBox, setBoundingBox] = useState([]);
  const [Report, setReport] = useState(false);

  const handleClick = () => {
    setReport(true);
  }

  useEffect(() => {
    fetch("../detection_result.json")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setBoundingBox(data.boundingBoxes);

        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
    <DateComponent/>
      {
        Report ? (<div className="max-w-[1400px] m-auto custom-get-report relative w-[100%]">
          <div className="w-[100%] flex justify-around p-6  custom-home-responsive">
            <Table Report={Report} />
            <CentralPanel boundingBox={boundingBox} />
            <RightPanel boundingBox={boundingBox} />
          </div>
        </div>) : (<GetYourReport />)
      }
      <ReportButton Report={Report} handleClick={handleClick} />
      <Footer/>
    </>
  );
}