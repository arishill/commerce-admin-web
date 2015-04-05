var something = function() {
  var CronJob = Npm.require('cron').CronJob;
  var job = new CronJob({
    cronTime: '00 23 23 * * 0-5',
    onTick: function() {
      console.log('its 11:2000000000');
    },
    start: true, /* Start the job right now */
    timeZone: 'America/Los_Angeles' /* Time zone of this job. */
  });
}

something();