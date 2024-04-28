import  productModel from '@/models/product'
import connectTodb from '@/configs/db'

export async function POST(req){
    try {
        connectTodb()

        const {title , price ,tags , description , countAvailabe
        ,weight ,materials , tast , size} = await req.json()

        
        
    } catch (error) {
        return Response.json({message:error},{status:500})
    }
}