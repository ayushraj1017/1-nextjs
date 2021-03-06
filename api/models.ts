import { NextApiRequest, NextApiResponse } from "next";
import { getAsString } from "../src/getAsString";
import { getModels } from "../src/pages/database/getModels";



export default async function models(req:NextApiRequest,res:NextApiResponse){
    const make=getAsString(req.query.make);
    const models=await getModels(make);
    res.json(models)

} 
    
