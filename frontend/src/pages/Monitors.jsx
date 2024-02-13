import { useState, useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import MonitorForm from "../components/MonitorForm"
import { getMonitors, reset} from "../features/monitors/monitorSlice"
//import ComputerItem from "../components/ComputerItem"
const Monitors = () => {
  const [formData, setFormData] = useState({
    item_number: '',
    rct_number: '',
    type: '',
    make: '',
    model: '',
    bin: '',
  })
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {item_number, type, make, model} = formData

  const {monitors, isLoading, isError, isSuccess, message} = useSelector((state)=> state.monitor)

  useEffect(()=>{
    if(isError){
      console.log(message)
    }

    dispatch(getMonitors())

    return () =>{
      dispatch(reset())
    }
  },[dispatch, isError, message])

  if(isLoading)
  {
    return <Spinner/>
  }
  return (
    <div>
      <MonitorForm monitors={monitors}/>

      <section className="computer-section">
        { (
          <table>
            <tr>
              <th scope="col" className="computer-item">ITEM #</th>
              <th scope="col" className="computer-item">RCT #</th>
              <th scope="col" className="computer-item">SERIAL #</th>
              <th scope="col" className="computer-item">TYPE</th>
              <th scope="col" className="computer-item">MAKE</th>
              <th scope="col" className="computer-item">MODEL</th>
              <th scope="col" className="computer-item">STORAGE BIN</th>
              <th scope="col" className="computer-item">CT #</th>
              <th scope="col" className="computer-item">TECHNICIAN</th>
              <th scope="col" className="computer-item">WORKSTATION</th>
              <th scope="col" className="computer-item">RECEIVED</th>
              <th scope="col" className="computer-item">LOT #</th>
              <th scope="col" className="computer-item">RECEIPT #</th>
              <th scope="col" className="computer-item">STATUS</th>
              <th scope="col" className="computer-item">BTNUMBER</th>
            </tr>
            {/* {monitors.map((computer) => (<tr><MonitorItem key={computer._id}computer={computer}/></tr>))} */}
          </table>
        )}
      </section>
    </div>
  )
}

export default Monitors