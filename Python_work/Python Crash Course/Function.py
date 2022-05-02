# 可向函数传递列表
def greet_users(names):
    """向列表内的每个用户传递简单问候"""
    for name in names:
        message = "hello, " + name.title() + "!"
        print(message)


username = ['Alice', 'Jim', 'oscar']
greet_users(username)


# 这里定义了一个函数内含for循环，names为列表，name是列表内每一个元素,然后define一个变量加入，在最后创建一个用户名的列表，将列表使用函数遍历。


# 还可使用函数来修改列表：

def print_models(unprinted_models, completed_models):

    while unprinted_models:
        current_model = unprinted_models.pop()

        print("Printing model: " + current_model)
        completed_models.append(current_model)


def Showing_model(completed_models):
    print("\nThe following models are completed: ")
    for completed_model in completed_models:
        print(completed_model)


unprinted_models = ['Phone case', 'keyboard', 'water bottle']
completed_models = []

print_models(unprinted_models[:], completed_models)
Showing_model(completed_models)


# 在这个例子内，使用了一个3d打印的实例 - def两个函数分为两步
# 第一步定义一个函数，两个形参代表两个列表 - 一个代表未打印的一个代表completed的
# 使用while和pop将第一个列表内的元素弹出到第二个列表内
# 第二个函数简单的使用了一个for循环将每一个completed给打印出来
# 最后使用函数时，可使用切片表示法 [:]创建一个列表的副本并执行任务，可将源列表的元素不变但在副本内执行操作


# 可以使用函数传递任意数量的实参
def making_pizza(*toppings):
    """"打印顾客所需要的topping"""
    print("\nadding toppings:")
    for topping in toppings:
        print("- " + topping)

    print("\nFinished your pizza")


making_pizza('pepperoni', 'pepper')


# 在这个函数内，*代表了创建一个名为topping的元组并把所有的实参加入元组内
# 使用for循环遍历元组后打印出消息


# 还可以使用位置实参加上任意数量的实参 - 使用元组
def making_pancake(money, *extras):
    print("\nMaking a $" + money +
          " pancake with the following extras: ")
    for extra in extras:
        print(extra.title())


making_pancake("10", 'onion', 'ham', 'lettuce')


# 这里创建了一个extras的元组，将第一个以后的所有元素都加入到extras元组内方便后续操作


# 还可以使用任意关键词实参,即将函数与字典结合起来

def build_profile(first, last, **user_info):
    """创建用户信息的列表"""
    profile = {}
    profile['first_name'] = first
    profile['last_name'] = last
    for key, value in user_info.items():
        profile[key] = value
    return profile


william_profile = build_profile('William', 'xu',
                                location='China',
                                field='CS')
print(william_profile)

# 在这个函数创建了两个位置形参，一个字典（**代表创建列表
# 然后先创建一个空列表，将两个位置实参加入字典内使用first_last作为key value pair
# 在第二个以后的实参都将加入在user_info的字典内，将user_info的键值对加入profile字典内
# 最后return字典，完成函数


# 函数模块化：

import specs_module

specs_module.showing_specs('Kirin 980', 'SONY S94', '5000mA')

# 这便是其中一个调用模块函数的办法 - module_name.function_name()
# 另外一个办法可调用模块内的特定函数

# from specs_module import showing_specs调动某个module内的特定函数，而import整个所有的函数


# 可使用as给模块&函数指定一个别名
# import specs_module as S 然后 S.showing_specs("1","2"."3")
# from specs_module import showing_specs as SS 后直接 SS("1","2","3")

# 还可以使用 from specs_module import * 来参入模块内的所有函数
