const Stats = ({ stats }) => {
    console.log(stats)
  const {byStatus} = stats

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">Task Statistics</h2>
        <div className="flex justify-between">
            <div className="text-center">
                <h3 className="text-lg font-bold">Open</h3>
                <p className="text-blue-500 text-xl">{byStatus?.open}</p>
            </div>
            
            <div className="text-center">
                <h3 className="text-lg font-bold">In Progress</h3>
                <p className="text-yellow-500 text-xl">{byStatus?.inProgress}</p>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-bold">Completed</h3>
                <p className="text-green-500 text-xl">{byStatus?.completed}</p>
            </div>
        </div>
    </div>
  );
};

export default Stats;