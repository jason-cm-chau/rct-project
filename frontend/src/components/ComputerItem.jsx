const ComputerItem = ({computer}) => {
  const {item_number, type, make, model} = computer
  return (
    <tr>
        <th className="computer-item">{item_number}</th>
        <td></td>
        <td></td>
        <td className="computer-item">{type}</td>
        <td className="computer-item">{make}</td>
        <td className="computer-item">{model}</td>
    </tr>
  )
}

export default ComputerItem