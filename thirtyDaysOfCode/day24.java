public static Node removeDuplicates(Node head) {
    if(head==null){
        return head;
    }
    
    Node current = head;
    
    while(current.next!=null) {
        while(current.next!=null && current.data == current.next.data){
            current.next = current.next.next;
        }   
        if(current.next!=null) { 
            current = current.next;
        }
    }
    return head;
}