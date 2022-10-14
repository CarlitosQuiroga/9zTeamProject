const userReq = require("../model/UserReg");
const winston = require('winston');

const consoleTransport = new winston.transports.Console()
/**
 * Posee toda la lógica de negocio
 * necesaria para realizar el CRUD
 * de estudiantes
 */
 const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)
module.exports = class UsersService {
  
  /**
   * Método usado para actualizar un estudiante
   * a través de su identificación y devolver un json
   * con el mensaje student registered successfully
   * si se encuentra el estudiante ya cargado devuelve un json
   * con el mensaje "student already exists"
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async save(req, res) {
    const { identification, username, email, password } = req.body;
    try {
      const response = await exists(identification);
      if (!response.exists) {
        await userReq.create({
          identification,
          username,
          email,
          password,
        });
        res.json({ message: "Registrado correctamente" });
        res.status(201);
      } else {
        res.status(400);
        res.json({ message: "Este usuario ya existe" });
      }
      return res;
    } catch (error) {
        res.status(400);
        res.json({ error : error });
    }
  }

  /**
   * Método usado para actualizar un estudiante
   * a través de su identificación y devolver un json
   * con el mensaje student updated successfully
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async update(req, res) {
    const { username, email, password } = req.body;
    const identification = req.params.identification;
    try {
      await userReq.updateOne(
        { identification : `${identification}` },
        {
          username,
          email,
          password,
        }
      );
      res.json({ message: "student updated successfully" });
      res.status(200);
    } catch (error) {
        res.status(400);
        res.json({ error : error });
    }
  }

  /**
   * Método usado para eliminar un estudiante
   * a través de su identificación y devolver un json
   * con el mensaje student deleted successfully
   * si no se encuentra el estudiante devuelve un json
   * con el mensaje "student not found"
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async delete(req, res) {
    const identification = req.params.identification;
    try {
      const deleted = await userReq.deleteOne(
        { identification : `${identification}` },
      );
      if(deleted.deletedCount > 0){
      res.json({ message: "student deleted successfully" });
      res.status(200);
    }else{
      res.json({ message: "student not found" });
      res.status(404);
    }
    } catch (error) {
        res.status(400);
        res.json({ error : error });
    }
  }

  /**
   * Método usado para buscar todos los estudiantes
   * registrados y devolverlos en la
   * respuesta http por medio de un json excluyendo el _id y el __v
   * en la respuesta por medio de los métodos .select("-_id").select("-__v") línea 106
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findAll(req, res) {
    try {
      logger.info("buscando")
      const users = await userReq.find({}).select("-_id").select("-__v"); 
      res.setHeader("content-type", "application/json");
      res.json({ users: users });
      logger.info(users);
      res.status(200);
    } catch (error) {
      res.status(400);
      res.json({ error : error });
    }
  }

  /**
   * Método usado para buscar un estudiante
   * a través de su identificación y devolverlo en la
   * respuesta http por medio de un json excluyendo el _id y el __v
   * en la respuesta por medio de los métodos .select("-_id").select("-__v") línea 126
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findOne(req, res) {
    const identification = req.params.identification;
    try {
      const users = await userReq.find({ identification }).select("-_id").select("-__v");
      res.json({ data: users });
      res.status(200);
    } catch (error) {
      res.status(400);
      res.json({ error : error });
    }
  }
};

/**
 * Método usado para verificar si un estudiante ya está registrado
 * @param {*identificación del estudiante } identification 
 * @returns boolean devuelve true si el estudiante existe caso contrario false
 */
const exists = async (identification) => {
  try {
    const result = await userReq.findOne({ identification });
    if(!result)
      return { exists : false };
    else
      return { exists : true };
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
    return { exists : false, error : err};
  }
}
