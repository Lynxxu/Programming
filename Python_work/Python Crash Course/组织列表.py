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