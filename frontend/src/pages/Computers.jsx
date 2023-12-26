import { useState, useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import ComputerForm from "../components/ComputerForm"
import { getComputers, reset} from "../features/computers/computerSlice"
import ComputerItem from "../components/ComputerItem"

const Computers = () => {
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

  const {computers, isLoading, isError, isSuccess, message} = useSelector((state)=> state.computer)

  useEffect(()=>{
    if(isError){
      console.log(message)
    }

    dispatch(getComputers())

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
      <ComputerForm computers={computers}/>

      <section className="computer-section">
        {computers.length > 0 ? (
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
            {computers.map((computer) => (<tr><ComputerItem key={computer._id}computer={computer}/></tr>))}
          </table>
        ) : (<></>)}
      </section>
    </div>
  )
}

export default Computers