import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {


    const students = [
        {
            "id": 1,
            "name": "John",
            "marks": {
                "physics": 85,
                "math": 92,
                "english": 88
            }
        },
        {
            "id": 2,
            "name": "Alice",
            "marks": {
                "physics": 78,
                "math": 95,
                "english": 80
            }
        },
        {
            "id": 3,
            "name": "Bob",
            "marks": {
                "physics": 90,
                "math": 85,
                "english": 75
            }
        },
        {
            "id": 4,
            "name": "Sarah",
            "marks": {
                "physics": 82,
                "math": 88,
                "english": 92
            }
        },
        {
            "id": 5,
            "name": "Michael",
            "marks": {
                "physics": 95,
                "math": 91,
                "english": 89
            }
        },
        {
            "id": 6,
            "name": "Emma",
            "marks": {
                "physics": 85,
                "math": 90,
                "english": 93
            }
        },
        {
            "id": 7,
            "name": "Daniel",
            "marks": {
                "physics": 88,
                "math": 86,
                "english": 82
            }
        },
        {
            "id": 8,
            "name": "Sophia",
            "marks": {
                "physics": 91,
                "math": 89,
                "english": 94
            }
        },
        {
            "id": 9,
            "name": "James",
            "marks": {
                "physics": 87,
                "math": 83,
                "english": 85
            }
        },
        {
            "id": 10,
            "name": "Olivia",
            "marks": {
                "physics": 79,
                "math": 94,
                "english": 91
            }
        },
        {
            "id": 11,
            "name": "William",
            "marks": {
                "physics": 93,
                "math": 87,
                "english": 88
            }
        },
        {
            "id": 12,
            "name": "Ava",
            "marks": {
                "physics": 86,
                "math": 84,
                "english": 79
            }
        }
    ]

    console.log(students)
    return (
        <div>
            <LineChart
                width={600}
                height={300}
                data={students}

            >
                <Line dataKey="physics" ></Line>
                <Line stroke="#82ca9d" dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>

            </LineChart>
        </div>
    );
};

export default Dashboard;