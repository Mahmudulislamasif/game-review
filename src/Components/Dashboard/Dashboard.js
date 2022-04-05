
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
   const data= [
        {
            "month": "Mar",
            "investment": 20000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 30000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 30000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
       <div className='container'>
            <div className='row g-4'>
              <div className='col-md-6'>
              <h3>Month Wise Sell</h3>
               <LineChart width={300} height={250} data={data}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                </LineChart>

              </div>
              <div className='col-md-6'>
                      <div>
                      <h3>investment vs Revenue</h3>
                      <div className='p-3 d-flex justify-content-center'>
                      <BarChart width={300} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 4" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                      </div>
                      </div>
              </div>
              <div className='col-md-6'>
              <h3>investment vs Revenue</h3>
              <AreaChart width={300} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
              </div>
        </div>
        
       </div>
       

    );
};

export default Dashboard;