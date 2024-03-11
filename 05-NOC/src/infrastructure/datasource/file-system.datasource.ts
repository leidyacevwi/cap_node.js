import fs from 'fs'
import { LogDataSource } from "../../domain/dataSource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import path from 'path';

export class FileSystemDataSource implements LogDataSource {
    private readonly logpath ='logs/'
    private readonly allLogsPath ='logs/logs-all.log'
    private readonly mediumLogsPath ='logs/logs-medium.log'
    private readonly highLogsPath ='logs/logs-high.log'
    
    constructor(){
        this.createLogsFiles();
    }

    //crea el método
    private createLogsFiles = () => {
        if (!fs.existsSync(this.logpath)){
            fs.mkdirSync(this.logpath);
        }
        //arreglo para recorrer y crear los archivos
        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath            
        ].forEach(path =>{
            if (fs.existsSync(path)) return;
                fs.writeFileSync(path, '');

        })

    }

    async saveLog(newLog: LogEntity): Promise<void> {
        // throw new Error("Method not implemented.");
        const logAsJson = `${JSON.stringify(newLog)}\n`;
        fs.appendFileSync(this.allLogsPath, logAsJson);

        if (newLog.level === LogSeverityLevel.low) return;

        if(newLog.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.mediumLogsPath, logAsJson);
        } else{
            fs.appendFileSync(this.highLogsPath, logAsJson);
        }
    }
    getLogs(severtyLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }
}