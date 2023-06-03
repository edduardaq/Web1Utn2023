import { Request, Response } from "express";

class ProdcutosControler {

    static getALL = async (req: Request, resp: Response) => {
        return resp.status(200).json({ mensaje: "OK" })
    }


    static getById = async (req: Request, resp: Response) => {

    }
    static add = async (req: Request, resp: Response) => {

    }
    static update = async (req: Request, resp: Response) => {

    }
    static detele = async (req: Request, resp: Response) => {

    }




}

export default ProdcutosControler;