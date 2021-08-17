import Header from "../components/Header";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase"
import StandingRow from "../components/StandingRow";

function Standing() {

    const data = [];


    const [response, responseLoading, responseError] = useCollection(
        db.collection("poolers")
        .orderBy("totalPoint", "desc"),{
            snapshotListenOptions: {includeMetadataChanges:true}
        }
    )

    if(!responseLoading && response) {
        
        response.docs.map((doc) => data.push(doc.data()))
    }

    const points = []
    data.map(item => points.push( item.totalPoint))
    const highValue = Math.max(...points);

    
    return (
        <div className="flex flex-col items-start justify-center">
            <Header/>
            <div className="w-full border mt-10 mb-10 rounded-xl px-4">
            <table className="table-auto w-full overflow-x-auto">
            <caption className="text-3xl py-4">Classement</caption>
                <thead>
                    <tr className="border-b">
                        <th className="w-1/12 font-normal pb-5">Position</th>
                        <th className="w-5/12 font-normal pb-5">Équipe</th>
                        <th className="w-4/12 font-normal pb-5">DG</th>
                        <th className="w-1/12 font-normal pb-5">Points</th>
                        <th className="w-1/12 font-normal pb-5">Diff</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=> <StandingRow key={item.id} rank={index} teamName={item.teamName} fullName={item.fullName} totalPoint={item.totalPoint} highValue={highValue}/>)}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Standing
