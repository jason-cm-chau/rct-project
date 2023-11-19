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
      <ComputerForm/>

      <section>
        {computers.length > 0 ? (
          <table>
            <tr>
              <th scope="col">Item #</th>
              <th scope="col">Type</th>
              <th scope="col">Make</th>
              <th scope="col">Model</th>
            </tr>
            {computers.map((computer) => (<tr><ComputerItem key={computer._id}computer={computer}/></tr>))}
          </table>
        ) : (<></>)}
      </section>
    </div>
  )
}

export default Computers