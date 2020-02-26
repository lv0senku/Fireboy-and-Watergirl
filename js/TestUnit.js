/**
 * @author rrcat920 <wuqieor@outlook.com>
 * @date 2020/2/26 21:38
 */

/**
 * 测试框架
 * @example
 * // 测试数: 1    通过数: 1   通过率: 100%
 * test.assertTrue(true);
 * test.run();
 * @example
 * // 测试数: 2    通过数: 1   通过率: 50%
 * // console:
 * // 1 === 1
 * test.assertEqual(1, 1);
 * test.assertNotEqual(1, 1);
 */
let test = {
    passed: 0,
    total: 0,
    /**
     * 私有的小测试函数
     * @param lhs 左边
     * @param rhs 右边
     * @param str 输出字符串
     * @param flag 等于传入true，否则false
     */
    test: function (lhs, rhs, str, flag = true) {
        ++this.total;
        if (flag) {
            if (lhs === rhs) {
                ++this.passed;
            } else {
                console.log(str);
            }
        } else {
            if (lhs !== rhs) {
                ++this.passed;
            } else {
                console.log(str);
            }
        }

    },
    assertEqual: function(lhs, rhs) {
        this.test(lhs, rhs, lhs + " !== " + rhs);
    },
    assertNotEqual: function(lhs, rhs) {
        this.test(lhs, rhs, lhs + " === " + rhs, false);
    },
    assertTrue: function(value) {
        this.test(value, true, value + " is not true");
    },
    assertFalse: function(value) {
        this.test(value, false, value + " is not false");
    },
    assertNull: function(value) {
        this.test(value, null, value + " is not null");
    },
    assertUndefined: function(value) {
        this.test(value, undefined, value + " is not undefined");
    },
    run: function() {
        if (this.total) {
            console.log("测试数: " + this.total +
                "\t通过数: " + this.passed +
                "\t通过率: " + (this.passed === 0 ?
                    "0%" : this.passed / this.total * 100 + "%"));
        }
    },
};