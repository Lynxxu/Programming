somePromise()
  .then(function () {
    return someOtherPromise();
  })
  .then(function (lastResult) {});
//这里是一个promise chain，最基本的，最上面的return结果将会是下面的函数变量内容
fetchPromise()
  .then((response) => {
    if (response.ok) {
      return response; // synchronous 值
    }
    return response.json();
  })
  .then((data) => console.log(data.uid));
//这里的例子比较抽象，但是大概意思是，如果我在一个then（）里面嵌套一个if，而这个if内写一个return，比如说一个synchronous值
//那么这个then模块可以根据情况来return，比如如果我想查某个人，如果它在数据库内，则直接返回现有值，但是如果没有的话就通过async函数获得值
fetchPromise()
  .then((response) => {
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }
    if (response.ok) {
      return response;
    }
    return response.json();
  })
  .then((data) => console.log(data.uid))
  .catch(function (err) {
    console.log("this is an error");
  });
//这个和上面是一样的，但是加上了throw和catch来报错，throw是用于得到synchronous值的报错，而catch则会选择全部的promise来看有没有问题
