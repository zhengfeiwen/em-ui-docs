export const saNavs = [
  {
    id: 'array',
    title: '数组',
    desc: '数组是可以再内存中连续存储多个元素的结构，在内存中的分配也是连续的，数组中的元素通过数组下标进行访问，数组下标从0开始。',
    type: 'structure'
  },
  {
    id: 'stack',
    title: '栈',
    desc: '栈是一种特殊的线性表，仅能在线性表的一端操作，栈顶允许操作，栈底不允许操作。 栈的特点是：先进后出，或者说是后进先出，从栈顶放入元素的操作叫入栈，取出元素叫出栈 。',
    type: 'structure'
  },
  {
    id: 'queue',
    title: '队列',
    desc: '队列与栈一样，也是一种线性表，不同的是，队列可以在一端添加元素，在另一端取出元素，也就是：先进先出。从一端放入元素的操作称为入队，取出元素为出队 。',
    type: 'structure'
  },
  {
    id: 'link',
    title: '链表',
    desc: '链表是物理存储单元上非连续的、非顺序的存储结构，数据元素的逻辑顺序是通过链表的指针地址实现，每个元素包含两个结点，一个是存储元素的数据域 (内存空间)，另一个是指向下一个结点地址的指针域。根据指针的指向，链表能形成不同的结构，例如单链表，双向链表，循环链表等。',
    type: 'structure'
  },
  {
    id: 'tree',
    title: '树',
    desc: '树是一种数据结构，它是由n（n>=1）个有限节点组成一个具有层次关系的集合。',
    type: 'structure'
  },
  {
    id: 'hash',
    title: '散列表',
    desc: '散列表，也叫哈希表，是根据关键码和值 (key和value) 直接进行访问的数据结构，通过key和value来映射到集合中的一个位置，这样就可以很快找到集合中的对应元素。',
    type: 'structure'
  },
  {
    id: 'heap',
    title: '堆',
    desc: '堆是一种比较特殊的数据结构，可以被看做一棵树的数组对象 。',
    type: 'structure'
  },
  {
    id: 'map',
    title: '图',
    desc: '图是由结点的有穷集合V和边的集合E组成。其中，为了与树形结构加以区别，在图结构中常常将结点称为顶点，边是顶点的有序偶对，若两个顶点之间存在一条边，就表示这两个顶点具有相邻关系。',
    type: 'structure'
  },
  {
    id: 'bubble',
    title: '冒泡排序',
    desc: '冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。 ',
    type: 'algorithm'
  },
  {
    id: 'selection',
    title: '选择排序',
    desc: '选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。',
    type: 'algorithm'
  },
  {
    id: 'insertion',
    title: '插入排序',
    desc: '插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。',
    type: 'algorithm'
  },
  {
    id: 'shell',
    title: '希尔排序',
    desc: '1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。',
    type: 'algorithm'
  },
  {
    id: 'heap',
    title: '堆排序',
    desc: '堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。',
    type: 'algorithm'
  },
  {
    id: 'merge',
    title: '归并排序',
    desc: '归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。 ',
    type: 'algorithm'
  },
  {
    id: 'quick',
    title: '快速排序',
    desc: '快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。',
    type: 'algorithm'
  },
  {
    id: 'counting',
    title: '计数排序',
    desc: '计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。',
    type: 'algorithm'
  },
  {
    id: 'bucket',
    title: '桶排序',
    desc: '桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。',
    type: 'algorithm'
  },
  {
    id: 'radix',
    title: '基数排序',
    desc: '基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。',
    type: 'algorithm'
  }
]

export const poNavs = [
  {
    id: 'html',
    title: 'HTML',
    type: 'performance-optimization',
    desc: '通过控制请求数量，异步加载数据方式减小网页大小'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    type: 'performance-optimization',
    desc: '按合理的顺序并且简化js脚本'
  },
  {
    id: 'css',
    title: 'CSS',
    type: 'performance-optimization',
    desc: '减少样式表的加载，尽可能的减少样式计算'
  },
  {
    id: 'cookie',
    title: 'Cookie',
    type: 'performance-optimization',
    desc: '减小cookie大小'
  },
  {
    id: 'image',
    title: 'Image',
    type: 'performance-optimization',
    desc: '合并图片，缓存图片'
  },
  {
    id: 'server',
    title: 'Server',
    type: 'performance-optimization',
    desc: '分发服务，减少对服务器的访问数量，合理使用协商缓存等'
  }
]

export const crNavs = [
  {
    id: 'html',
    title: 'HTML',
    type: 'code',
    desc: '规范HTML代码的书写风格，命名规范等'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    type: 'code',
    desc: '规范JavaScript代码的书写风格，命名规范等'
  },
  {
    id: 'css',
    title: 'CSS',
    type: 'code',
    desc: '规范CSS代码的书写风格，命名规范等'
  },
  {
    id: 'logic',
    title: '逻辑规范',
    type: 'logic',
    desc: '规范特定场景或者情况使用统一的代码风格，统一的算法，统一的架构结构'
  },
  {
    id: 'otherrule',
    title: '其他规范',
    type: 'otherrule',
    desc: '使用工具，组件类别，版本等规范'
  }
]
