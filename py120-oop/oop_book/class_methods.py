class Foo1:

    @classmethod
    def bar(cls):
        print('this is bar in Foo1')

    def qux(self):
        type(self).bar()
        self.__class__.bar()
        self.bar()
        Foo1.bar()


foo1 = Foo1()
foo1.qux()

type(foo1).bar()
foo1.__class__.bar()
foo1.bar()
Foo1.bar()
