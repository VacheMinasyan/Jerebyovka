import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Completed } from "../conteiner/functions"
import { SetThirdEtap, poluFinal, final, Middle, Middle33, WinElem } from "../store/CreateFighter/action"
const JIRID = (props) => {
  const dispatch = useDispatch()
  const id = +props.match.params.id

  // ========================= Selectors ==============================
  const FIG = useSelector(({ Fighter }) => Fighter.newfighters)
  const SECOND = useSelector(({ Fighter }) => Fighter.secondetap)
  const THIRD = useSelector(({ Fighter }) => Fighter.thirdetap)
  const FINAL = useSelector(({ Fighter }) => Fighter.final)
  const POLUFINAL = useSelector(({ Fighter }) => Fighter.polufinal)
  const MIDDLE = useSelector(({ Fighter }) => Fighter.middle)
  const MIDDLE3 = useSelector(({ Fighter }) => Fighter.middle3)
  const Winners = useSelector(({ Fighter }) => Fighter.winners)

  const GROUPS = useSelector(({ Group }) => Group.groups)
  const GroupsID = GROUPS.find(el => el.id === id)
  const [bxkoc, setbxkoc] = useState([])
  const [win, setWin] = useState([]);


  const [arajin, setarajin] = useState([])
  const [erkrord, seterkrord] = useState([])
  const [errord, seterrord] = useState([])
  const [chorrord, setchorrord] = useState([])
  const [hing, sething] = useState([])


  let NEW = []
  console.log("FIGHTERSSSSSSSSSSSSSSSSSSSSSSSS" < FIG)

  // =======================================================
  for (let i = 0; i < FIG.length; i++) {
    for (let j = 0; j < FIG[i].length; j++) {
      for (let k = 0; k < FIG[i][j].length; k++) {
        for (let o = 0; o < FIG[i][j][k].length; o++) {
          for (let r = 0; r < FIG[i][j][k][o].length; r++) {
            for (let q = 0; q < FIG[i][j][k][o][r].length; q++) {
              if (FIG[i][j][k][o][r][q].groupsID === id) {
                NEW.push(FIG[i][j][k][o][r][q])
                // console.log(FIG[i][j][k][o][r][q])
              }
            }

          }
        }
      }
    }

  }
  // ==================== - Colected -=================================================

  const froze = Completed(NEW)
  const etap1 = SECOND.filter(el => el.groupsID === id)
  const etapone = Completed(etap1)


  const etap2 = THIRD.filter(el => el.groupsID === id)
  const etaptwo = Completed(etap2)



  const etap3 = MIDDLE.filter(el => el.groupsID === id)
  const etapthird = Completed(etap3)


  const etap4_5 = MIDDLE3.filter(el => el.groupsID === id)
  const etapfourpass = Completed(etap4_5)


  const etap4 = POLUFINAL.filter(el => el.groupsID === id)
  const etapfour = Completed(etap4)


  const etap5 = FINAL.filter(el => el.groupsID === id)
  console.log("etapone", etapone)
  console.log("SECOND", SECOND)
  console.log("THIRD", THIRD)
  console.log("ETAPTWO", etaptwo)
  console.log("FINAL", FINAL)
  console.log("POLUFINAL", POLUFINAL)
  console.log("MIDDLE", MIDDLE)
  console.log("Winners", Winners)







  // =======================- Testing -==============================================
  const second = SECOND.find(el => el.groupsID === id)
  const thirt = THIRD.find(el => el.groupsID === id)
  const POLU = POLUFINAL.find(el => el.groupsID === id)
  const FIN = FINAL.find(el => el.groupsID === id)
  const MID = MIDDLE.find(el => el.groupsID === id)
  const MID3 = MIDDLE3.find(el => el.groupsID === id)
  const WINFIGHTER = Winners.find(el => el.groupsID === id);


  console.log("second", second)
  console.log("WINFIGHTER", WINFIGHTER)

  // =========================-Click Next Etap-=====================================================

  const Finish = (win) => {
    win.map(el => dispatch(WinElem(el)))
    setWin([])
    // setbxkoc([])
    // setarajin([])
    // seterkrord([])
    // seterrord([])
    // setchorrord([])
    // sething([])
  }
  const NextThirdEtap = (bxkoc) => {
    console.log("ASHXATEC 3")

    bxkoc.map(el => dispatch(SetThirdEtap(el)))
    setbxkoc([])
    setarajin([])
    seterkrord([])
    seterrord([])
    setchorrord([])
    sething([])

    console.log(bxkoc)
  }
  const MidleEtap = (bxkoc) => {
    console.log("ASHXATEC 4")

    bxkoc.map(el => dispatch(Middle(el)))
    setbxkoc([])
    setarajin([])
    seterkrord([])
    seterrord([])
    setchorrord([])
    sething([])

    console.log(bxkoc)
  }
  const Middle3 = (bxkoc) => {
    console.log("ASHXATEC 4-5")

    bxkoc.map(el => dispatch(Middle33(el)))
    setbxkoc([])
    setarajin([])
    seterkrord([])
    seterrord([])
    setchorrord([])
    sething([])

    console.log(bxkoc)
  }
  const Polufinal = (bxkoc) => {
    console.log("ASHXATEC POLUFINAL")

    console.log("this is polufinal block")
    bxkoc.map(el => dispatch(poluFinal(el)))
    setbxkoc([])
    setarajin([])
    seterkrord([])
    seterrord([])
    setchorrord([])
    sething([])

    console.log(bxkoc)
  }
  const Final = (bxkoc) => {
    console.log("ASHXATEC FINAL")
    bxkoc.map(el => dispatch(final(el)))
    setbxkoc([])
    setarajin([])
    seterkrord([])
    seterrord([])
    setchorrord([])
    sething([])

    console.log(bxkoc)

  }
  // ===================================================================================
  const Win = (elem) => {
    console.log("Winners")
    if (win === []) {
      setWin([elem])
    } else {
      setWin([...win, elem])

    }
    console.log("win", win)
  }
  console.log("win", win)

  const choosen1 = (elem) => {
    if (bxkoc === []) {
      console.log("mtav stex?")
      setbxkoc([elem])
      arajin1(elem)
      erkrord1(elem)
      errord1(elem)
      chorrord1(elem)
      hing1(elem)
    } else {
      console.log("BA stex?")
      setbxkoc([...bxkoc, elem])
      arajin1(elem)
      erkrord1(elem)
      errord1(elem)
      chorrord1(elem)
      hing1(elem)
    }
  }

  const arajin1 = (elem) => {
    if (arajin === []) {
      setarajin([elem])
    } else {
      setarajin([...arajin, elem])
    }
  }
  const erkrord1 = (elem) => {
    if (erkrord === []) {
      seterkrord([elem])
    } else {
      seterkrord([...erkrord, elem])
    }
  }
  const errord1 = (elem) => {
    if (errord === []) {
      seterrord([elem])
    } else {
      seterrord([...errord, elem])
    }
  }
  const chorrord1 = (elem) => {
    console.log("4444444444444444444")
    if (chorrord === []) {
      setchorrord([elem])
    } else {
      setchorrord([...chorrord, elem])
    }
  }
  const hing1 = (elem) => {
    console.log("55555555555555555")
    if (hing === []) {
      sething([elem])
    } else {
      sething([...hing, elem])
    }
  }
  console.log("arajin", arajin)
  console.log("bxkoc", bxkoc)
  console.log("erkrord", erkrord)
  console.log("errord", errord)
  console.log("chorrord", chorrord)
  console.log("hing", hing)



  // ==================================================

  return (
    <div className="All">
      <div className="MainGroup" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
        <h1 className="GroupTITLE"> {GroupsID.groupname}</h1>

        <button
          className="NextEtap"
          onDoubleClick={() => {
            if (bxkoc.length === 2) {
              Final(bxkoc)
            }
            else if (bxkoc.length === 3) {
              Middle3(bxkoc)
            } else if (bxkoc.length === 4) {
              Polufinal(bxkoc)
            }
            else if (bxkoc.length <= 7 && bxkoc.length > 4) {
              MidleEtap(bxkoc)
            }
            else if (bxkoc.length <= 12 && bxkoc.length >= 8) {
              NextThirdEtap(bxkoc)
            }
            else {
              Finish(win)
            }
          }
          }>Next Etap</button>
      </div>
      <div className="WinnersDiv">

        {/* {win !== undefined ? <h1 className="Finishtitle">{win[0].name} {win[0].surname}</h1> : <h1>Empty</h1>} */}
      </div>
      <div className="Togheter">
        <div>

          {

            froze.map((el, index) => {
              return (
                <div style={{ marginTop: "20px", borderBottom: "40px solid black", width: "250px", }} key={index}>
                  {
                    el.map((el1, index1) => {
                      return (
                        <div key={index1}>
                          {
                            el1.map((el2, index2) => {
                              return (
                                <div style={{ marginTop: "20px", border: "10px solid red", width: "250px" }} key={index2}>
                                  {
                                    el2.map((el3, index3) => {


                                      return (
                                        <div
                                          key={index3}
                                          style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", width: "250px", borderBottom: "1px solid black", background: bxkoc.find(el => el.id === el3.id) ? "green" : "white" }}
                                          onDoubleClick={() => { choosen1(el3) }}>
                                          <h4 style={{ minHeight: "30px", fontSize: "20px", color: bxkoc.find(el => el.id === el3.id) ? "white" : "black" }} >
                                            {el3.isFavorite === true ? el3.name + " " + el3.surname + "(Favorite)" : el3.name + " " + el3.surname}


                                          </h4>
                                        </div>
                                      )
                                    })
                                  }

                                </div>

                              )
                            })

                          }
                        </div>

                      )
                    })


                  }
                </div>
              )
            })




          }
        </div>
        <div className="ThirdSection" >


          {thirt !== undefined ?
            etaptwo.map((el, index) => {
              return (
                <div key={index} >

                  <div style={{ marginTop: "20px", borderBottom: "40px solid black", width: "250px" }} >
                    {
                      el.map((el1, index1) => {
                        return (
                          <div key={index1}>
                            {
                              el1.map((el2, index2) => {
                                return (
                                  <div style={{ marginTop: "20px", border: "10px solid red", width: "250px" }} key={index2}>
                                    {
                                      el2.map((el3, index3) => {


                                        return (
                                          <div
                                            key={index3}
                                            style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", width: "250px", borderBottom: "1px solid black", background: arajin.find(el => el.id === el3.id) ? "green" : "white" }}
                                            onDoubleClick={() => { choosen1(el3) }}>
                                            <h4 style={{ minHeight: "30px", fontSize: "20px", color: arajin.find(el => el.id === el3.id) ? "white" : "black" }} >
                                              {el3.isFavorite === true ? el3.name + " " + el3.surname + "(Favorite)" : el3.name + " " + el3.surname}


                                            </h4>
                                          </div>
                                        )
                                      })
                                    }

                                  </div>

                                )
                              })

                            }
                          </div>

                        )
                      })


                    }
                  </div>
                </div>

              )
            }) : null
          }


        </div>
        <div className="MIDDLE">
          {MID !== undefined ?
            etapthird.map((el, index) => {
              return (
                <div style={{ marginTop: "20px", borderBottom: "40px solid black", width: "250px", }} key={index}>
                  {
                    el.map((el1, index1) => {
                      return (
                        <div key={index1}>
                          {
                            el1.map((el2, index2) => {
                              return (
                                <div style={{ marginTop: "20px", border: "10px solid red", width: "250px" }} key={index2}>
                                  {
                                    el2.map((el3, index3) => {


                                      return (
                                        <div
                                          key={index3}
                                          style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", width: "250px", borderBottom: "1px solid black", background: errord.find(el => el.id === el3.id) ? "green" : "white" }}
                                          onDoubleClick={() => { choosen1(el3) }}>
                                          <h4 style={{ minHeight: "30px", fontSize: "20px", color: errord.find(el => el.id === el3.id) ? "white" : "black" }} >
                                            {el3.isFavorite === true ? el3.name + " " + el3.surname + "(Favorite)" : el3.name + " " + el3.surname}


                                          </h4>
                                        </div>
                                      )
                                    })
                                  }

                                </div>

                              )
                            })

                          }
                        </div>

                      )
                    })


                  }
                </div>
              )
            }) : null
          }
        </div>

        <div className="SecondSection">


          {second !== undefined ?
            etapone.map((el, index) => {
              return (
                <div style={{ marginTop: "20px", borderBottom: "40px solid black", width: "250px", }} key={index}>
                  {
                    el.map((el1, index1) => {
                      return (
                        <div key={index1}>
                          {
                            el1.map((el2, index2) => {
                              return (
                                <div style={{ marginTop: "20px", border: "10px solid red", width: "250px" }} key={index2}>
                                  {
                                    el2.map((el3, index3) => {


                                      return (
                                        <div
                                          key={index3}
                                          style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", width: "250px", borderBottom: "1px solid black", background: erkrord.find(el => el.id === el3.id) ? "green" : "white" }}
                                          onDoubleClick={() => { choosen1(el3) }}>
                                          <h4 style={{ minHeight: "30px", fontSize: "20px", color: erkrord.find(el => el.id === el3.id) ? "white" : "black" }} >
                                            {el3.isFavorite === true ? el3.name + " " + el3.surname + "(Favorite)" : el3.name + " " + el3.surname}


                                          </h4>
                                        </div>
                                      )
                                    })
                                  }

                                </div>

                              )
                            })

                          }
                        </div>

                      )
                    })


                  }
                </div>
              )
            }) : <h1></h1>
          }


        </div>



        <div className="Polufinal">
          {POLU !== undefined ?
            etapfour.map((el, index) => {
              return (
                <div style={{ marginTop: "20px", borderBottom: "40px solid black", width: "250px", }} key={index}>
                  {
                    el.map((el1, index1) => {
                      return (
                        <div key={index1}>
                          {
                            el1.map((el2, index2) => {
                              return (
                                <div style={{ marginTop: "20px", border: "10px solid red", width: "250px" }} key={index2}>
                                  {
                                    el2.map((el3, index3) => {


                                      return (
                                        <div
                                          key={index3}
                                          style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", width: "250px", borderBottom: "1px solid black", background: chorrord.find(el => el.id === el3.id) ? "green" : "white" }}
                                          onDoubleClick={() => { choosen1(el3) }}>
                                          <h4 style={{ minHeight: "30px", fontSize: "20px", color: chorrord.find(el => el.id === el3.id) ? "white" : "black" }} >
                                            {el3.isFavorite === true ? el3.name + " " + el3.surname + "(Favorite)" : el3.name + " " + el3.surname}


                                          </h4>
                                        </div>
                                      )
                                    })
                                  }

                                </div>

                              )
                            })

                          }
                        </div>

                      )
                    })


                  }
                </div>
              )
            }) : null
          }
        </div>
        <div className="Mid3">
          {MID3 !== undefined ?
            etapfourpass.map((el, index) => {
              return (
                <div style={{ marginTop: "20px", borderBottom: "40px solid black", width: "250px", }} key={index}>
                  {
                    el.map((el1, index1) => {
                      return (
                        <div key={index1}>
                          {
                            el1.map((el2, index2) => {
                              return (
                                <div style={{ marginTop: "20px", border: "10px solid red", width: "250px" }} key={index2}>
                                  {
                                    el2.map((el3, index3) => {


                                      return (
                                        <div
                                          key={index3}
                                          style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", width: "250px", borderBottom: "1px solid black", background: hing.find(el => el.id === el3.id) ? "green" : "white" }}
                                          onDoubleClick={() => { choosen1(el3) }}>
                                          <h4 style={{ minHeight: "30px", fontSize: "20px", color: hing.find(el => el.id === el3.id) ? "white" : "black" }} >
                                            {el3.isFavorite === true ? el3.name + " " + el3.surname + "(Favorite)" : el3.name + " " + el3.surname}


                                          </h4>
                                        </div>
                                      )
                                    })
                                  }

                                </div>

                              )
                            })

                          }
                        </div>

                      )
                    })


                  }
                </div>
              )
            }) : null
          }
        </div>
        <div className="Final">
          {FIN !== undefined ?
            etap5.map((el, index) => {
              return (
                <div
                  key={index}
                  style={{ minHeight: "30px", display: "flex", justifyContent: "center", alignItems: "center", minWidth: "250px", borderBottom: "1px solid black", background: win.find(el => el.id === el.id) ? "green" : "white" }}
                  onDoubleClick={() => { Win(el) }}>
                  <h4 className="Finaltitle" style={{ minHeight: "30px", fontSize: "20px", color: win.find(el => el.id === el.id) ? "white" : "black" }} >
                    {el.isFavorite === true ? el.name + " " + el.surname + "(Favorite)" : el.name + " " + el.surname}


                  </h4>
                </div>
              )
            }) : null
          }
        </div>
      </div>



    </div >
  )
}
export default withRouter(JIRID)