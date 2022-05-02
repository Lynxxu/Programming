# class - 类，可根据类创造实例，类可以理解为某一类东西，而实例则为类内的某个特殊元素，比如狗是一个类，而某个狗是一个实例
class Phone:
    """一次模拟手机信息的尝试"""

    def __init__(self, name, brand):
        """ 初始化属性SOC和电池容量"""
        self.name = name
        self.brand = brand

    def charge(self):
        """模拟手机充电中"""
        print(self.name.title() + ' is now charging')

    def shut_down(self):
        """模拟关掉手机"""
        print("shutting down " + self.name.title())


# 类内的函数被称为方法，__init__方法为讲初始化类内的方法（函数)可理解为initialize
# __init__后的第一个形参必须为self，self代表类的实例，代表即将使用类创建的实例

my_phone = Phone("Redmi K20Pro", "Mi")  # 这个my phone就是一个实例，一个红米k20 代表了一个手机类的实例
my_phone.charge()  # 调用实例内所创建的方法，使用已经创建了的my phone使用点方法调用charge来充电手机
my_phone.shut_down()

Oscar_phone = Phone("Mi 10 pro", "Mi")
Oscar_phone.charge()
Oscar_phone.shut_down()


# 在上方代码内，my_phone便是一个实例，而前面__init__所使用的self.name 和self.brand所代表的便是这个实例
# 后面def的两个方法都可以直接使用点调用法进行实例的操作

class Bicycle():
    """一次模拟自行车的尝试"""

    def __init__(self, brand, year, price, type):
        """初始化描述自行车的属性"""
        self.brand = brand
        self.year = year
        self.price = price
        self.type = type
        self.odometer = 0  # 这里设置了一个默认值 - 里程表默认为0

    def get_descriptive_name(self):
        """返回一个描述性的名字"""
        long_name = str(self.year) + ' ' + self.brand + ' ' + self.type
        print(long_name.title())

    def read_odometer(self):
        """读里程计的程序"""
        print("Your bicycle had travelled " + str(self.odometer) + ' miles.')

    def update_odometer(self, mileage):
        """更新里程计的程序"""
        self.odometer = mileage

    def increment(self, miles):
        """增加里程计的度数"""
        self.odometer += miles


my_bicycle = Bicycle('Trek', '2009', '10090', 'SP2')
my_bicycle.get_descriptive_name()

# 更改默认属性的一个办法为直接修改属性的值
my_bicycle.odometer = 23
my_bicycle.read_odometer()

# 另外一个更改的办法为使用方法 - 添加一个update程序
my_bicycle.update_odometer(999)
my_bicycle.read_odometer()

# 还有一个increment的办法，每次增加多少
my_bicycle.increment(1000)
my_bicycle.read_odometer()


# 继承和子类
# 将实例作用为属性


class Battery():
    """模拟电动车电瓶的类"""

    def __init__(self, battery_size=80):
        self.battery_size = battery_size

    def describe_battery(self):
        """打印关于电瓶的消息"""
        print("This E-bike has a " + str(self.battery_size) + "-kWh battery.")


class ElectricBike(Bicycle):
    """电动车，以自行车为父类的子类"""

    def __init__(self, brand, year, price, type):
        """
        初始化描述自行车的属性
        然后后面使用super来初始化子类电动车的属性
        """
        super().__init__(brand, year, price, type)
        self.battery = Battery()  # 这里将battery属性自动连接到Battery类内，并且默认为80


my_Jay = ElectricBike('Jay', '2019', '2300', 'SuperSave 0922')
my_Jay.get_descriptive_name()

# 在super子类的init初始化时不需要加上self, 因为self代表的是即将使用的实例


my_Jay.battery.describe_battery()
# self.battery然后使用Battery类的方法

# 命名类时需使用驼峰命名法 - 单词首字母大写不用下划线，但是模块和实例名都用小写+下划线