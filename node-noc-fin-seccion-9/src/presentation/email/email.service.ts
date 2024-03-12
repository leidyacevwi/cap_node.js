import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
// import { Attachment } from 'nodemailer/lib/mailer';

interface SendMailOptions{
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachment[]; // o adjuntos es para definir que aca se declaran


}
// todo: attachements es como lucen los adjuntos
interface Attachment{
    filename: string;
    path: string;
    
}
export class EmailService{
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });
// inyeccion de dependencias
constructor(
    private readonly logRepository:LogRepository,
){

}
    async sendEmail(option: SendMailOptions ): Promise<boolean> { 
        const {to , subject, htmlBody, attachements = []} = option
        try {
         const sendInformation = await this.transporter.sendMail({
            to: to,
            subject: subject,
            html: htmlBody,
            attachments: attachements,
         });

         const log = new LogEntity({
            level:LogSeverityLevel.low,
            message: 'Email sent',
            origin: 'email.service.ts'

         })
         
         this.logRepository.saveLog(log)
         console.log(sendInformation);
         return true;

        } catch (error) {

            const log = new LogEntity({
                level:LogSeverityLevel.high,
                message: 'Email sent',
                origin: 'email.service.ts'
            })
            this.logRepository.saveLog(log)
        return false;
        }
    }
    async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'log del servidor';
        const htmlBody = `
        <h3> Logs de sistema -NOC </h3>
        <p> Lorem ipsum dolor sit amet consectetur adipiscing elit nostra, fusce vivamus euismod facilisi in tortor placerat leo ac, augue tellus maecenas egestas ut mauris nec. Proin imperdiet cubilia mollis ullamcorper ante sed montes nibh eleifend justo, scelerisque aenean placerat posuere arcu mus donec congue maecenas ligula, tellus venenatis pretium inceptos etiam varius diam vivamus augue. Diam duis phasellus eget feugiat taciti eros posuere class suscipit purus lobortis, porta commodo porttitor nulla ante senectus libero vulputate nostra nec, laoreet quam elementum aptent nisi praesent parturient per viverra donec.
  
        Ultrices nibh congue montes litora nullam fermentum tellus, iaculis metus maecenas dictumst eu tempor porttitor, lobortis rhoncus venenatis at dignissim senectus. Sollicitudin lacus pharetra diam odio massa ut, imperdiet cubilia fringilla auctor turpis mus volutpat, dictum faucibus rutrum facilisis aliquam. Dapibus scelerisque hac neque nostra taciti duis interdum fringilla, odio egestas mattis pretium metus nibh justo sociosqu, risus massa eu bibendum eleifend sem senectus. </p>
        <p> ver los logs adjuntos </p>
        `
        const attachements: Attachment[] = [
            {filename: 'logs-all.log', path:'./logs/logs-all.log'},
            {filename: 'logs-high.log', path:'./logs/logs-high.log'},
            {filename: 'logs-medium.log', path:'./logs/logs-medium.log'},
        ];
        this.sendEmail({
            to, subject,attachements, htmlBody
        })
    }

}
