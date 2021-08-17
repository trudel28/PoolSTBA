import Image from 'next/image'

function PlayerRow() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 border rounded-full">
                    <Image
                        src="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471675.jpg"
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
                <p className="text-md ml-6 sm:text-2xl">Sidney Crosby</p>
            </div>
            <p className="text-2xl sm:text-4xl">15</p>
        </div>
    )
}

export default PlayerRow
