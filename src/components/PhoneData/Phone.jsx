import axios from "axios"
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"
import { Audio } from 'react-loader-spinner'



function Phone() {

    const [phone, setPhone] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')

      .then(data => {
        const allPhoneData = data.data.data;
        const newFakeData = allPhoneData.map(phone => {
          const obj = {
              name: phone.phone_name,
              price: parseInt(phone.slug.split('-')[1])
          }
          return obj;
        })
        setPhone(newFakeData)
        setLoading(false)
      })



      } ,[])

  return (
    <>
    <h1 className="text-7xl">Phone: {phone.length}</h1>
    <div className="">
      {
        isLoading &&  <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />
      }
    </div>
   
    <BarChart width={1240} height={400} data={phone}>
          <Bar dataKey="price" fill="green"></Bar>
          <XAxis dataKey="name" />
          <YAxis></YAxis>
          <Tooltip />
    </BarChart>
    </>
  )
}

export default Phone