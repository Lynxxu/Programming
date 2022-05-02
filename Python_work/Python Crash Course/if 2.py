#If-elif-else 结构
#14岁犯法，16岁视情况，18岁无所谓
age=int(input())
if age < 14:
	print("You are not allowed to have sex")
elif age < 16:
	print("if you wish, you could")
elif age >= 18 and age<= 120:#这里是直接去掉else函数来用elif更加详细
	print("i dont give a shit")
#记得使用int函数让输入内容改成数字，不然if函数不能比较字符串和数字
#若有多个条件时，使用多个if函数
houses=['spes','lux','pax','virtues','insparito','fidus']
if 'spes' in houses:
	print("Spes house, best house")
if 'pax' in houses:
	print("gugugu")
if 'insparito' in houses:
	print("insparito,insparito lets go")
#如上段代码，是不能用if-elif-else结构解决的,因为如果通过了一个测试，其他的所有都会直接忽略

