import {CronJob} from 'cron';
type CronTime = string|Date;
type Onclick = () => void;

export class CronService {
    static createJob(cronTime:CronTime, onTick:Onclick):CronJob {
        
        const job = new CronJob(cronTime, onTick);


            // '*/3 * * * * * ', // cronTime
            // function () {
            //     const date = new Date();
            //     console.log('3 second', date);
            // }, // onTick
        // );
        job.start();
        return job
        // job.stop(); para parar el monitoreo de procesos
    }
}