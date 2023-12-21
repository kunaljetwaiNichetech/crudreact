import {configureStore} from '@reduxjs/toolkit'
import todoSlicer from '../slicer/todoSlicer'
import { CrudOpration } from '../slicer/Cruddopration'
import { ListSlice } from '../slicer/ListSlice'
const store =configureStore({
    reducer:{
        todo:todoSlicer.reducer,
        Crud:CrudOpration.reducer,
        List:ListSlice.reducer
    }
})
export {store} 


