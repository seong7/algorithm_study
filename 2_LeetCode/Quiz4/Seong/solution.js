var mergeTwoLists = function(l1, l2) {
    const mergedHead = {
        val: null,
        next: null
    }
    let current = mergedHead;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return mergedHead.next;
};


var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return (l1? l1 : l2);
    
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } 
};