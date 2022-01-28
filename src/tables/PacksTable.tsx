import React from "react";
import s from './packsTable.module.css'
import {PacksInfoType} from "../api/tableAPI";

type PropsType = {
    menuListArray: string[]
    packsData: PacksInfoType
    userID: string
    deletePack: (packID: string) => void
}

export const PacksTable = React.memo(({menuListArray, packsData, userID, deletePack}: PropsType) => {


    return (
        <div className={s.tableContainer}>
            <div className={s.table}>
                <ul className={s.tableMenuList}>

                    <li className={s.tableMenuItem}>
                        {menuListArray.map((item, index) => {
                            return (
                                <div className={s.item} key={index}>
                                    {item}
                                </div>
                            )
                        })}
                    </li>
                </ul>
                <ul className={s.tableMenuList}>

                    {packsData.cardPacks.map((item) => {
                        return (

                            <li className={s.tableMenuItem} key={item._id}>
                                <div className={s.item}>
                                    {item.name}
                                </div>
                                <div className={s.item}>
                                    {item.cardsCount}
                                </div>
                                <div className={s.item}>
                                    {item.updated}
                                </div>
                                <div className={s.item}>
                                    {item.created}
                                </div>
                                <div className={`${s.item} ${s.btnContainer}`}>

                                    {userID === item.user_id ? <div className={s.btnBox}>
                                        <button onClick={()=>deletePack(item._id)}>Delete</button>
                                        <button>Edit</button>
                                    </div> : null}
                                    <button>Learn</button>

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
})