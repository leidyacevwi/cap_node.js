import { envs } from '../config/plugins/envs.plugin';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';


const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(), // instancia que se va a utilizar
);



export class Server {

  public static start() {

    console.log( 'Server started...' );

    //mandar email
    const emailService = new EmailService(
      fileSystemLogRepository
    );
    emailService.sendEmailWithFileSystemLogs (
      ['leidyacevedo491@gmail.com','leidyacevedo687@gmail.com']);



    // const emailService = new EmailService();

    // emailService.sendEmail({
    //   to:'leidyacevedo491@gmail.com',
    //   subject: 'Log de sistema',
    //   htmlBody: `
    //   <h3> Logs de sistema -NOC </h3>
    //   <p> Lorem ipsum dolor sit amet consectetur adipiscing elit nostra, fusce vivamus euismod facilisi in tortor placerat leo ac, augue tellus maecenas egestas ut mauris nec. Proin imperdiet cubilia mollis ullamcorper ante sed montes nibh eleifend justo, scelerisque aenean placerat posuere arcu mus donec congue maecenas ligula, tellus venenatis pretium inceptos etiam varius diam vivamus augue. Diam duis phasellus eget feugiat taciti eros posuere class suscipit purus lobortis, porta commodo porttitor nulla ante senectus libero vulputate nostra nec, laoreet quam elementum aptent nisi praesent parturient per viverra donec.

    //   Ultrices nibh congue montes litora nullam fermentum tellus, iaculis metus maecenas dictumst eu tempor porttitor, lobortis rhoncus venenatis at dignissim senectus. Sollicitudin lacus pharetra diam odio massa ut, imperdiet cubilia fringilla auctor turpis mus volutpat, dictum faucibus rutrum facilisis aliquam. Dapibus scelerisque hac neque nostra taciti duis interdum fringilla, odio egestas mattis pretium metus nibh justo sociosqu, risus massa eu bibendum eleifend sem senectus. </p>
    //   <p> ver los logs adjuntos </p>
    //   `
    // })

    // console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL)

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
    //   }
    // );


  }


}


