import { useState } from "react"
import { useDispatch } from "react-redux"
import {createComputer, reset} from '../features/computers/computerSlice'


const ComputerForm = ({computers}) => {
    const [serialNumber, setSerialNumber] = useState('')
    const [assetTag, setAssetTag] = useState('')
    const [itemNumber, setItemNumber] = useState('-- --')
    const [_make, setMake] = useState('-- --')
    const [_type, setType] = useState('-- --')
    const [_model, setModel] = useState('-- --')

    const [formData, setFormData] = useState({})

    const dispatch = useDispatch()

    const onSubmit = e =>{
        e.preventDefault()
        
        setFormData({
            item_number: itemNumber,
            type: _type,
            make: _make,
            model: _model,
        })

        dispatch(createComputer(formData))
        setSerialNumber('')
        setAssetTag('')
        dispatch(reset())
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit} className="form-container">
            {/* FIRST SECTION */}
            <div className="form-items">
            <div className="form-item">
                    <label htmlFor="text">Item Number</label>
                    <select name="" id="item_number" value= {itemNumber} onChange={(e)=> setItemNumber(e.target.value)}>
                        <option value="">-- --</option>
                        <option value="PLTNV">PLTNV</option>
                        <option value="PLTHD">PLTHD</option>
                        <option value="PLTM2">PLTM2</option>
                        <option value="UHLTNV">PLTNV</option>
                        <option value="UHLTHD">UHLTHD</option>
                        <option value="UHLTM2">UHLTM2</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Make</label>
                    <select name="make" id="make" value= {_make} onChange={(e)=>setMake(e.target.value)} >
                        <option value="">-- --</option>
                        {/* {computers.map((computer)=>
                            (<option value={computer.make}>{computer.make}</option>))
                        } */}
                        <option value="HP">HP</option>
                        <option value="Dell">Dell</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Toshiba">Toshiba</option>
                        <option value="Apple">Apple</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Acer">Acer</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Type</label>
                    <select name="type" id="type" value= {_type} onChange={(e)=>setType(e.target.value)}>
                        <option value="">-- --</option>
                        <option value="desktop">Desktop</option>
                        <option value="laptop">Laptop</option>
                        <option value="server">Server</option>
                        
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Model</label>
                    <select name="model" id="model" value= {_model} onChange={(e)=>setModel(e.target.value)}>
                        <option value="">-- --</option>
                        {computers.map((computer)=>
                            (<option value={computer.model} key={computer._id}>{computer.model}</option>))
                        }
                    </select>
                </div>
            </div>
            {/* MIDDLE SECTION */}
            <div className="form-items"> 
                <div className="form-item">
                <label htmlFor="text">Serial Number</label>
                    <input type="text" name="serial_number" id="serial_number" value={serialNumber} onChange={(e)=>setSerialNumber(e.target.value)}/>
                </div>
                <div className="form-item">
                <label htmlFor="text">Asset Tag</label>
                    <input type="text" name="text" id="text" value={assetTag} onChange={(e)=>setAssetTag(e.target.value)}/>
                </div>
                <div className="form-item">
                    <label htmlFor="text">HDD Size</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                        <option value="128GB">128GB</option>
                        <option value="256GB">256GB</option>
                        <option value="500GB">500GB</option>
                        <option value="512GB">512GB</option>
                    </select>
                    <label htmlFor="text">HDD Type</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                        <option value="HDD">HDD</option>
                        <option value="NVME">NVME</option>
                        <option value="M.2">M.2</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">HDD2 Size</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                        <option value="128GB">128GB</option>
                        <option value="256GB">256GB</option>
                        <option value="500GB">500GB</option>
                        <option value="512GB">512GB</option>
                    </select>
                    <label htmlFor="text">HDD2 Type</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                        <option value="HDD">HDD-</option>
                        <option value="NVME">NVME</option>
                        <option value="M.2">M.2</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="text">Ram Size</label>
                    <select name="" id="" >
                        <option value="">-- --</option>
                        <option value="2GB">2GB</option>
                        <option value="4GB">4GB</option>
                        <option value="8GB">8GB</option>
                        <option value="16GB">16GB</option>
                    </select>
                    <label htmlFor="text">Ram Type</label>
                    <select name="" id="">
                        <option value="">-- --</option>
                        <option value="DDR2">DDR2</option>
                        <option value="DDR3">DDR3</option>
                        <option value="DDR4">DDR4</option>
                    </select>
                </div>
            </div>
            {/* LAST SECTION */}
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
                        <option value="Good">Good</option>
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

export default ComputerForm