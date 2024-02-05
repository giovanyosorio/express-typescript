import {Router} from "express"

const router=Router()


router.get("/",(_req,res)=>{
res.send("fetching all entry diareies")
})


router.post("/",(_req,res)=>{
    res.send("saving a diary")
})

export default router