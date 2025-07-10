import './styles.css'
import MenuList from './menu-list'
import { useState } from 'react'

export default function TreeView({ menus = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className='tree-view-container'>
      <MenuList list={menus} selected={selected} setSelected={setSelected} />
    </div>
  )

}