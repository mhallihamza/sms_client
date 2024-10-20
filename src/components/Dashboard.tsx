import Overview from "./Overview"
import DaySchedule from "./DaySchedule"
import ServiceChart from "./ServiceChart"
function Dashboard() {
  return (
    <div>
        <Overview />
        <div className="w-full mt-4 grid grid-cols-2 gap-4">
          <DaySchedule />
          <div className="flex flex-col">
            <ServiceChart />
          </div>
        </div>
    </div>
  )
}

export default Dashboard