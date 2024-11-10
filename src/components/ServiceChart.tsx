import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const CustomTick = ({ x, y, payload }: any) => {
  return (
    <text x={x} y={y + 15} fill="#A0AEC0" textAnchor="middle" fontSize={13}>
      {payload.value}
    </text>
  );
};
function ServiceChart() {
  const user = useSelector((state: any) => state.user);
  const { data: appointments }: { data: any[] } = useFetch(
    `${import.meta.env.VITE_API_URL}/appointments/details/${user.userId}`
  );

  const result = appointments.reduce((acc, appointment) => {
    const month = new Date(appointment.appointmentDate).toLocaleString(
      "en-US",
      { month: "short" }
    );

    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month]++;

    return acc;
  }, {});
  const finalData = Object.entries(result).map(el => ({
    month: el[0],
    count: el[1]
  }))
  console.log(finalData);
  // Convert the resu
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-poppins font-semibold text-md">Statistics</h1>
      <p className="font-poppins font-normal text-gray-400 text-sm">
        Services & Selling information you have entered
      </p>
      <div className="border rounded-lg bg-white p-4">
        <div className="flex gap-3 font-poppins text-[10px]">
          <div className="p-1 border-orange-500 border-b-2">Services</div>
          <div className="p-1 border-red-200 border-b-2">Products</div>
          <div className="p-1 border-red-200 border-b-2">Treatments</div>
        </div>
        <div className="mt-4">
          <ResponsiveContainer width={400} height={250}>
            <LineChart
              data={finalData}
              margin={{ top: 25, right: 55, left: -50, bottom: 5 }} // Adjust left margin for space
            >
              <XAxis
                dataKey="month"
                tick={<CustomTick />}
                axisLine={false}
                tickLine={false}
                scale="point" // Ensures even distribution of labels
                interval={0} // Force all labels to display
              />
              <YAxis
                tickCount={7}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <CartesianGrid vertical={false} />
              <Tooltip />
              <ReferenceLine y={20} stroke="#cccccc" />{" "}
              {/* Horizontal line at y=10 */}
              <ReferenceLine y={40} stroke="#cccccc" />{" "}
              {/* Horizontal line at y=20 */}
              <ReferenceLine y={60} stroke="#cccccc" />{" "}
              {/* Horizontal line at y=30 */}
              <ReferenceLine y={80} stroke="#cccccc" />
              <ReferenceLine y={100} stroke="#cccccc" />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ServiceChart;
