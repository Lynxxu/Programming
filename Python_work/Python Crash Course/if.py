Phones=['xiaomi','samsung','apple','huawei']
for phone in Phones:
	if phone=='samsung':
		print(phone.upper())
	else:
		print(phone.title())

#if 语句的核心为true/false表达式，即条件测试，如果是true，则执行后面的代码，false则用else代码
#例如：
car = 'Audi'
car == 'audi'
#>>False
car.lower() == 'audi'
#>>True
#这是检查是否相等的方式
requested_brand='redmi'
if requested_brand != 'honour':
	print("redmi the best")
#！=是判断值是否不同
#条件语句也可以使用其他符号，=><>=<=都可以
my_age=input()
if my_age!=17:
	print("that's not right,please try again")

#如上，使用这个，就可以做基本的交互
age_1=10
age_2=12

age_1>=10 and age_2>=10 #判断两个值是否同时满足
#>>False
age_2>=10 or age_1>=10 #其中一个条件满足
#>>True

programs=['CS','CE','EC','ECE']
'EC'in programs
#>>true 

if'EC' in programs:
	print("That's a cool choice")
#这种True和False的区别被称为布尔运算