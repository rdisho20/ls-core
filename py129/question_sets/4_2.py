class Device:
    def power_on(self):
        return "Device powering on"

class Battery:
    def power_on(self):
        return "Battery supplying power"

class Screen:
    def display(self):
        return "Screen displaying content"

class Smartphone(Screen, Device, Battery):
    def startup(self):
        print(super().power_on())
        print(super().display())

phone = Smartphone()
print(phone.startup())
print(Smartphone.__mro__)

'''
Method resolution order checks Smartphone class first, then the classes
inherited by Smartphone left-to-right in class definition inheritance list

We check smartphone for startup() first but don't find it, then check Screen next
and still don't find it. Finally, our next check is sufficient which is the class
Device.  I chose to have smartphone inherit battery last, because if it is charged
it will have power, so when powered on, the first reasonable thing we can expect
as part of this inheritance relationship is the power_on() method from Device
to display first, because in order for us to see a "Battery supplying power"
message in the real world, we can assume that first we were able to literally
power on the device.
'''