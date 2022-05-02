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
