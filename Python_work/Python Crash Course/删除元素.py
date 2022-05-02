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