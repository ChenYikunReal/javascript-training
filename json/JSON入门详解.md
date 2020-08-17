# 欢迎来到JSON王国

![在这里插入图片描述](https://github.com/ChenYikunReal/node_training/blob/master/images/json-image1.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

# <font color="red">综述</font>
**JavaScript对象表示法**（JavaScript Object Notation，JSON）已经成为RESTful接口设计中的事实标准，JSON数据格式使得应用程序可以通过RESTful API等方式在网络上进行数据通信，架构师和开发人员可以使用一整套现成的技术生态系统（鲜为人知的标准、工具和相关技术）来搭建设计精巧的应用程序。JSON不局限于某项技术，本身非私有，且可移植。对于产生（序列化）和读取（反序列化）JSON数据，绝大多数主流的现代编程语言和平台都可以提供优秀的JSON支持，如**JavaScrip**t、Ruby、**Java**、Groovy、Go、Scala、Perl、PHP、Python、Clojure、C#等等。JSON不仅仅是Ajax调用中**XML**的一个简单的替代品，它也日益成为互联网数据交换领域的骨干元素。严谨的标准和技术最佳实践加上对JSON的热爱，有益于我们搭建一个真正优雅、有用而又高效的应用程序。事实上，现在能够用XML实现的功能都可以（也应当）用JSON实现。对于设计或实现Web移动端应用程序、RESTful API以及消息系统的架构师和开发人员，JSON都是有必要学习和研究的内容。JSON非常简单，由对象、数组、名称-值对这三种开发人员熟悉的结构体所组成。除了表现层状态转化（REpresentational State Transfer，REST），JSON在Node.js、MongoDB等NoSQL数据库、Kafka等消息平台等环境中也有应用。

![在这里插入图片描述](https://github.com/ChenYikunReal/node_training/blob/master/images/json-background.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

# <font color="red">JSON是一种技术标准</font>
JSON是Douglas Crockford于2001年提出的，现已成为一项**技术标准**（例如HTTP就是一种技术标准）。

其他的没啥好说的，知道这些就行了。

# <font color="red">从简单示例开始（含测试）</font>
文件名：firstValidObject.json
```text
{
  "thisis": "My first JSON document"
}
```
文件名firstValidArray.json

```text
[
  "also",
  "a",
  "valid",
  "JSON",
  "doc"
]
```
我们对firstValidArray.json用JSLint工具进行测试：<br/>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191004125448420.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20191004125455448.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
<br/>**注意直接使用的Tab不被允许，需要使用空格。**

测试工具说明：
JSLint工具：
http://www.jslint.com/

此外还有JSONLint工具，Github地址：
https://github.com/zaach/jsonlint

打开JSLint工具以后，如下图：<br/>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191004125831903.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
**Source**处粘贴JSON文件内容，点击下方**JSLint**按钮，下方“**Function Report**“的下方就会出现测试结果。**Clear**按钮清除代码。成功或失败的样例在上面的图片中已有展示。

# <font color="red">使用JSON的原因</font>
Ecma国际和IETF所做标准化工作帮助JSON获得行业认可，下面因素促使JSON广泛流行：

 - 基于 JSON 和 RESTful API 的爆发式增长；
 - JSON 基本数据结构的简洁性；
 - JavaScript的日益流行。

依据 Douglas Crockford 的说法，JSON 是 JavaScript 对象字面量表示法的一个子集，因此可以无缝的与 JavaScript开发融为一体。

下面是至少几千个基于 JSON 的 RESTful API 的比较流行的代表：

 - LinkedIn
 - Twitter
 - Facebook
 - Salesforce
 - Github
 - DropBox
 - Tumblr
 - Amazon Web Services (AWS)

JSON 非常简洁，并且正在逐步替代XML成为互联网上主要的数据交换格式。它易于阅读，相关结构也很容易与软件开发人员所熟悉的概念对应起来，例如数组、对象和 key-value 对。我们不用再挠头苦思某个东西应当是 元素还是属性，也不用就这一点与人争论不休。与 XML 相比，对象及其数据成员这一组合**更适合面向对象的设计和开发**。由于节省了每个元素的开始标签与结束标签，JSON 格式的额外开销更少、更为紧凑，所以 JSON 格式的文档一般比 XML 文档小。从企业级应用角度来看，与XML相比，JSON文档在网络上传递与处理更快，因此效率更高。

虽然 Douglas Crockford 将其设计为一种数据交换格式（通常用于REST），但如今 JSON 在配置文件中也占有一席之地，如 Node.js 和 Sublime Text 等广泛应用的。Node.js 使用 package.json 文件来定义其标准的 npm 包结构；Sublime Text 作为Web开发社区一款流行 IDE，使用 JSON 来配置外观和包管理器。

# <font color="red">JSON核心概念</font>
## <font color="orange">JSON数据类型</font>
JSON包含下面三种核心数据类型：

 - **名称-值对**
 		由一个名称（数据类型）和一个值组成
 - **对象**
 		名称-值对的无序集合
 - **数组**
 		值的有序集合

### <font color="blue">名称-值对</font>
nameValue.json
```text
{
  "name": "小明",
  "ID": "123456",
  "University": "Tsinghua University"
}
```
这类JSON数据类型应该具有以下特征：

 - 每一个键名（如"name"）应该
 	- 位于冒号（:）左边；
 	- 是一个字符串，而且必须由双引号括起来。
 - 值（如"小明"）位于冒号的右边
 	- 上例中值用的均为字符串类型，实际上还可以有多种其他类型。

### <font color="blue">对象</font>
对象由名称-值对组成。
下面是一个表示地址的对象：
simpleJsonObject.json
```text
{
  "address" : {
    "line1" : "555 Any Street",
    "city" : "Denver",
    "stateOrProvince" : "CO",
    "zipOrPostalCode" : "80202",
    "country" : "USA"
  }
}
```
下面是一个带有内嵌数组的对象：
jsonObjectNestedArray.json
```text
{
  "speaker" : {
    "firstName" : "Larson",
    "lastName" : "Richard",
    "topics" : ["JSON", "REST", "SOA"]
  }
}
```
下面是一个内嵌其他对象的对象：
jsonObjectNestedObject.json

```text
{
  "speaker" : {
    "firstName" : "Larson",
    "lastName" : "Richard",
    "topics" : ["JSON", "REST", "SOA"],
    "address" : {
      "line1" : "555 Any Street",
      "city" : "Denver",
      "stateOrProvince" : "CO",
      "zipOrPostalCode" : "80202",
      "country" : "USA"
    }
  }
}
```
对象具有以下特征：

 - 由左大括号{和右大括号}括起来；
 - 由一些无序的名称-值对构成，以逗号分隔；
 - 可以是空对象{}；
 - 可以内嵌在其他对象或者数组中。
 
### <font color="blue">数组</font>
下面是一个内嵌其他对象和数组的数组，该数组描述了包含多个发言人：

```text
{
  "speakers": [
    {
      "firstName" : "Larson",
      "lastName" : "Richard",
      "topics" : ["JSON", "REST", "SOA"],
      "address" : {
        "line1" : "555 Any Street",
        "city" : "Denver",
        "stateOrProvince" : "CO",
        "country" : "USA"
      }
    },
    {
      "firstName" : "Tom",
      "lastName" : "Green",
      "topics" : ["JSON", "REST", "SOA"],
      "address" : {
        "line1" : "Fifth Avenue",
        "city" : "New York",
        "stateOrProvince" : "New York",
        "country" : "USA"
      }
    }
  ]
}
```
数组具有以下特征：
 - 由左中括号[和右中括号]括起来；
 - 由一些有序的值构成，以逗号分隔；
 - 可以是空数组[]；
 - 可以内嵌在其他数组或者对象中；
 - 具有以0或1开头的索引。

## <font color="orange">JSON的值类型</font>
JSON的值类型用于表示出现在名称-值对冒号（:）右侧的数据类型。
这些类型包括：

 - 对象
 - 数组
 - 字符串
 - 数值
 - 布尔值
 - null

**接下来介绍后四种类型**。

### <font color="blue">字符串</font>
一些合法的JSON字符串

jsonString.json

```text
[
  "fred",
  "fred\t",
  "\b",
  "",
  "\t",
  "\u004A"
]
```
字符串具有以下特征：

 - 由包含在双引号（" "）里面的零个或多个Unicode字符串组成。除此之外，还包括以下列举的一些字符；
 - 由单引号(' ')引起来的字符串为非法字符串。

JSON字符串还可以包含由反斜杠转义的字符：
- \\'' 双引号
- \\\ 反斜杠
- \\/ 斜杠
- \b 退格
- \f 换页
- \n 换行
- \r 回车
- \t Tab制表符
- \u 后跟4位十六进制数字（表示一个Unicode字符）

### <font color="blue">数值</font>
jsonNumbers.json

```text
{
  "age" : 29,
  "cost" : 299.99,
  "temperature" : -10.5,
  "unitPrice" : 0.2,
  "speedOfLight1" : 1.23E11,
  "speedOfLight2" : 1.23e+11,
  "avogadro1" : 6.023e23,
  "avogadro2" : 6.023E+23,
  "oneHundredth" : 10e-3,
  "ontTenth" : 10E-2
}
```

数值遵循JavaScript的双精度浮点数类型，并具有以下特征：
 - 数值永远是十进制数（只能出现数字0~9），不能以0开头；
 - 数值可以存在由小数点（.）开头的小数部分；
 - 数值可以是以10为底的指数，该指数用e或者E来表示，其后跟正号表示正指数幂（也可以不加），跟负号表示负指数幂；
 - 数值不支持八进制数和十六进制数；
 - 与JavaScript不同，数值不能是NaN后者Infinity。

### <font color="blue">布尔值</font>
jsonBoolean.json

```text
{
  "isRegistered" : true,
  "emailValidated" : false
}
```

布尔值存在以下特征：
 - 只存在两种值：true或者false；
 - 冒号（:）右边的true或者false不能用引号括起来。

### <font color="blue">null</font>
从技术上说，null并不是一种类型，而是JSON中的一个特数值。

jsonNull.json

```text
{
  "address" : {
    "line1" : "555 Any Street",
    "line2" : null,
    "city" : "Denver",
    "stateOrProvince" : "CO",
    "zipOrPostalCode" : "80202",
    "country" : "USA"
  }
}
```

null具有以下特征：

 - 不能由括号括起来；
 - 表示某个键或属性没有值；
 - 用作占位符。

## <font color="orange">JSON的版本</font>
Douglas Crockford 认为JSON核心标准不会有新的版本。

JSON标准唯一化的目的是避免支持早期版本而在向后兼容的时候遇到陷阱（哪怕当前不是那么完美）。

Douglas Crockford认为，开发社区有新需要时，新的数据格式将直接替代JSON。

然而，“无版本”的理念仅适用于JSON核心数据格式，有些标准是JSON社区中其他人员提出的。

## <font color="orange">JSON的注释</font>
我们在开发中被强调注释的意义，然而JSON中根本就没有注释。

JSON在开始允许注释到移除注释，有下面原因：
 - Crockford 认为注释没有用；
 - JSON解释器在支持注释方面存在困难；
 - 出现了滥用注释的情况。Crockford 发现有些注释被用于解析指令，这会彻底摧毁JSON的互操作性；
 - 移除注释有利于JSON实现跨平台的可移植性，简化了支持这方面的工作。

## <font color="orange">JSON文件及MIME类型</font>
**.json**是文件系统中存储JSON数据的标准类型。

JSON的媒体类型（MIME）为**application/json**，这可以在IANA的媒体类型网站上找到。

通过在HTTP头部中声明JSON媒体类型，RESTful Web Service 的开发者和使用者一般使用这种名为**内容协商**的机制来表明自己正在使用JSON进行数据交换。

## <font color="orange">JSON编码规范</font>
Google发布过JSON编码规范，比较详细，对API设计者和开发者最重要的是：
 - 属性名
 - 日期属性的值
 - 枚举值

### <font color="blue">JSON属性名</font>
属性名位于key-value对中间冒号的左侧（属性值位于右侧）。

JSON属性命名风格主要是有以下两种：

 - 小驼峰式命名法（lowerCamelCase）
   		除第一个词均为小写字母外，其余每个词均以大写字母开头
 - 以下划线分隔的短语（snake_case）
   		所有字母均小写，词与词之间用下划线（_）分隔

jsonPropertyName.json

```text
{
  "firstName" : "John Smith"
}
```
### <font color="blue">JSON日期属性的值</font>
Google的编码规范要求日期遵循RFC 3339的格式。

jsonDateFormat.json

```text
{
  "dateRegistered" : "2019-10-04T15:00:11-05:00"
}
```
### <font color="blue">JSON经纬度值</font>
Google建议遵循ISO 6709标准。

jsonLatLon.json

```text
{
  "empireStateBilding" : "40.748747-73.985547"
}
```

### <font color="blue">JSON编码缩进</font>
大致规则（Google未提及）：
 - JSON是序列化格式，不是呈现格式，缩进规则意义不大。
 - 很多JSON格式化工具会让使用者自选具体缩进方案（两格、三格、四格等）
 - 两格缩进比较常用

# <font color="red">工具和风格补充</font>

 - 架构风格可选noBackend（无后端），可以与后端解耦
 - JSON Editor Online 工具可以对JSON数据进行建模
 - JSON Generator 可以生成示例数据（快速生成大量测试数据）

# <font color="red">JavaScript创建JSON对象
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JSON</title>
  </head>
  <body>
    <h1>员工信息</h1>
    <p>
      ID: <span id="js_id"></span><br/> 
      Name: <span id="js_name"></span><br/> 
      Age: <span id="js_age"></span><br/> 
	  Email: <span id="js_email"></span><br/> 
    </p>
    <script>
      var jsonObj= {
	    "id":"1111",
	    "name":"王富贵", 
	    "age":"30",
		"email":"fugui@gmail.com"
      };
      document.getElementById("js_id").innerHTML=jsonObj.id 
      document.getElementById("js_name").innerHTML=jsonObj.name
      document.getElementById("js_age").innerHTML=jsonObj.age
	  document.getElementById("js_email").innerHTML=jsonObj.email
    </script>
  </body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020031814592317.PNG)


# <font color="red">JSON与XML的那些事
## XML与JSON
这是实战Demo节目，自然不会是讲原理的，事先声明！

本文主要是基于之前的一份Java代码，根据合理数据（下面的链接中有），设计对应的XML格式和JSON格式的存储表示，并使用工具对其合法性加以验证。

## JavaCode
先看Java的代码，完整版在这里 → [@see 完整版](https://github.com/ChenYikunReal/java_gourmet_coffee)

下面是这里会用到的的部分类：

```java
public class Product {
    private String code;
    private String description;
    private double price;

    public Product(String code, String description, double price) {
        this.code = code;
        this.description = description;
        this.price = price;
    }

    public String getCode() {
        return this.code;
    }

    public String getDescription() {
        return this.description;
    }

    public double getPrice() {
        return this.price;
    }

    //Identifying whether objects are equal by code.
    @Override
    public boolean equals(Object product) {
        return (product instanceof Product) && (this.getCode().equals(((Product)product).getCode()));
    }

    @Override
    public String toString() {
        return this.getCode() + "," + this.getDescription() + "," + this.getPrice();
    }

}
```

```java
public class OrderItem {
    private Product product;
    private int     quantity;

    public OrderItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {
        return this.product;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getQuantity() {
        return this.quantity;
    }

    /**
     * to calculate the cost of purchasing the product
     * @return the result
     */
    public double getValue() {
        return this.getProduct().getPrice() * this.getQuantity();
    }

    @Override
    public String toString() {
        return this.getQuantity() + "," + this.getProduct().getCode() + "," + this.getProduct().getPrice();
    }

}
```

```java
import java.util.ArrayList;

public class Order {
    //to save all orderItems.
    private ArrayList<OrderItem> orderItemList = new ArrayList<>();

    /**
     * to add the orderItem to the list.
     * @param orderItem
     */
    public void addOrderItem(OrderItem orderItem) {
        this.orderItemList.add(orderItem);
    }

    /**
     * to delete the orderItem which user wants to delete.
     * @param orderItem
     */
    public void removeOrderItem(OrderItem orderItem) {
        this.orderItemList.remove(orderItem);
    }

    /**
     * @return the list which saves all orderItems
     */
    public ArrayList<OrderItem> getAllOrderItem(){
        return this.orderItemList;
    }

    /**
     * to search the orderItem which user wants to find in the list.
     * @param product
     * @return the orderItem which user wants to find
     */
    public OrderItem getOrderItem(Product product) {
        for (OrderItem orderItem : orderItemList) {
            if (orderItem.getProduct().equals(product)) {
                return orderItem;
            }
        }
        return null;
    }

    /**    
     * @return the number of orderItems which are saved in the list.
     */     
    public int getNumberOfOrderItems() {
        return this.orderItemList.size();
    }

    /**
     * to sum all the orderItems' value in the list.
     * @return the sum of all the orderItems' value.
     */
    public double getValue() {
        double value = 0.0;
        for (OrderItem orderItem : orderItemList) {
            value += orderItem.getValue();
        }
        return value;
    }

}
```

```java
import java.util.ArrayList;

public class Sales {
    //to save all orders.
    private ArrayList<Order> orders = new ArrayList<>();

    /**
     * to add the order to the list.
     * @param order
     */
    public void addOrder(Order order) {
        this.orders.add(order);
    }

    /**
     * @return the list which saves all orders
     */
    public ArrayList<Order> getAllOrder(){
        return this.orders;
    }
    
    /**
     * @return the number of orders which are saved in the list.
     */
    public int getNumberOfOrders() {
        return this.orders.size();
    }

}
```

## 使用XML格式存储
可以将Sales对象的数据使用XML格式来存储。

### XML

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<SALES>
    <ORDER>
        <ORDERITEM>
            <PRODUCT>
                <CODE>A001</CODE>
                <DESCRIPTION>Almond Flavored Syrup</DESCRIPTION>
                <PRICE>9.0</PRICE>
            </PRODUCT>
            <QUANTITY>3</QUANTITY>
        </ORDERITEM>
        <ORDERITEM>
            <PRODUCT>
                <CODE>A002</CODE>
                <DESCRIPTION>Irish Creme Flavored Syrup</DESCRIPTION>
                <PRICE>9.0</PRICE>
            </PRODUCT>
            <QUANTITY>5</QUANTITY>
        </ORDERITEM>
    </ORDER>
    <ORDER>
        <ORDERITEM>
            <PRODUCT>
                <CODE>A001</CODE>
                <DESCRIPTION>Almond Flavored Syrup</DESCRIPTION>
                <PRICE>9.0</PRICE>
            </PRODUCT>
            <QUANTITY>1</QUANTITY>
        </ORDERITEM>
        <ORDERITEM>
            <PRODUCT>
                <CODE>A004</CODE>
                <DESCRIPTION>Caramel Flavored Syrup</DESCRIPTION>
                <PRICE>9.0</PRICE>
            </PRODUCT>
            <QUANTITY>2</QUANTITY>
        </ORDERITEM>
        <ORDERITEM>
            <PRODUCT>
                <CODE>A006</CODE>
                <DESCRIPTION>Gourmet Coffee Travel Thermo</DESCRIPTION>
                <PRICE>18.0</PRICE>
            </PRODUCT>
            <QUANTITY>3</QUANTITY>
        </ORDERITEM>
    </ORDER>
    <ORDER>
        <ORDERITEM>
            <PRODUCT>
                <CODE>A009</CODE>
                <DESCRIPTION>Gourmet Coffee 36 Cup Filters</DESCRIPTION>
                <PRICE>45.0</PRICE>
            </PRODUCT>
            <QUANTITY>100</QUANTITY>
        </ORDERITEM>
    </ORDER>
</SALES>
```

### 浏览器解析XML

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200229145445216.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

### XML解析错误

如果我们删去最后一行的\<\SALES>，就会解析错误：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200229145641569.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200229153524152.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## 使用JSON格式存储
同样的数据，也可以使用JSON格式来存储。

### JSON
```json
[
    [
        {
            "product":{
                "code":"A001",
                "description":"Almond Flavored Syrup",
                "price":"9.0"
            },
            "quantity":"3"
        },
        {
            "product":{
                "code":"A002",
                "description":"Irish Creme Flavored Syrup",
                "price":"9.0"
            },
            "quantity":"5"
        }
    ],
    [
        {
            "product":{
                "code":"A001",
                "description":"Almond Flavored Syrup",
                "price":"9.0"
            },
            "quantity":"1"
        },
        {
            "product":{
                "code":"A004",
                "description":"Caramel Flavored Syrup",
                "price":"9.0"
            },
            "quantity":"2"
        },
        {
            "product":{
                "code":"A006",
                "description":"Gourmet Coffee Travel Thermo",
                "price":"18.0"
            },
            "quantity":"3"
        }
    ],
    [
        {
            "product":{
                "code":"A009",
                "description":"Gourmet Coffee 36 Cup Filters",
                "price":"45.0"
            },
            "quantity":"100"
        }
    ]
]
```

### JSLint验证
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200229151633170.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## <font color="orange">JSON与XML的相同之处
- 都是纯文本
- 都具有自我描述性，我们能够理解其含义
- 都具有嵌套的层次结构
- 都可通过JavaScript进行解析，Java等语言也支持解析二者
- 包含的数据都可使用AJAX（Asynchronous Javascript And XML）进行传输

## <font color="orange">JSON与XML的不同之处
- JSON没有结束标签，XML严格遵循格式化
- JSON更简洁
- JSON读写速度更快
- JSON能够使用JavaScript内置的eval()函数进行解析
- JSON能使用数组
- JSON不使用保留字

## <font color="orange">AJAX相关JSON与XML
- AJAX应用程序解析XML的流程：
    1. 读取XML文档
    2. 使用XML DOM来循环遍历文档
    3. 读取值并存储在变量中
- AJAX应用程序解析JSON的流程：
    1. 读取JSON字符串
    2. 使用eval()处理JSON字符串

=> 对于AJAX应用程序来说，JSON比XML可以更便捷。

## <font color="orange">JSON与XML的解析
XML需要使用XML解析器来解析，JSON可以使用标准的JavaScript函数来解析，这也是二者最大不同之一了。
- JSON.parse()：将一个 JSON 字符串转换为 JavaScript 对象。
- JSON.stringify()：于将 JavaScript 值转换为 JSON 字符串。


# <font color="red">JSON核心知识

## <font color="orange">JSON语法规则概述
- 大括号（{}）保存对象的K-V对
- 中括号（[]）保存数组，同类多种元素
- 在K-V对中存储数据
- K-V对中的数据用逗号（,）分隔，K与V之间用冒号（:）分隔
- 六种类型：
  - 数字（integer or float）
  - 字符串（""）
  - 逻辑值（true or false）
  - 数组（[]）
  - 对象（{}）
  - null

## <font color="orange">JSON对象相关

### <font color="blue">JSON访问K-V对的对象值
上面的代码可以按照名称访问JSON对象值。
```html
<p>
  ID: <span id="js_id"></span><br/> 
  Name: <span id="js_name"></span><br/> 
  Age: <span id="js_age"></span><br/> 
  Email: <span id="js_email"></span><br/> 
</p>
```

读取id属性为例，还有如下两种写法：
- 使用点号（.）访问：
  ```text
  var a = jsonObj.id;
  ```
- 使用数组式方括号（[]）访问：
  ```text
  var a = jsonObj["id"];
  ```

### <font color="blue">JSON循环读取对象

我们可以使用 for-in 来循环对象读取对象属性和值（参考Java的 for-each 循环）：

```text
for (a in jsonObj) {
    document.getElementById("attribute").innerHTML += a + "：" + jsonObj[a]+ "<br>";
}
```

完整代码：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JSON</title>
  </head>
  <body>
    <h1>员工信息</h1>
      <p id="attribute"></p>
    <script>
      var jsonObj= {
	    "id":"1111",
	    "name":"王富贵", 
	    "age":"30",
		"email":"fugui@gmail.com"
      };
	  for (a in jsonObj) {
        document.getElementById("attribute").innerHTML += a + "：" + jsonObj[a]+ "<br>";
      }
    </script>
  </body>
</html>
```
运行示例：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318165139315.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
### <font color="blue">JSON修改对象的值
可以直接用点（.）运算符或者方括号（[]）来访问并修改对象的值。

下面的代码，把“王富贵”的名字，改成了“陈二狗”：

```text
jsonObj.name="陈二狗";
```

完整代码：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JSON</title>
  </head>
  <body>
    <h1>员工信息</h1>
      <p id="attribute"></p>
    <script>
      var jsonObj= {
	    "id":"1111",
	    "name":"王富贵", 
	    "age":"30",
		"email":"fugui@gmail.com"
      };
	  jsonObj.name="陈二狗";
	  for (a in jsonObj) {
        document.getElementById("attribute").innerHTML += a + "：" + jsonObj[a]+ "<br>";
      }
    </script>
  </body>
</html>
```
运行示例：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318165509952.PNG)


### <font color="blue">JSON删除对象的值
可以使用<code>delete</code>关键词+点（.）运算符或者方括号（[]）来访问并删除对象的值。

下面的代码，删除了王富贵的年龄和Email：
```text
delete jsonObj.age;
delete jsonObj["email"];
```
完整代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JSON</title>
  </head>
  <body>
    <h1>员工信息</h1>
      <p id="attribute"></p>
    <script>
      var jsonObj= {
	    "id":"1111",
	    "name":"王富贵", 
	    "age":"30",
		"email":"fugui@gmail.com"
      };
	  delete jsonObj.age;
	  delete jsonObj["email"];
	  for (a in jsonObj) {
        document.getElementById("attribute").innerHTML += a + "：" + jsonObj[a]+ "<br>";
      }
    </script>
  </body>
</html>
```

运行示例：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318165816712.PNG)

## <font color="orange">JSON数组相关
数组和对象相似，包括访问、修改、删除的点号（.）和删除的delete关键词。

不过，使用属性名+方括号的访问方式被换成了使用索引数字+方括号的访问方式（参考其他编程语言）

## <font color="orange">JSON嵌套问题
之前也说了，可以大括号小括号随便嵌套。

读or改的话，只需要符合上面说的访问语法，逐层使用点号即可。

### <font color="blue">谈谈怎么去理解这个嵌套关系☆☆☆
我想用**Java面向对象**的知识来说明一下。
- 先说为什么是大括号，为什么是中括号？<br/>
系统中可能存在同一类型的很多对象，他们实际上是“平级”的，这时，相当于是数组中存储的多个元素，所以要使用方括号（[]）。
而每个类规定了其对象应该具有的属性，属性有类型，也有其取值，所以K-V对儿表达的正是这种<code>属性名:属性值</code>的关系，它是一个对象内部的。
- 接下来谈谈为什么会嵌套呢？<br/>
四种情况吧：
  - 元素的类型可能是引用类型的，引用类型的对象可能含有某种属性，该属性还是引用类型，这时就出现了层次的嵌套，这是字典套字典，即大括号套大括号。
  - 数组可能不是一维的，二维数组是一维的一维数组，所以存在数组套数组，即中括号套中括号。
  - 数组的元素可能是引用类型的，该类型可能有很多属性，这就是数组套字典，即中括号套大括号。
  - 字典元素的属性中可能有数组，这就是字典套数组，即大括号套中括号。
  
  如此，我们不难理解嵌套的实际意义了。

## <font color="orange">JSON与String的转换
JSON 通常用于与服务端交换数据。通过网络接收服务器端发来的JSON是String，而通过网络发往服务器的JSON也是String，但我们处理的是JSON，所以设计JSON与String的转换。

转换函数是这样的：
- JSON.parse()：String => JSON
- JSON.stringify()：JSON => String

### <font color="blue">JSON.parse()
**语法格式：**
```text
JSON.parse(text[, reviver])
```
**参数说明：**

|参数名称|参数意义|是否必选|
|:---:|:---:|:---:|
|text |有效的JSON字符串|√
|reviver|每个成员都会调用的、用于转换结果的函数|×

**实例：**

接收到数据：

```text
var str = '{"id":"1111", "name":"王富贵", "age":"30", "email":"fugui@gmail.com"}';
```
JSON.parse()：

```text
var jsonObj = JSON.parse(str);
```

### <font color="blue">JSON.stringify()
**语法格式：**
```text
JSON.stringify(value[, replacer[, space]])
```

**参数说明：**

|参数名称|参数意义|是否必选|
|:---:|:---:|:---:|
|value |要转换的JavaScript值（通常为对象或数组）|√
|replacer|用于转换结果的函数或数组|×
|space|文本添加缩进、空格和换行符|×

space参数：
- 值为10以下整数表示这么多空格
- 值为10以上整数表示10个空格
- 可以用其他分隔符表示比如"\t"

**实例：**

接收到数据：

```text
var jsonObj = {"id":"1111", "name":"王富贵", "age":"30", "email":"fugui@gmail.com"};
```
JSON.parse()：

```text
var str = JSON.stringify(jsonObj);
```

**注意事项：**
JSON不允许包含函数，JSON.stringify()会删除JavaScript对象的函数，包括key和value。

真的不建议使用函数，如果非要用，也要先将函数转换为字符串再用。


## <font color="orange">JSON与Date对象的处理
JSON不能存储Date对象！

如果我们想要存储Date对象，需要将其转换为字符串，再将字符串转换为Date对象。

## <font color="orange">JSON文件后缀
- JSON文件的文件类型：".json"
- JSON文本的MIME类型："application/json"

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318162251629.PNG)

# <font color="red">JSON学习工具

## <font color="orange">JSON语法验证器
[JSLint](http://www.jslint.com/)<br/>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318143244595.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## <font color="orange">JSON在线解析器
推荐[菜鸟教程的JSON在线解析器](http://c.runoob.com/front-end/53)，支持如下功能：
- **格式化**
- **压缩**
- **验证**
- **JSON→XML**
- **JSON→CSV**
- **JSON→YAML**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200318143731515.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
