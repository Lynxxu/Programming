print("Hello World")

#变量
message="Hello Python world"
print(message)

message="hello scp william"
print(message)
#python会全程记录最新的变量值
#变量只能带有字母，下划线，数字
#变量应简短并具体

#字符串 String
#在python内，用引号括起来的都是字符串，不论双引号还是单引号""''
"This is a string"
'This is also a string'
message="Hello Python world'okay'"
print(message)
#修改大小写：
name= "wILLIAM xu"
print(name.title())#name.title使python对name执行title操作（首字母大写，其他小写）
print(name.upper())#大写
print(name.lower())#小写
#合并字符串
first_name="xu"
last_name="william"
full_name=first_name+" "+last_name
print(full_name)

#空白
#泛指任何非打印符号，比如制表符，换行符，空格
print("hello world")
print("\thello world")
#可从上看出\t为制表符，给前面带来空格
print("Language:\nEnglish\nFrench\nChinese")
#从上看出\n为换行符
message="I am handsome     "#后面有空格
message=message.rstrip()#通过这一步，将暂存的message.rstrip变为永久的message,去掉右边的空格
print(message)
JoJo="   Star platinium, The World!   "
print(JoJo.rstrip())#rstrip去除右边空格
print(JoJo.lstrip())#lstrip为左边空格
print(JoJo.strip())#strip左右空格都去除

#数字
#在编程语言内，小数被称为浮点数,py也可以直接运算，比如：
print(4+3)
print(4*9)
print(4/3)
#避免数字与字符串的混淆，使用str()函数指定string
age=17
#message= "happy"+age+"rd birthday"
#print(message)
#这个是有问题的，因为python不能识别17是数字还是字符串，需加上str函数如下
message= "happy "+str(age)+"rd birthday"
print(message)

#列表
#在python中，用【】中括号表示，用逗号来分格
Brands=['apple','xiaoMi','huawei','meizu']
print(Brands)#将会直接显示列表内的所有元素
#索引是由0开始的，所以可以如下
print(Brands[0])
#也可以加上.title()函数
print(Brands[0].title())
print(Brands[-1])#python内元素-1为最后的元素
#便可以使用列表元素来组成句子
print("my first cell phone was a "+Brands[1].title())
#修改列表元素
Brands[0]="Hammer"
print(Brands)
#由上可看出，只要定义了列表的元素，就可以改掉某个元素
#添加元素
Brands.append('apple')
print(Brands)
#用append()函数来加上元素
Earphones=[]
Earphones.append('Bose')
Earphones.append('Sony')
Earphones.append('senheisei')
print(Earphones)
#用insert函数来在特定位置添加元素
Earphones.insert(0,'Fill')
print(Earphones)


#删除元素用del函数
Earphones=[]
Earphones.append('Bose')
Earphones.append('Sony')
Earphones.append('senheisei')
Earphones.append('Beats')
Earphones.append('FIIl')
del Earphones[0]
print(Earphones)
#若以后还会访问，则用pop函数
Last_earphone=Earphones.pop()
print(Earphones)
print(Last_earphone)
#类似上面，pop函数会将弹出的元素单独储存
print("the last earphone i owned was a "+Last_earphone.title())
#若不知道元素的位置，可使用remove函数
too_expensive='Sony'
Earphones.remove(too_expensive)
print(Earphones)

#组织列表
#使用sort函数来永久排序
letters=['a','c','s','f','d','q','e','b']
letters.sort()
print(letters)
#或者用倒序来排序
letters.sort(reverse=True)
print(letters)
#用sorted函数来暂时排序
print("this is the list")
print(letters)

print("\nthis is temporary list")
print(sorted(letters))

print("\nThis is the list again")
print(letters)
#reverse 函数将列表倒转
money=['1','2','3','4']
print(money)
money.reverse()
print(money)
#确定元素数量时，用len函数
print(len(money))

#数值列表
for value in range(1,5):
	print(value)
#使用range函数时，会生成从第一个到第二个之间所有的数字，所以1，5内只生成了1234
#也可以使用list函数来直接生成range的列表
Numbers=list(range(1,8))
print(Numbers)
#还可以用range函数取得偶数等
even=list(range(2,11,2))
print(even)
#这个函数便是从2开始数，直到超过11就停止，所以是偶数
#若要创建平方，可使用**表示平方
#squares=[]
#for value in range(1,11):
#	square=value**2
#	squares.append(square)
#print(squares)
#在这里，squares为空列表，使用for来对每个元素进行循环平方操作，然后append加入列表
#可以简化上面的代码
squares=[]
for value in range(1,11):
	squares.append(value**2)
	#直接用range内的value平方然后加入
print(squares)
#几个处理数字列表的函数
digits=[1,2,3,4,5]
print(sum(digits))
print(min(digits))
print(max(digits))
#解析列表
squares=[value**2 for value in range(1,11)]
print(squares)
#这个相当于前面for循环的缩减版
#先指定一个列表名，然后方括号（因为是列表），然后定义一个表达式，然后写for循环，直接给表达式提供值，便完成了

#列表切片
beverages=['Lemon tea','fruit juice','eastern tea','sprite','cola']
print(beverages[0:3])
#0：3切片指的是列表从1到3元素，即到eastern tea
print(beverages[1:4])
#如上，1，4则是第二个到第四个元素
print(beverages[:4])
#若未建立索引，则是从头开始
print(beverages[3:])
#若没建立结尾，则是从头一直到尾
print(beverages[-3:])
#从倒数到结尾
print("here are my favorite drinks")
for beverage in beverages[:3]:
	print(beverage)
#复制列表
drinks=beverages[:]
#去除起始和终止索引，将会复制整个列表
#若直接写出drinks=beverages，则会直接指向一个相同的列表，所以只能用[:]来直接拷贝列表


#for循环
friends=['richard','chalin','oscar']
for friend in friends:#不要忘记冒号！！！
	print(friend.title() +", SCP Forever")
	print("Hope that we could still in contact after graduation, "+friend.title()+".\n")
print("love you all, smart group")#没缩进的代码默认不在loop内，只执行一次


#元组
#元素可变的是列表，不可变的是元组
Money=[2,3,5]#这是列表
dimensions=(200,50)#这是元组
print(dimensions[0])
print(dimensions[1])

#dimension[0]=250 如果这样写，则会报错
for dimension in dimensions:
	print(dimension)
#类似列表，元组也可以用for循环
dimensions=(400,20)
for dimension in dimensions:
	print(dimension)
#即使不能修改元组内元素的值，可以直接覆盖元组内的元素
