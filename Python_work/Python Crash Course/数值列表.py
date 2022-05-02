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