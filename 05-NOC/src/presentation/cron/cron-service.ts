import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  static createJob(cronTime: CronTime, onTick: OnTick) {
    const job = new CronJob(
      cronTime,
      onTick,
      // "*/2 * * * * *", // cronTime
      // () => {
      //   console.log(
      //     "2 second",
      //     new Date().toLocaleString("en-US", {
      //       timeZone: "America/Los_Angeles",
      //     }),
      //   );
      // }, // onTick
      // null, // onComplete
      // true, // start
      // "America/Los_Angeles", // timeZone
    );
    job.start();
    return job;
  }
}
