const cron = require('node-cron');
const EnteriosNotificationModel = require("../models/notification.model");
const EmailTransporter = require("../notifier/emailService");

cron.schedule('*/30  * * * * *', async ()=>{
    /**
     * Logic inside this to search the db every 30 seconds and send the emails for any new request
     */

    const notifications = await EnteriosNotificationModel.find({
        sentStatus : "UN_SENT"
        
    });
    console.log(notifications.length);
    notifications.forEach(notification => {
         
        const mailData = {
            from: 'enterios-notification-service@gmail.com',
            to: notification.recepientEmails,
            subject: notification.subject,
            text: notification.content
            
        };
        console.log(mailData);
        EmailTransporter.sendMail(mailData, async function (err, info) {
            if (err)
                console.log(err.message);
            else
                console.log(info);
                //Update the DB
                const savedNotification  = await EnteriosNotificationModel.findOne({_id : notification._id});
                savedNotification.sentStatus = "SENT";
                await savedNotification.save();

        });
    });
})