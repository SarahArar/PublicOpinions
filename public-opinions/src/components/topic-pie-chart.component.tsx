import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface Props {
  topicData: {
    ايجابي: string;
    سلبي: string;
    محايد: string;
  } | null;
}

const COLORS = ["#00C49F", "#FF4C4C", "#FFBB28"];

const TopicPieChart = ({ topicData }: Props) => {
  if (!topicData) return <p>👈 اختر موضوعاً لعرض الرسم البياني</p>;

  const data = [
    { name: "إيجابي", value: parseInt(topicData.ايجابي) },
    { name: "سلبي", value: parseInt(topicData.سلبي) },
    { name: "محايد", value: parseInt(topicData.محايد) },
  ];

  return (
    <div>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, i) => (
            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TopicPieChart;
