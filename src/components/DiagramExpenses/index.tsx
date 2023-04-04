import { PieChart, Pie, Cell } from "recharts";
import { itemsExpenses } from "components/Forms";

const COLORS = ["#dbeafe", "#ede9fe", "#fce7f3", "#fef9c3", "#dcfce7"];

function DiagramExpenses({sum}) {

    let obj = [];
    itemsExpenses.map(ex => {
      let a = {
        value: sum(ex).props.value
      }
      obj.push(a)
      return(a)
    })

  return (
    <PieChart width={250} height={250}>
      <Pie
        data={obj}
        cx={125}
        cy={125}
        labelLine={false}
        outerRadius={115}
        fill="#8884d8"
        dataKey="value"
      >
        {obj.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default DiagramExpenses;