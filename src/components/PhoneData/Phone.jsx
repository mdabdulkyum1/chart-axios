import axios from "axios"
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis } from "recharts"

function Phone() {

    const [phone, setPhone] = useState([])

    useEffect(()=>{
      // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      //  .then(res=> res.json())
      //  .then(data => setPhone(data.data))
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const PhoneFakeData = data.data.data;
        const newFakeData = PhoneFakeData.map(phone => {

          const obj = {
              name: phone.phone_name,
              price: parseInt(phone.slug.split('-')[1])
          }
          return obj;
        });
       setPhone(newFakeData)
      })
      } ,[])

  return (
    <>
    <h1 className="text-7xl">Phone: {phone.length}</h1>
    <BarChart width={1240} height={400} data={phone}>
          <Bar dataKey="price" fill="green"></Bar>
          <XAxis dataKey="name" />
          <YAxis></YAxis>
    </BarChart>
    </>
  )
}

export default Phone