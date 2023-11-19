const ComputerItem = ({computer}) => {
  const {item_number, type, make, model} = computer
  return (
    <>
        <th>{item_number}</th>
        <td>{type}</td>
        <td>{make}</td>
        <td>{model}</td>
    </>
  )
}

export default ComputerItem