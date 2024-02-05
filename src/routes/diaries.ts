import {Router} from "express"
import * as diaryService from "../services/diaryServices"
const router=Router()


router.get("/",(_req,res)=>{
res.send(diaryService.getEntriesWithOutSensitiveInfo())
})


router.get("/:id",(_req,res)=>{
    const diary = diaryService.findById(Number(_req.params.id))
    return diary
    ?res.send(diary)
    :res.sendStatus(404)

})

router.post("/",(_req,res)=>{
    const {date,weather,visibility,comment}=_req.body
    const newDiaryEntry = diaryService.addEntry(date,weather,visibility,comment)
    
})

export default router