import{LogEntity, LogSeverityLevel} from '../entities/log.entity'
export abstract class logRepository {
 // al declarar una clase abstracta del data source no se pueden crear instancias    
 // obliga el comportamiento de ese dataSource sobre otras clases 

 abstract saveLog (log: LogEntity): Promise<void>;
 abstract getLogs (severtyLevel: LogSeverityLevel): Promise<LogEntity[]>;

}
