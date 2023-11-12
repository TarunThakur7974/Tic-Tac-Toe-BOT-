import React, { useEffect, useRef, useState } from 'react'

const Playground = () => {
  const ulRef = useRef(null)
  // let li;
  // const [x, setx] = useState("x")
  // const [o, seto] = useState("o")
  const o = useRef("");
  const x = useRef("");
  const [win, setWin] = useState(false)
  const [tern, setTern] = useState("O")

  const checkWin = [
    "012",
    "036",
    "048",
    "147",
    "258",
    "246",
    "345",
    "678"
  ]

  const checkWinFunc = () => {
    for (let i = 0; i < checkWin.length; i++) {
      if (o.current.includes(checkWin[i][0]) && o.current.includes(checkWin[i][1]) && o.current.includes(checkWin[i][2])) {
        console.log("o Win")
        setWin(true)
        return;
      }
      if (x.current.includes(checkWin[i][0]) && x.current.includes(checkWin[i][1]) && x.current.includes(checkWin[i][2])) {
        console.log("x Win")
        setWin(true)
        return;
      }
    }
  }

  let Gamestart = (e) => {
    if (!win) {
      if (tern === "O") {
        if (e.target.innerText === "" && !win) {
          e.target.innerText = tern
          setTern("X")
          o.current += e.target.value.toString()
        }
      } else {
        if (e.target.innerText === "" && !win) {
          e.target.innerText = tern
          setTern("O")
          x.current += e.target.value.toString()
        }
      }

      checkWinFunc();
    }
  }



  // useEffect(() => {
  // let ul = ulRef.current;
  // li = ul.querySelectorAll("li")
  // li.forEach((item) => {
  //   item.addEventListener('click', () => Gamestart(item))
  // })
  // }, [])

  return (
    <div className="main">
      <ul className='playGround' ref={ulRef} >
        <li value={0} className='top left' onClick={Gamestart}></li>
        <li value={1} className='top' onClick={Gamestart}></li>
        <li value={2} className='top right' onClick={Gamestart}></li>
        <li value={3} className='left' onClick={Gamestart}></li>
        <li value={4} onClick={Gamestart}></li>
        <li value={5} className='right' onClick={Gamestart}></li>
        <li value={6} className='left bottom' onClick={Gamestart}></li>
        <li value={7} className='bottom' onClick={Gamestart}></li>
        <li value={8} className='bottom right' onClick={Gamestart}></li>
      </ul>
    </div>
  )
}

export default Playground
