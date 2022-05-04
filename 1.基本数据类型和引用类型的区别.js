/**
 *  基本数据类型: String Number Boolean Null Undefined Symbol
 *  引用数据类型: Objcte Function Array Date
 */

// ----1.存储的位置不同

/**
 *  基本数据类型存储在栈(stack) 占据空间小 大小固定
 *  用于数据类型存储在堆(heap)  占据空间大 大小不固定
 */

/**
 * 引用数据类型在 “栈中” 存储了一个指针
 * 该指针指向堆中该实体的起始地址
 * 当解析器寻找引用值时
 * 会首先在检索栈中的地址
 * 取得地址后从堆中获得实体
 */
