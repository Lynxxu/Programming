def average(var:list):
    return sum(var)/len(var)


num = str(12345)
lst = []
for values in num:
    lst.append(int(values))

print(lst)

lst1 = [1, 2, 3]
lst2 = [2, 3, 4, 5, 6]
temp = []
if len(lst1) > len(lst2):
    length = len(lst2)
    extra = len(lst1)-len(lst2)
else:
    length = len(lst1)
    extra = len(lst2) - len(lst1)

for numbers in range(length):
    temp.append(lst1[numbers])
    temp.append(lst2[numbers])

if len(lst1) > len(lst2):
    for values in lst1[len(lst2):len(lst1)]:
        temp.append(values)

else:
    for values in lst2[len(lst1):len(lst2)]:
        temp.append(values)

print(temp)

list_one = [1, 3, 5]
list_two = [2, 4]
length = len(list_two)
temp = []
for numbers in range(length):
    temp.append(list_one[numbers])
    temp.append(list_two[numbers])

extra = len(list_one) - len(list_two)
temp.append(list_one[-extra])
print(temp)

lst = [1, 2, 3, 4]
for values in lst:
    print(values)

list = [1, 2, 3, 4, 5, 6]  # list 是变量名 variable name

def ave_no_max_min(Datalist):  # Datalist 是 parameter， 最后print的时候parameter 可以用其他变量名替代
    Datalist.pop(0)
    Datalist.pop(len(Datalist) - 1)
    return (Datalist)
print(ave_no_max_min(list))
print(sum(ave_no_max_min(list)) / len(ave_no_max_min(list)))

temp = ""
iterator = 0

for i in range(1, 10001):
    temp += str(i)

for numbers in temp:
    if numbers == "7":
        iterator += 1
