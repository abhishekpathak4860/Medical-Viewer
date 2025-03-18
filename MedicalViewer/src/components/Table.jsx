export default function Table() {
    const data1 = [
        { type: "Normal RBC", count: 45, percentage: 70 },
        { type: "Angled Cells", count: 18, percentage: 28 },
        { type: "Irregular Cells", count: 5, percentage: 8 },
        { type: "Fragmented RBC", count: 2, percentage: 4 }
    ];

    const data2 = [
        { type: "Neutrophils", count: 60, percentage: 55 },
        { type: "Lymphocytes", count: 30, percentage: 35 },
        { type: "Monocytes", count: 8, percentage: 7 },
        { type: "Eosinophils", count: 2, percentage: 3 }
    ];

    const data3 = [
        { type: "Platelet Count", number: 250000 },
        { type: "Mean Platelet Volume", number: 10 }
    ];

    return (
        <>
            
                <div className=" w-[35%] mt-1 shadow-[0px_4px_10px_rgba(255,255,0,0.5)] custom-table-responsive">
                    <table className="border-2 border-black w-full text-center">
                        <thead className="bg-green-300">
                            <tr>
                                <th className="p-2 border border-black w-1/2">RBC</th>
                                <th className="p-2 border border-black w-1/4">Count</th>
                                <th className="p-2 border border-black w-1/4 break-words">Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data1.map((item, index) => (
                                <tr className="border-2 border-black" key={index}>
                                    <td className="p-2 border border-black break-words">{item.type}</td>
                                    <td className="p-2 border border-black">{item.count}</td>
                                    <td className="p-2 border border-black break-words">{item.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table className="border-2 border-black w-full text-center  ">
                        <thead className="bg-green-300">
                            <tr>
                                <th className="p-2 border border-black w-1/2">WBC</th>
                                <th className="p-2 border border-black w-1/4">Count</th>
                                <th className="p-2 border border-black w-1/4">Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item, index) => (
                                <tr className="border-2 border-black" key={index}>
                                    <td className="p-2 border border-black break-words">{item.type}</td>
                                    <td className="p-2 border border-black">{item.count}</td>
                                    <td className="p-2 border border-black">{item.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table className="border-2 border-black w-full text-center ">
                        <thead className="bg-green-300">
                            <tr>
                                <th className="p-2 text-center" colSpan="2">Platelets</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data3.map((item, index) => (
                                <tr className="border-2 border-black" key={index}>
                                    <td className="p-2 border border-black break-words">{item.type}</td>
                                    <td className="p-2 border border-black">{item.number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            
        </>
    );
}
