import {Router} from "express"
import * as diaryService from "../services/diaryServices"
const router=Router()


router.get("/",(_req,res)=>{
res.send(diaryService.getEntriesWithOutSensitiveInfo())
})


router.post("/",(_req,res)=>{
    res.send("saving a diary")
})

export default router