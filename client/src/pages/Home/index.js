import React from 'react';
import { Pie, PieChart, Cell } from "recharts";

const Home = () => {
    const resu = [200, 200, 200, 300, 400, 3, 4, 456, 678]


    const result = (count) => {
        let res = 0;
        resu.map((num) => { res += num })
        const a = (count / (res / 100));
        return a;
    }

    const data = [
        { name: 1, value: result(resu[0]) },
        { name: 2, value: result(resu[1]) },
        { name: 3, value: result(resu[2]) },
        { name: 4, value: result(resu[3]) },
        { name: 5, value: result(resu[4]) },
        { name: 6, value: result(resu[5]) },
        { name: 7, value: result(resu[6]) },
        { name: 8, value: result(resu[7]) },
        { name: 9, value: result(resu[8]) },
    ]

    const colors = ['#32CD32', '#800080', '#CD5C5C', '#9ACD32', '#20B2AA', '#F0E68C', '#8A2BE2', '#2F4F4F', '#800000']


    return (
        <>
            <PieChart width={800} height={800}>
                <Pie dataKey={'value'}
                    data={data}
                    outerRadius={180}
                     label
                    >  {
                        data.map((entry, index) => (
                            <Cell key={`{cell-${index}}`} fill={colors[index]}  />))
                    } </Pie>
            </PieChart>
        </>
    );
}

export default Home;