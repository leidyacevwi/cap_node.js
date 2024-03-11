import { CheckService } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-service";

export class Server {
    public static start() { 
        console.log('Server started..');
        CronService.createJob(
            '*/5 * * * * * ',
            () => {
                // const date = new Date();
                // console.log('3 segundos', date);
                new CheckService(
                    ()=> console.log('sucess'),
                    (error)=> console.log(error)
                ).execute('http://google.com')
            }
        );


    }
}
