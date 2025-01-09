import { config } from "dotenv";
config();

class LoginController {
    
    async login(req, res){
        const { username, password} = req.body;

        if(!login || !password){
            return res.status(400).json({ message: "Usuário e senha são obrigatórios." });
        }

        const login = username.trim().toUpperCase();
        const senha = password.trim()

        if(login !== process.env.USERNAME || senha !== process.env.PASSWORD){
            return res.status(401).json({message: "Usuário ou senha inválidos."})
        }
        
        res.status(200).json({message: "Login realizado com sucesso."})
        
    };
}

export default LoginController;
