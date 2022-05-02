# Inspired by UMRnInside
# see https://www.zhihu.com/question/402635037/answer/1302122540
#                               DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
#                                        Version 2, December 2004
# 
#                           Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
# 
#                     Everyone is permitted to copy and distribute verbatim or modified
#                     copies of this license document, and changing it is allowed as long
#                     as the name is changed.
# 
#                               DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
#                     TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
# 
#                      0. You just DO WHAT THE FUCK YOU WANT TO.


from random import choice

Universal_Reply = [
    "那你真是很棒棒哦",
    "您觉得是就是吧",
    "真的吗？我不信",
    "你在教我做事啊？",
    "不会吧不会吧，不会真的有人这样想吧？？",
    "您又懂了喔？",
    "然后呢？",
    "就这呀？",
    "你说的都对~",
    "不愧是你，这都知道",
    "哇奥，好牛啊！",
    "是的哟",
    "你继续，我爱听",
    "开始你的表演",
    "不会真有人还不知道吧"
]

Fierce_answer_reply = [
    "他急了他急了他急了他急了他急了",
    "不是吧阿sir这就急了？",
    "就这？就这？就这啊？",
    "?????????",
    "你品，你细品",
    "就这，就这，我以为多狠呢",
    "他急了，他急了，多大点事，至于吗"
]

Rhetorical_reply = [
    "??????????",
    "咋滴？",
    "就这啊？就这？",
    "怎么，这就承受不了了？",
    "你急了你急了你急了"
]

Fierce_answer = [
    "傻逼",
    "!",
    "！"
    "有病",
    "不能",
    "fuck",
    "妈"
]

Rhetorical_answer = [
    "???",
    "？？？"
]


# 创建一个探测答案是否为激烈/迷惑的函数,若answer in replies，则return true
def check_answer(answers, replies):
    for variable in answers:
        if variable in replies:
            return True
        else:
            return False


def AI_reply():
    if check_answer(answer, Fierce_answer):
        print(choice(Fierce_answer_reply))

    elif check_answer(answer, Rhetorical_answer):
        print(choice(Rhetorical_reply))

    else:
        print(choice(Universal_Reply))


while True:
    answer = input(">>>")
    AI_reply()
# 设置循环 - 设置一直为true，先写出input后运行AIreply
