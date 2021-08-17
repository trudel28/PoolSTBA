function StandingRow({rank, teamName, fullName, totalPoint, highValue}) {


    return (
        <tr className={rank == 15? "text-center hover:bg-gray-50 cursor-pointer":"text-center hover:bg-gray-50 cursor-pointer border-b"}>
            <td className="py-4">{rank + 1}</td>
            <td>{teamName}</td>
            <td>{fullName}</td>
            <td>{totalPoint}</td>
            {highValue > totalPoint?(<td className="text-red-600 font-medium">-{highValue-totalPoint}</td>):(<td className=""></td>)}
        </tr>
    )
}

export default StandingRow
