import { useState } from "react"
import { useDispatch } from "react-redux"
import {createComputer} from '../features/computers/computerSlice'

const ComputerForm = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e =>{
        e.preventDefault()

        dispatch(createComputer({text}))
        setText('')
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="">
                <label htmlFor="text">Computer</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">Make</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">Type</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">Model</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
            <label htmlFor="text">Serial Number</label>
                <input type="text" name="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="">
            <label htmlFor="text">Asset Tag</label>
                <input type="text" name="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="">
                <label htmlFor="text">HDD Size</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
                <label htmlFor="text">HDD Type</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">HDD2 Size</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
                <label htmlFor="text">HDD2 Type</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">Ram Size</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
                <label htmlFor="text">Ram Type</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">Condition</label>
                <select name="" id="">
                    <option value="">-- --</option>
                    <option value="working">Working</option>
                    <option value="yellow">Working but Cosmetic</option>
                    <option value="not-working">Not Working</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="text">Bin</label>
                <select name="" id="">
                    <option value="">-- --</option>
                </select>
            </div>
            <div className="">
                <button className="btn" type="submit">Save</button>
                <button className="btn" type="submit">Print</button>
                <button className="btn" type="submit">Delete</button>
            </div>
        </form>
    </section>
  )
}

export default ComputerForm