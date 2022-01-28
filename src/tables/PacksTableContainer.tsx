import React, {useCallback, useEffect} from "react";
import {PacksTable} from "./PacksTable";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {PacksInfoType} from "../api/tableAPI";
import {deletePackTC, getPacksTC, getUserIDAC} from "../redux/table-reducer";
import {initializeAppTC} from "../redux/app-reducer";

export const PacksTableContainer = () => {

    const dispatch = useDispatch();
    const menuListArray = ['Name', 'Cards', 'Last Updated', 'Created By', 'Actions']
    const packsData = useSelector<AppRootStateType, PacksInfoType>(state => state.tableReducer.cardsPackData);
    const userID = useSelector<AppRootStateType, string>(state => state.tableReducer.userID);



    useEffect(() => {
        dispatch(getPacksTC(1, 10));
    }, [])

    const deletePack = useCallback((packID: string) => {
        dispatch(deletePackTC(packID))
    }, [])


    return (
        <PacksTable
            menuListArray={menuListArray}
            packsData={packsData}
            userID={userID}
            deletePack={deletePack}
        />
    )
}