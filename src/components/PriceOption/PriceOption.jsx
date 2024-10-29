import { FaCircleCheck } from "react-icons/fa6";
import PropTypes from 'prop-types'

function PriceOption({option}) {
    const {optionName, price, features} = option;
  return (
    <div className='text-center flex flex-col space-y-5 bg-slate-500 py-5 rounded-2xl'>
        <h1>
            <span className='text-7xl font-bold'>{price}</span>
            <span className='text-2xl'>/mon</span>
        </h1>
        <h1 className='text-3xl font-bold'>{optionName}</h1>
        <ul className='ps-10 flex-grow'>
          {
            features.map(f=> <li key={f} className="flex items-center gap-5"><FaCircleCheck/> {f}</li>)
          }
        </ul>
        <button className="btn btn-primary">Buy Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption
