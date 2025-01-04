import { REST, Routes } from "discord.js";
const comandosJson = JSON.parse(fs.readFileSync('../../Data/Comandos.json', 'utf-8'));
import { config } from 'dotenv';
config();

class AdministratorController {
    
    async updateComandos(req, res){
        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
        try {
            console.log(`Resetando ${comandosJson.length} comandos.`);
    
            // Mapear os comandos JSON para o formato esperado pelo Discord.
            const commands = comandosJson.map(comando => ({
                name: comando.data.name,
                description: comando.data.description,
            }));
    
            // Enviar os comandos para o Discord
            await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commands }
            );
            
            return res.status(200).json({ message: "Sincronização concluída com sucesso!" });
        } catch (error) {
            console.error(`Erro ao fazer a sincronização dos comandos: ${error}`);
            return res.status(500).json({ message: `Erro ao sincronizar ${error}` });
        }
    };

    
}

export default AdministratorController;
