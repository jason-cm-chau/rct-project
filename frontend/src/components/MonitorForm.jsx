import { useState } from "react"
import { useDispatch } from "react-redux"
import {createMonitor} from '../features/monitors/monitorSlice'


const MonitorForm = ({monitors}) => {
    const [text, setText] = useState('')
    const [item, setItem] = useState('-- --')

    const dispatch = useDispatch()

    const onSubmit = e =>{
        e.preventDefault()

        dispatch(createMonitor({text}))
        setText('')
    }

    const getItem = e =>{
        setItem(e.target.value)
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit} className="form-container">
            <div className="form-items">
            <div className="form-item">
                    <label htmlFor="text">Item Number</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                        <option value="17MON">17MON</option>
                        <option value="19MON">19MON</option>
                        <option value="20MON">20MON</option>
                        <option value="21MON">21MON</option>
                        <option value="22MON">22MON</option>
                        <option value="24MON">24MON</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Make</label>
                    <select name="make" id="make" value= {item} onChange={getItem} >
                        <option value="">-- --</option>
                        {monitors.map((monitor)=>
                            (<option value={monitor.make}>{monitor.make}</option>))
                        }
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Type</label>
                    <select name="type" id="type">
                        <option value="">-- --</option>
                        <option value="LCD">LCD</option>
                        <option value="CRT">CRT</option>   
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Model</label>
                    <select name="model" id="model">
                        <option value="">-- --</option>
                        {monitors.map((monitor)=>
                            (<option value={monitor.model}>{monitor.model}</option>))
                        }
                    </select>
                </div>
            </div>
            <div className="form-items">
                <div className="form-item">
                <label htmlFor="text">Serial Number</label>
                    <input type="text" name="serial_number" id="serial_number" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-item">
                <label htmlFor="text">Asset Tag</label>
                    <input type="text" name="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <div className="form-items">
                <div className="form-item">
                    <label htmlFor="text">Condition</label>
                    <select name="condition" id="condition">
                        <option value="">-- --</option>
                        <option value="working">Working</option>
                        <option value="yellow">Working but Cosmetic</option>
                        <option value="not-working">Not Working</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Bin</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                    </select>
                </div>
                <div className="form-item">
                    <button className="btn" type="submit">Save</button>
                    <button className="btn" type="submit">Print</button>
                    <button className="btn" type="submit">Delete</button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default MonitorForm