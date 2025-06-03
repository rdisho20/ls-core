class NotificationManager:
    def send_notification(self, notification, email, message):
        format = notification.format(email)
        send = notification.send(email, message)
        
        return f"{format}\n{send}"

class EmailNotification:
    # making methods public so class NotificationManager can use them
    def format(self, recipient):
        return f"Formatting email for {recipient}"
    
    def send(self, recipient, message):
        return f"Sending email to {recipient}: {message}"

class SMSNotification:
    def format(self, recipient):
        return f"Formatting SMS for {recipient}"
    
    def send(self, recipient, message):
        return f"Sending SMS to {recipient}: {message}"

class PushNotification:
    def format(self, recipient):
        return f"Formatting push notification for {recipient}"
    
    def send(self, recipient, message):
        return f"Sending push notification to {recipient}: {message}"


# Test Case
manager = NotificationManager()
notifications = [
    EmailNotification(),
    SMSNotification(),
    PushNotification(),
]

for notification in notifications:
    print(manager.send_notification(notification, "user@example.com", "Hello, world!"))
    print()