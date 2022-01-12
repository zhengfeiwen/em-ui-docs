### 前端性能优化的目的

>1.从用户角度而言:优化能够让页面加载得更快、对用户的操作响应的更及时，能够给用户提供更为良好的体验。 
>2.从服务商角度而言:优化能够减少页面请求数、或者减小请求所占带宽，能够节省可观的资源。

##### 前端优化的方法有很多种，可以将其分为两大类，第一类是`页面级别的优化`如http请求数，内联脚本的位置优化等，第二类为`代码级别的优化`，例Java中的DOM 操作优化、CSS选择符优化、图片优化以及 HTML结构优化等等。

### 服务器

#### 使用CDN
##### 再次强调第一条黄金定律，减少网页内容的下载时间。提高下载速度还可以通过CDN(内容分发网络)来提升。CDN通过部署在不同地区的服务器来提高客户的下载速度。如果你的网站上有大量的静态内容，世界各地的用户都在访问，我说的是youtube么？那CDN是必不可少的。事实上大多数互联网中的巨头们都有自己的CDN。我们自己的网站可以先通过免费的CDN供应商来分发网页资源。

#### 添加Expires 或Cache-Control报文头

##### 这条规则分为两个方面，

##### 对于`静态内容`添加Expires，将静态内容设为永不过期，或者很长时间以后。在IIS中设置Expires可以看Configure the HTTP Expires Response Header (IIS 7)。

##### 对于`动态内容`应用合适的Cache-Control，让浏览器根据条件来发送请求。

#### Gzip压缩传输文件

##### Gzip通常可以减少70%网页内容的大小，包括脚本、样式表、图片等文件。Gzip比deflate更高效，主流服务器都有相应的压缩支持模块。

##### IIS中内建了`静态压缩和动态压缩模块`，如何配制可以参考Enable HTTP Compression of Static Content (IIS 7)和Enable HTTP Compression of Dynamic Content (IIS 7)。

##### 值得注意的是pdf文件可以从需要被压缩的类型中剔除，因为pdf文件本身已经压缩，gzip对其效果不大，而且会浪费CPU。

#### 配置ETags

##### 虽然标题叫配制ETags，但是这里你要根据具体情况进行一些判断。首先Etag简单来说是通过一个文件版本标识使得服务器可以轻松判断该请求的内容是否有所更新，如果没有就回复304 (not modified)，从而避免下载整个文件。

##### 但是`Etags`的版本信息即使主流服务器未能很好地支持跨服务器的判断，比如你从一个服务器集群中一台得到`Etags`，然后发送到了另一台那么校验很有可能会失败。

##### 如果你遇到这样的问题，IIS 7中可以通过如下方法将Etag去掉，使用URL Rewrite，然后在`web.config`中添加如下配制

      <rewrite>
        <outboundRules>
            <rule name="Remove ETag">
              <match serverVariable="RESPONSE_ETag" pattern=".+" />
              <action type="Rewrite" value="" />
            </rule>
        </outboundRules>
      </rewrite>

##### IIS8里提供了一个简单配制来直接关闭Etag，

      <element name="clientCache">
        <attribute name="cacheControlMode" type="enum" defaultValue="NoControl">
          <enum name="NoControl" value="0" />
          <enum name="DisableCache" value="1" />
          <enum name="UseMaxAge" value="2" />
          <enum name="UseExpires" value="3" />
        </attribute>
        <attribute name="cacheControlMaxAge" type="timeSpan" defaultValue="1.00:00:00" />
        <attribute name="httpExpires" type="string" />
        <attribute name="cacheControlCustom" type="string" />
        
        <attribute name="setEtag" type="bool" defaultValue="false" />
      </element>

#### 尽早flush输出

##### 网页后台程序中我们知道有个方法叫`Response.Flush()`，一般我们调用它都是在程序末尾，但注意这个方法可以被调用多次。目的是可以将现有的缓存中的回复内容先发给客户端，让客户端“有活干”。

##### 那在什么时候调用这个方法比较好呢？一般情况下我们可以在对于需要加载比较多外部脚本或者样式表时可以提前调用一次，客户端收到了关于脚本或其他外部资源的链接可以并行的先发请求去下载，服务器接下来把后续的处理结果发给客户端。

#### 使用GET Ajax请求

##### 浏览器在实现`XMLHttpRequest POST`的时候分成两步，先发`header`，然后发送数据。而GET却可以用一个TCP报文完成请求。另外GET从语义上来讲是去服务器取数据，而POST则是向服务器发送数据，所以我们使用Ajax请求数据的时候尽量通过GET来完成。

#### 避免空的图片src

##### 空的图片src仍然会使浏览器发送请求到服务器，这样完全是浪费时间，而且浪费服务器的资源。尤其是你的网站每天被很多人访问的时候，这种空请求造成的伤害不容忽略。

##### 浏览器如此实现也是根据RFC 3986 - Uniform Resource Identifiers标准，空的src被定义为当前页面。

##### 所以注意我们的网页中是否存在这样的代码

##### `straight HTML` 
      <img src="">

##### `JavaScript` 
      var img = new Image()
      img.src = ""