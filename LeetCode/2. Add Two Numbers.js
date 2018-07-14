var addTwoNumbers = function(l1, l2) {
    let sum = [], carry = 0;

    while (l1 || l2) {
        if (l1 && l2) {
            sum.push((l1.val + l2.val + carry) % 10);
            if (l1.val + l2.val + carry >= 10) {
                carry = 1;
            } else {
                carry = 0;
            }
            l1 = l1.next;
            l2 = l2.next;
        }
        else if (l1) {
            sum.push((l1.val + carry)%10);
            if (l1.val + carry >= 10) {
                carry = 1;
            } else {
                carry = 0;
            }
            l1 = l1.next;
        }
        else {
            sum.push((l2.val + carry)%10);
            if (l2.val + carry >= 10) {
                carry = 1;
            } else {
                carry = 0;
            }
            l2 = l2.next;
        }
    }
    if (carry === 1) {
        sum.push(carry);
    }

    return sum;
};

// a better solution
/*
var addTwoNumbers = function(l1, l2) {
    result = [];
    var sum = 0;
    var carry = 0;

    while (l1 || l2 || carry) {
        sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = sum > 9 ? 1 : 0;
        result.push(sum % 10);
    }

    return result;
}
 */